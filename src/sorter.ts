import type { PlacedIsoObject, RenderInfo } from "./IsoObject";
// import { multithread } from "../lib/multithread";
//@ts-ignore
import {
  instantiate
  //@ts-ignore
} from "assemblyscript:./assembly/sorter.ts";

export interface Sortable<T> {
  x: number;
  y: number;
  z: number;
  X: number;
  Y: number;
  Z: number;
  ref: T;
}

export function _isoSort<T>(unsorted: Set<Sortable<T>>) {
  //console.time("ordering:sort_");
  const result: T[] = [];
  while (unsorted.size) {
    let first: Sortable<T>;
    for (let next of unsorted) {
      //O right of first => O in front of first
      if (first && next.x >= first.X) continue;

      // A left of B => A in front of B
      if (first && next.y >= first.Y) continue;

      // A over B => A in front of B
      if (first && next.z >= first.Z) continue;

      first = next;
    }
    result.push(first.ref);
    unsorted.delete(first);
  }
  //console.timeEnd("ordering:sort_");
  return result;
}
// console.count("sorter loaded");
// console.count("sorter loaded");
// const __isoSort = multithread(_isoSort);

let ___isoSort;

import type * as Sorter from "./assembly/sorter";
import {
  computed,
  ComputedRef,
  customRef,
  reactive,
  ref,
  Ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  unref,
  watch,
  watchEffect
} from "vue";

instantiate({
  sorter: {
    log: n => console.log("log", n)
  }
}).then(({ exports }) => {
  // AsBind.instantiate().then(instance => {
  // })
  // WebAssembly.instantiateStreaming(fetch(wasmUrl), {
  //   env: {
  //     abort(_msg, _file, line, column) {
  //       console.error("abort called at main.ts:" + line + ":" + column);
  //     }
  //   }
  // }).then(({ instance }) => {
  console.log(exports);
  const {
    __allocArray,
    sort,
    Int32Array_ID,
    __getInt32Array,
    __release,
    __retain
  } = exports;

  ___isoSort = function (arr: ArrayLike<Sortable<number>>) {
    console.time("flatMap");
    const flat = Array.from(arr, (v: Sortable<number>) => [
      (v.x * 1000) | 0,
      (v.X * 1000) | 0,
      (v.y * 1000) | 0,
      (v.Y * 1000) | 0,
      (v.z * 1000) | 0,
      (v.Z * 1000) | 0,
      v.ref
    ]).flat();
    console.timeEnd("flatMap");
    //console.log(flat);
    const arrPtr = __retain(__allocArray(Int32Array_ID as number, flat));

    console.time("sortWasm");
    const sortedPtr = sort(arrPtr as any);
    console.log({ sortedPtr, arrPtr });

    console.timeEnd("sortWasm");

    __release(arrPtr);
    const sorted = __getInt32Array(arrPtr as any);
    //console.log(sorted);
    const refs = [];
    for (let i = 0; i < sorted.length; i += 7) refs.push(sorted[i + 6]);
    __release(sortedPtr as any);
    //console.log({ refs });
    return refs;
  };
  //@ts-ignore
  window.sort = ___isoSort;
  //console.log(instance.exports.add(40, 2));
});

export function isoSort(unsorted: Set<RenderInfo>): PlacedIsoObject[] {
  //return _isoSort(unsorted);

  if (!___isoSort) return [...unsorted.values()].map(({ ref }) => ref);
  const map = new Map<number, PlacedIsoObject>();
  const serializable = new Set(
    Array.from(unsorted, (u, i) => {
      map.set(i, u.ref);
      return { ...u, ref: i };
    })
  );

  const sorted = ___isoSort(serializable);
  return sorted.map((i: any) => map.get(i));

  // const promise = new Promise<PlacedIsoObject[]>(res => {
  //   worker.onmessage = (e: MessageEvent<PlacedIsoObject[]>) => {
  //     const sorted = e.data.map((i: any) => map.get(i));
  //     res(sorted);
  //   };
  // });
  // worker.postMessage(serializable);
  // return promise;
}

type instantiateSync = typeof import("@assemblyscript/loader")["instantiateSync"];
interface Sorter extends ReturnType<instantiateSync> {
  exports: ReturnType<instantiateSync>["exports"] & {
    Int32Array_ID: number;
    sort(ptr: number): void;
  };
}

let sorterP: Promise<Sorter> = instantiate();
// instantiate().then(instance => (sorter = instance));

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
function sortInfo(o: PlacedIsoObject): SortInfo {
  let info = sortInfoCache.get(o);

  if (!info) {
    watchEffect(() => {
      const { x: X, y: Y, z, dx, dy, dz } = o;
      info = [
        ((X - dx) * 100) | 0,
        (X * 100) | 0,
        ((Y - dy) * 100) | 0,
        (Y * 100) | 0,
        (z * 100) | 0,
        ((z + dz) * 100) | 0,
        o.id
      ];
      sortInfoCache.set(o, info);
    });
  }
  return info;
}

export async function sorted(
  unsorted: Set<PlacedIsoObject>
): Promise<ReadonlyArray<PlacedIsoObject>> {
  const sorted = shallowReactive<PlacedIsoObject[]>([]);
  const sorter = await sorterP;

  const {
    __allocArray,
    __getInt32ArrayView,
    Int32Array_ID,
    __retain,
    __release,
    sort
  } = sorter.exports;

  const view = shallowRef<Int32Array>(null);
  const ptr = ref<number>(null);
  let objects: Map<number, PlacedIsoObject>;

  function realloc() {
    if (view.value && view.value.length === unsorted.size * 7) return;

    if (ptr.value) __release(ptr.value);
    objects = new Map();
    let _arr = new Int32Array(unsorted.size * 7);
    let offset = 0;
    for (let obj of unsorted) {
      const info = sortInfo(obj);

      objects.set(info[6], obj);
      _arr.set(info, offset);
      offset += 7;
    }

    ptr.value = __retain(__allocArray(Int32Array_ID, _arr));
    console.log(ptr.value);

    view.value = shallowReactive(__getInt32ArrayView(ptr.value));
    console.log("alloc", view.value[7 + 6]);
    doSort();
  }

  watchEffect(realloc);

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
    console.time("sort");
    sort(ptr.value);
    console.timeEnd("sort");
    const sortedView = __getInt32ArrayView(ptr.value);
    //const sortedView = unref(view);
    console.log("sort", ptr.value, sortedView[7 + 6]);
    const len = sortedView.length / 7;

    // Elements got removed => splice array
    if (sorted.length > len) sorted.splice(len);

    for (let index = 0; index < len; ++index) {
      const obj = objects.get(sortedView[index * 7 + 6]);
      sorted[index] = obj;
    }
  }

  watchEffect(doSort);
  watch(
    () => {
      unsorted.forEach(({ x, y, z }) => {
        x;
        y;
        z;
      });
    },
    doSort,
    { deep: true }
  );

  return sorted;
}

// export const runner = __isoSort.runner;

// let worker: Worker;
// if (typeof window !== "undefined" && window.Worker) {
//   worker = new Worker(import.meta.url, { name: "Sorter", type: "module" });
// }

// if (typeof self !== "undefined") {
//   const w = (self as AbstractWorker) as Worker;
//   w.onmessage = (e: MessageEvent<Set<RenderInfo>>) => {
//     w.postMessage(_isoSort(e.data));
//   };
// }
