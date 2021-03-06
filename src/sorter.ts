import type { PlacedIsoObject } from "./IsoObject";
import "./polyfills";

//@ts-ignore
import {
  instantiate
  //@ts-ignore
} from "assemblyscript:./assembly/sorter.ts";

//import type * as Sorter from "./assembly/sorter";

import type * as _Sorter from "./assembly/sorter";
import {
  ref,
  shallowReactive,
  shallowRef,
  toRaw,
  triggerRef,
  watch,
  watchEffect
} from "vue";

import type { ASUtil } from "@assemblyscript/loader";
// interface Sorter extends ReturnType<instantiateSync> {
//   exports: ReturnType<instantiateSync>["exports"] & {
//     Int32Array_ID: number;
//     sort(ptr: number): void;
//   };
// }

type ASPointer<T> = number;

type ASExport<T> = T extends (...args: infer A) => infer R
  ? (
      ...args: { [K in keyof A]: ASPointer<A[K]> }
    ) => R extends void ? void : ASPointer<R>
  : ASPointer<T>;

type ASExports<T extends Object> = {
  readonly [prop in keyof T]: ASExport<T[prop]>;
};

interface ASModule<T extends Object> {
  exports: ASUtil & ASExports<T>;
}
type TSorter = typeof _Sorter;
type Sorter = ASModule<TSorter>;

type SortInfo = [
  x: number,
  X: number,
  y: number,
  Y: number,
  z: number,
  Z: number,
  ref: number
];
const sortInfoCache = shallowReactive(new WeakMap<PlacedIsoObject, SortInfo>());

function _sortInfo(o: PlacedIsoObject): SortInfo {
  const { x: X, y: Y, z, dx, dy, dz } = o;
  return [
    ((X - dx) * 100) | 0,
    (X * 100) | 0,
    ((Y - dy) * 100) | 0,
    (Y * 100) | 0,
    (z * 100) | 0,
    ((z + dz) * 100) | 0,
    o.id
  ];
}

function sortInfo(o: PlacedIsoObject): SortInfo {
  let info = sortInfoCache.get(o);

  if (!info) {
    watchEffect(() => {
      info = _sortInfo(o);
      sortInfoCache.set(o, info);
    });
  }
  return info;
}

import { VInt32Array } from "./lib/vpointer";

let instance: Sorter;
export async function sorted(
  unsorted: Set<PlacedIsoObject>
): Promise<ReadonlyArray<PlacedIsoObject>> {
  const sorted = shallowReactive<PlacedIsoObject[]>([]);
  if (!instance) instance = await instantiate();
  const sorter = instance;

  const {
    __allocArray,
    __getInt32ArrayView,
    Int32Array_ID,
    __retain,
    __release,
    sort
  } = sorter.exports;

  const infos = new VInt32Array(unsorted.size * 7, {
    id: Int32Array_ID,
    util: sorter.exports
  });
  let objects = new Map<number, PlacedIsoObject>();
  const offsets = new WeakMap<PlacedIsoObject, number>();

  let callbackHandle: number;

  function updateSingle(obj: PlacedIsoObject) {
    //console.count("updateSingle");
    const offset = offsets.get(obj);
    //console.log("updateSingle", obj, offset);
    const info = _sortInfo(obj);
    infos.value.set(info, offset);
    if (!callbackHandle) {
      callbackHandle = window.requestIdleCallback(doSort, { timeout: 1000 });
    }
  }

  let offset = 0;
  for (let obj of unsorted) {
    offsets.set(obj, offset);
    objects.set(obj.id, obj);
    watch([() => obj.x, () => obj.y, () => obj.z], () => updateSingle(obj), {
      immediate: true
    });
    offset += 7;
  }

  function doSort(deadline: IdleDeadline) {
    callbackHandle = 0;
    const startedAt = performance.now();
    const maxTime = deadline.timeRemaining();
    console.count("sort");
    console.time("sort");
    console.time("sort:total");
    sort(infos.ptr);
    console.timeEnd("sort");
    const sortedView = toRaw(infos.value);
    //console.log("sort", ptr.value, sortedView[7 + 6]);
    const len = sortedView.length / 7;

    // Elements got removed => splice array
    if (sorted.length > len) sorted.splice(len);

    for (let index = 0; index < len; ++index) {
      const obj = objects.get(sortedView[index * 7 + 6]);
      offsets.set(obj, index * 7);
      sorted[index] = obj;
    }

    const timeTaken = performance.now() - startedAt;
    if (timeTaken > maxTime) {
      console.warn("Sorting took to long:", timeTaken, ">", maxTime);
    }
    console.timeEnd("sort:total");
  }

  return sorted;
}
