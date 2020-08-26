import IsoObject from "../../IsoObject";
import { h } from "vue";
import { xFactor, yFactor } from "../../util";

export const Tile1x1 = /*@__PURE__*/ new IsoObject({
  name: "Tile1x1",
  dx: 1,
  dy: 1,
  dz: 1
});
export const Tile1x2 = /*@__PURE__*/ new IsoObject({
  name: "Tile1x2",
  dx: 1,
  dy: 2,
  dz: 1
});
export const Tile2x1 = /*@__PURE__*/ new IsoObject({ dx: 2, dy: 1, dz: 1 });
export const Tile2x2 = /*@__PURE__*/ new IsoObject({ dx: 2, dy: 2, dz: 1 });

export const Tile4x4 = /*@__PURE__*/ new IsoObject({
  name: "Tile4x4",
  dx: 4,
  dy: 4,
  dz: 1
});

function renderSlopeRight(this: IsoObject) {
  const xx = this.dx * xFactor;
  const xy = this.dx * yFactor;

  const yx = this.dy * xFactor;
  const yy = this.dy * yFactor;

  const zx = 0;
  const zy = this.dz;

  return h("g", {}, [
    h("path", { d: `m 0 0 l ${-xx} ${-xy} l ${zx} ${-zy} z` }),
    h("path", {
      d: `m 0 0 l ${-xx} ${-xy - zy} l ${yx} ${-yy} l ${xx} ${xy + zy} z`
    })
  ]);
}

export const SlopeRight = /*@__PURE__*/ new IsoObject({
  name: "SlopeRight",
  dx: 1,
  dy: 1,
  dz: 1,
  render: renderSlopeRight
});

export const Player = new IsoObject({ name: "Player", dz: 1 });
