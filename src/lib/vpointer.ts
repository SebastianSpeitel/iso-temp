import {
  customRef,
  reactive,
  ref,
  Ref,
  shallowReactive,
  track,
  TrackOpTypes,
  trigger,
  TriggerOpTypes
} from "@vue/reactivity";

type Ptr<T extends Object> = T & {
  pointer: number;
};

// function VArray<T extends Int32Array>() {
//   let array: T;
//   let pointer: number;

//   return {
//       array:
//   }

//   return shallowReactive({
//     get array() {
//       return array;
//     },
//     set array(v) {
//       array = v;
//     },
//     get pointer() {
//       return pointer;
//     },
//     set pointer(v) {
//       pointer = v;
//     }
//   });
//}

// export function VArray<T extends Int32Array>() {
//   let pointer = ref<number>(null);
//   let _array: T;

//   const array = customRef<T>((track, trigger) => ({
//     get() {
//       track();

//       return _array;
//     },
//     set(value) {
//       _array = value;
//       trigger();
//     }
//   }));

//   return { pointer, array };
// }

import type { ASUtil } from "@assemblyscript/loader";

export abstract class VPointer<T> {
  protected _value: T;
  protected _ptr: number;
  private track: () => void;
  private trigger: () => void;
  public readonly ref: Ref<void>;

  constructor();
  constructor(value: T);
  constructor(value?: T) {
    if (typeof value !== "undefined") this.value = value;

    this.ref = customRef((track, trigger) => {
      this.track = track;
      this.trigger = trigger;
      return {
        get: () => track(),
        set: () => trigger()
      };
    });
  }

  //   protected abstract retain(ptr: number): void;
  //   protected abstract release(ptr: number): void;
  //   protected abstract alloc(val: T): number;
  //   protected abstract get(ptr: number): T;

  protected abstract alloc(v: T): void;
  protected abstract free(): void;
  // protected abstract set(v: T): void;

  get value(): T {
    this.track();
    //track(this.ref, TrackOpTypes.GET, "value");
    return this._value;
  }

  set value(v: T) {
    this.free();
    this.alloc(v);
    this.trigger();
    //trigger(this, TriggerOpTypes.SET, "value");
    //trigger(this, TriggerOpTypes.SET, "ptr");
  }

  get ptr(): number {
    this.track();
    //track(this, TrackOpTypes.GET, "ptr");
    return this._ptr;
  }
}

interface TypedArrayOptions {
  util: ASUtil;
  id: number;
}

export class VInt32Array extends VPointer<Int32Array> {
  id: number;
  util: ASUtil;

  constructor(length: number, opts: TypedArrayOptions);
  constructor(values: ArrayLike<number>, opts: TypedArrayOptions);
  constructor(
    lengthOrValues: number | ArrayLike<number>,
    { id, util }: TypedArrayOptions
  ) {
    super();
    this.id = id;
    this.util = util;

    if (typeof lengthOrValues === "number") {
      lengthOrValues = { length: lengthOrValues };
    }

    this.alloc(lengthOrValues);
  }

  alloc(value: ArrayLike<number>) {
    this._ptr = this.util.__allocArray(this.id, value);
    this._value = this.util.__getInt32ArrayView(this._ptr);
    this.util.__retain(this._ptr);
  }

  free() {
    if (!this._ptr) return;
    this.util.__release(this._ptr);
  }

  set value(v: Int32Array) {
    if (this._value && v.length === this._value.length) {
      this._value.set(v);
      return;
    }

    super.value = v;
  }

  get value() {
    return super.value;
  }

  // set(v: ArrayLike<number>) {
  //   if (this._value && v.length === this._value.length) {
  //     this._value.set(v);
  //     return;
  //   }

  //   this.free();
  //   this.alloc(v);
  // }

  //   release(ptr: number) {
  //     this.util.__release(ptr);
  //   }

  //   retain(ptr: number) {
  //     this.util.__retain(ptr);
  //   }

  //   alloc(val: Int32Array) {
  //     return this.util.__allocArray(this.id, val);
  //   }

  //   get(ptr: number) {
  //     const arr = this.util.__getInt32ArrayView(ptr);
  //     return arr;
  //   }
}

// export class VArray<T extends Int32Array> {
//   private value: T;
//   private pointer: number;
//   private util: ASUtil;

//   constructor(util: ASUtil) {
//     this.util = util;
//   }

//   resize(length: number) {
//     if (this.pointer) this.util.__release(this.pointer);
//   }

//   get view() {
//     track(this, TrackOpTypes.GET, "view");
//     return this.value;
//   }

//   set view(v) {
//     this.value = v;
//     trigger(this, TriggerOpTypes.SET, "view");
//     trigger(this, TriggerOpTypes.SET, "ptr");
//   }

//   get ptr() {
//     track(this, TrackOpTypes.GET, "ptr");
//     return this.pointer;
//   }

//   set ptr(v) {
//     this.pointer = v;
//     trigger(this, TriggerOpTypes.SET, "ptr");
//     trigger(this, TriggerOpTypes.SET, "view");
//   }
// }

// export class VArray<T extends Int32Array> implements Ref<T> {
//   pointer: number;
//   value: T;

//   constructor() {}
// }
