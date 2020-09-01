import type { PlacedIsoObject } from "./IsoObject";

//@ts-ignore
import {
  instantiate
  //@ts-ignore
} from "assemblyscript:./assembly/sorter.ts";

import type * as Sorter from "./assembly/sorter";
import {
  ref,
  shallowReactive,
  shallowRef,
  toRaw,
  triggerRef,
  watch,
  watchEffect
} from "vue";
import { track, TrackOpTypes } from "@vue/reactivity";

type instantiateSync = typeof import("@assemblyscript/loader")["instantiateSync"];
interface Sorter extends ReturnType<instantiateSync> {
  exports: ReturnType<instantiateSync>["exports"] & {
    Int32Array_ID: number;
    sort(ptr: number): void;
  };
}

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

  // function realloc() {
  //   if (view.value && view.value.length === unsorted.size * 7) return;

  //   if (ptr.value) __release(ptr.value);
  //   objects = new Map();
  //   let _arr = new Int32Array(unsorted.size * 7);
  //   let offset = 0;
  //   for (let obj of unsorted) {
  //     const info = sortInfo(obj);

  //     objects.set(info[6], obj);
  //     _arr.set(info, offset);
  //     offset += 7;
  //   }

  //   ptr.value = __retain(__allocArray(Int32Array_ID, _arr));
  //   console.log(ptr.value);

  //   view.value = shallowReactive(__getInt32ArrayView(ptr.value));
  //   console.log("alloc", view.value[7 + 6]);

  //   doSort();
  // }

  // function resize() {
  //   console.time("resize");
  //   const ptrOld = sortedBuffer.ptr;
  //   if (ptrOld) __release(ptrOld);
  //   const emptryArr = new Array<undefined>(unsorted.size * 7);
  //   const ptrNew = __retain(__allocArray(Int32Array_ID, emptryArr));
  //   sortedBuffer.value = shallowReactive(__getInt32ArrayView(ptrNew));
  //   ptr.value = ptrNew;
  //   console.timeEnd("resize");
  // }

  // function fillAll() {
  //   console.time("fill");
  //   const v = infos.value;
  //   let offset = 0;

  //   objects.clear();
  //   for (let obj of unsorted) {
  //     const info = sortInfo(obj);

  //     objects.set(info[6], obj);
  //     v.set(info, offset);
  //     offset += 7;
  //   }
  //   console.timeEnd("fill");
  // }

  // function update() {
  //   if (unsorted.size * 7 !== view.value?.length) {
  //     resize();
  //   }
  //   fillAll();
  //   doSort();
  // }

  function updateSingle(obj: PlacedIsoObject) {
    console.count("updateSingle");
    const offset = offsets.get(obj);
    console.log("updateSingle", obj, offset);
    const info = _sortInfo(obj);
    infos.value.set(info, offset);
  }

  // resize();

  let offset = 0;
  for (let obj of unsorted) {
    offsets.set(obj, offset);
    objects.set(obj.id, obj);
    watch([() => obj.x, () => obj.y, () => obj.z], () => updateSingle(obj), {
      immediate: true
    });
    offset += 7;
  }

  let shouldSort = false;

  console.log(infos.value);
  watch(infos.ref, () => (shouldSort = true), { immediate: true });

  setInterval(() => {
    if (!shouldSort) return;
    doSort();
    shouldSort = false;
  }, 1000);

  //watchEffect(realloc);
  //watchEffect(update);

  // let i = 0;
  // for (let o of unsorted) {
  //   watchEffect(() => {
  //     const offset = offsets.get(o);
  //     map.set(o.id, o);

  //     const { x: X, y: Y, z } = o;
  //     view.set([X - o.dx, X, Y - o.dy, Y, z, z + o.dz, o.id], i);
  //   });

  //   i += 7;
  // }
  // return function* () {
  //   for (let offset = 0; offset < view.length; offset += 7) {
  //     yield objects.get(view[offset + 6]);
  //   }
  // };

  function doSort() {
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

    console.timeEnd("sort:total");
  }

  //watchEffect(doSort);
  // watch(
  //   () => {
  //     unsorted.forEach(({ x, y, z }) => {
  //       x;
  //       y;
  //       z;
  //     });
  //   },
  //   doSort,
  //   { deep: true }
  // );

  return sorted;
}
