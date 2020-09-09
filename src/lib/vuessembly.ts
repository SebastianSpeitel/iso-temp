import {
  instantiateStreaming as _instantiateStreaming,
  ASUtil
} from "@assemblyscript/loader";
import { isRef, Ref } from "@vue/reactivity";
import { VPointer } from "./vpointer";

function unref(ref: number | VPointer<any>): number {
  if (typeof ref === "number") return ref;
  if (ref instanceof VPointer) return ref.ptr;
  console.warn("Couldn't unref", ref);
}

interface VInstance extends ASUtil {}

type Func<A extends any[] = unknown[], R = any> =
  | ((...args: A) => R)
  | Function;

type VExport<T> = T extends Func<infer A, infer R>
  ? (
      ...args: { [K in keyof A]: VPointer<A[K]> }
    ) => R extends void ? void : VPointer<R>
  : T extends number
  ? number
  : VPointer<T>;

type VExports<T extends Object> = {
  [P in keyof T]: VExport<T[P]>;
};

interface VModule<T extends Object> {
  exports: ASUtil & VExports<T>;
}

type ASExport<T> = T extends Func<infer A, infer R>
  ? Func<{ [K in keyof A]: number }, R extends void ? void : number>
  : number;

type ASExports<T extends Object> = {
  readonly [E in keyof T]: ASExport<T[E]>;
};

function bindFunction<T extends Func>(fun: ASExport<T>): VExport<T> {
  const bound = <VExport<T>>((...args: unknown[]) => {
    const asArgs = args.map(unref);
    const ret = fun(...asArgs);
    return ret;
  });

  return bound;
}

function isFunction(arg: unknown): arg is Func {
  return typeof arg === "function";
}

function bind<T>(val: ASExport<T>): VExport<T> {
  let bound: VExport<any>;
  if (isFunction(val)) {
    bound = bindFunction<T extends Func ? T : never>(val);
  }

  if (typeof val === "number") {
    bound = val;
  }

  return bound;
}

function bindExport<T extends Object, P extends keyof T>(
  unbound: ASExports<T>,
  key: P
): VExport<T[P]> {
  const unboundVal = unbound[key];

  if (typeof unboundVal === "number") {
    return unboundVal as VExport<T[P]>;
  }

  if (typeof unboundVal === "function") {
    return bindFunction(unboundVal) as VExport<T[P]>;
  }
}

type a = VExport<any>;

function bindExports<T>(exports: ASExports<T>): VExports<T> {
  const boundExports: Partial<VExports<T>> = Object.create(null);

  for (let key of Object.keys(exports) as Array<keyof T>) {
    boundExports[key] = bindExport(exports, key);
  }

  // for (const key of keys) {
  //   let bound: VExports<T>[typeof key];

  //   if (typeof toBind === "number") {
  //     bound = toBind;
  //   }
  //   if (typeof toBind === "function") {
  //     bound[key] = bindFunction(toBind);
  //   }

  //   bound[key] = bind(toBind);
  // }

  return boundExports as VExports<T>;
}

export async function instantiateStreaming<T extends Record<string, unknown>>(
  ...[source, imports]: Parameters<typeof _instantiateStreaming>
) {
  const {
    exports: util,
    instance,
    instance: { exports },
    module
  } = await _instantiateStreaming<{}>(source, imports);

  const boundExports: VExports<T> = bindExports<T>(exports as ASExports<T>);

  return {
    exports: Object.assign(util, boundExports),
    instance,
    module
  };
}
