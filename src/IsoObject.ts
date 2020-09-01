import {
  h,
  VNode,
  isReactive,
  reactive,
  ref,
  Ref,
  watchEffect,
  unref,
  shallowReactive,
  shallowReadonly
} from "vue";
import { defineFunctionalComponent, xFactor, yFactor } from "./util";

interface Pos {
  x: number;
  y: number;
  z: number;
}

export type PlacedIsoObject = Positioned;

export type Positioned<T extends IsoObject = IsoObject> = Readonly<T> & Pos;

let counter = 0;

export default class IsoObject {
  id = counter++;
  name: string;

  /**Depth in x direction */
  dx: number;
  /**Depth in y direction */
  dy: number;
  dz: number;

  path?: string;
  href?: string;
  #render?: (self: IsoObject) => VNode;

  constructor({
    name = "IsoObject",
    dx = 0,
    dy = 0,
    dz = 0,
    render
  }: {
    name?: string;
    dx?: number;
    dy?: number;
    dz?: number;
    render?: (self: IsoObject) => VNode;
  } = {}) {
    this.dx = dx;
    this.dy = dy;
    this.dz = dz;
    this.name = name;
    this[Symbol.toStringTag] = name;
    this.#render = render;

    // this.href = "#cube";

    // this.path = `m 0 ${this.dy} l -${this.dy} -${this.dy / 2} l 0 -${
    //   this.dy
    // } l ${this.dy} ${this.dy / 2} l ${this.dy} -${this.dy / 2} l 0 ${
    //   this.dy
    // } z v -${this.dy} m -${this.dy} -${this.dy / 2} l ${this.dy} ${
    //   this.dy / 2
    // } l ${this.dy} -${this.dy / 2} l -${this.dy} -${this.dy / 2} l -${
    //   this.dy
    // } ${this.dy / 2}`;

    // this.path =
    //   "m 0 40 l -40 -20 l 0 -40 l 40 20 l 40 -20 l 0 40 z v -40 m -40 -20 l 40 20 l 40 -20 l -40 -20 l -40 20";
    // this.dx = 40;
    // this.dy = 40;
    // this.dz = 20;

    //this.path =
    //  "m 0 -239 l -221.7 128 v 256 l 221.7 128 l 221.7 -128 v -256 z m 176.7 136.7 l -176.7 102 l -176.7 -102 l 176.7 -102 z m -368.4 26 l 176.7 101.8 v 204 l -176.7 -102 z m 206.7 306 v -204.1 l 176.7 -102 v 204 z";
  }

