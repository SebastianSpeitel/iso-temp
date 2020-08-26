/// <_reference path="../../node_modules/assemblyscript/std/portable/index.d.ts" />

// export * from "../../node_modules/as-bind/lib/assembly/as-bind";

declare function log(n: i32): void;

export const Int32Array_ID = idof<Int32Array>();

function swap(arr: Int32Array, a: i32, b: i32): void {
  const tmp: i32 = arr[b];
  arr[b] = arr[a];
  arr[a] = tmp;
}

export function sort(arr: Int32Array): void {
  for (let i: i32 = 0; i < arr.length; i += 7) {
    //log(-1);
    let first: i32 = i;
    for (let next: i32 = i + 7; next < arr.length; next += 7) {
      // next.x >= first.X
      if (arr[next] >= arr[first + 1]) continue;

      // next.y >= first.Y
      if (arr[next + 2] >= arr[first + 3]) continue;

      // next.z >= first.Z
      if (arr[next + 4] >= arr[first + 5]) continue;

      first = next;
    }
    for (let prop: u8 = 0; prop < 7; prop++) {
      swap(arr, i + prop, first + prop);
    }
  }
}