  render(): VNode {
    if (this.#render) return this.#render(this);

    const xx = this.dx * xFactor;
    const xy = this.dx * yFactor;

    const yx = this.dy * xFactor;
    const yy = this.dy * yFactor;

    const zx = 0;
    const zy = this.dz;

    const top = h("path", {
      d: `m 0 ${-zy} l ${-xx} ${-xy} l ${yx} ${-yy} l ${xx} ${xy} z`
    });

    const left = h("path", {
      d: `m 0 ${-zy} l ${-xx} ${-xy} l ${zx} ${zy} l ${xx} ${xy} z`
    });

    const right = h("path", {
      d: `m 0 ${-zy} l ${yx} ${-yy} l ${zx} ${zy} l ${-yx} ${yy} z`
    });

    return h("g", {}, [top, left, right]);

    return h("path", {
      d: `m 0 ${this.dy} l -${this.dy} -${this.dy / 2} l 0 -${this.dy} l ${
        this.dy
      } ${this.dy / 2} l ${this.dy} -${this.dy / 2} l 0 ${this.dy} z v -${
        this.dy
      } m -${this.dy} -${this.dy / 2} l ${this.dy} ${this.dy / 2} l ${
        this.dy
      } -${this.dy / 2} l -${this.dy} -${this.dy / 2} l -${this.dy} ${
        this.dy / 2
      }`
    });
  }
  component = defineFunctionalComponent(
    this.render.bind(this) as IsoObject["render"]
  );

  // render(this: PlacedIsoObject): FunctionalComponent {
  //   return defineFunctionalComponent(() => {
  //     h("path", {
  //       d: `m 0 ${this.dy} l -${this.dy} -${this.dy / 2} l 0 -${this.dy} l ${
  //         this.dy
  //       } ${this.dy / 2} l ${this.dy} -${this.dy / 2} l 0 ${this.dy} z v -${
  //         this.dy
  //       } m -${this.dy} -${this.dy / 2} l ${this.dy} ${this.dy / 2} l ${
  //         this.dy
  //       } -${this.dy / 2} l -${this.dy} -${this.dy / 2} l -${this.dy} ${
  //         this.dy / 2
  //       }`
  //     });
  //   });
  // }

  at<T extends IsoObject>(this: T, pos: Pos): Positioned<T> {
    const instance = Object.create(this) as Readonly<T>;
    //@ts-ignore
    instance.id = counter++;
    pos = reactive(pos);

    Object.defineProperties(instance, {
      x: {
        get: () => pos.x,
        set: x => (pos.x = x)
      },
      y: {
        get: () => pos.y,
        set: y => (pos.y = y)
      },
      z: {
        get: () => pos.z,
        set: z => (pos.z = z)
      }
    });
    return instance as Positioned<T>;
  }
}

// export type RenderInfo = Sortable<PlacedIsoObject>;

// const renderInfoCache = shallowReactive(
//   new WeakMap<PlacedIsoObject, RenderInfo>()
// );
// function renderInfo(o: PlacedIsoObject): RenderInfo {
//   let info = renderInfoCache.get(o);

//   if (!info) {
//     watchEffect(() => {
//       const { x: X, y: Y, z } = o;
//       info = {
//         x: X - o.dx,
//         y: Y - o.dy,
//         z,
//         X,
//         Y,
//         Z: z + o.dz,
//         ref: o
//       };
//       renderInfoCache.set(o, info);
//     });
//   }
//   return info;
// }

// function isoSort(unsorted: Set<RenderInfo>) {
//   const result: PlacedIsoObject[] = [];
//   while (unsorted.size) {
//     let first: RenderInfo;
//     for (let next of unsorted) {
//       //O right of first => O in front of first
//       if (first && next.x >= first.X) continue;

//       // A left of B => A in front of B
//       if (first && next.y >= first.Y) continue;

//       // A over B => A in front of B
//       if (first && next.z >= first.Z) continue;

//       first = next;
//     }
//     result.push(first.o);
//     unsorted.delete(first);
//   }
//   return result;
// }

// import { isoSort, Sortable } from "./sorter";

// export function ordered(
//   objects: ArrayLike<PlacedIsoObject> | Ref<ArrayLike<PlacedIsoObject>>
// ) {
//   const sorted = ref<PlacedIsoObject[]>([]);
//   //console.log(isoSort.toString());
//   watchEffect(onInvalidate => {
//     objects = unref(objects);

//     console.time("ordering:map");
//     const unsorted = new Set(Array.from(objects, renderInfo));
//     console.timeEnd("ordering:map");
//     const id = (Math.random() * 10000) | 0;
//     console.time("ordering:sort" + id);
//     const _sorted = isoSort(unsorted);
//     console.timeEnd("ordering:sort" + id);

//     sorted.value = _sorted;
//   });
//   return sorted;
// }

enum RenderOrder {
  /*@__INLINE__*/
  ab = -1,
  /*@__INLINE__*/
  ba = 1
}

export function renderOrder(
  a: PlacedIsoObject,
  b: PlacedIsoObject
): RenderOrder | undefined {
  const { x: aX, y: aY, z: az, dx: adx, dy: ady, dz: adz } = a;
  const { x: bX, y: bY, z: bz, dx: bdx, dy: bdy, dz: bdz } = b;
  const ax = aX - adx,
    ay = aY - ady,
    aZ = az + adz,
    bx = bX - bdx,
    by = bY - bdy,
    bZ = bz + bdz;

  //A right of B => A in front of B
  if (ax >= bX) return RenderOrder.ba;

  // A left of B => A in front of B
  if (ay >= bY) return RenderOrder.ba;

  // A over B => A in front of B
  if (az >= bZ) return RenderOrder.ba;

  // B right of A => B in front of A
  if (bx >= aX) return RenderOrder.ab;

  // B left of A => B in front of A
  if (by >= aY) return RenderOrder.ab;

  // B over A => B in front of A
  if (bz >= aZ) return RenderOrder.ab;

  // // A right of B => A in front of B
  // if (a.x - a.dx >= b.x) return 1;

  // // A left of B => A in front of B
  // if (a.y - a.dy >= b.y) return 1;

  // // A over B => A in front of B
  // if (a.z >= b.z + b.dz) return 1;

  // // B right of A => B in front of A
  // if (b.x - b.dx >= a.x) return -1;

  // // B left of A => B in front of A
  // if (b.y - b.dy >= a.y) return -1;

  // // B over A => B in front of A
  // if (b.z >= a.z + a.dz) return -1;

  console.warn(`Uncertain render order`, a, b);
  if (a.z !== b.z) return (a.z - b.z) as RenderOrder;
}
