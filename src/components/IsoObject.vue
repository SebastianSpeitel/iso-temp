<template>
  <component
    v-if="component"
    :is="component"
    :transform="`translate(${x},${y}) scale(${scale})`"
    class="tile"
    @click="log"
  />
  <use v-else-if="href" :href="href" :x="x" :y="y" class="tile" />
  <g v-else :transform="`translate(${x},${y})`" @click="log" class="tile">
    <path transform="scale(40)" :d="path" />
  </g>
</template>

<script lang="ts">
import { computed, toRef, defineComponent } from "vue";
import IsoObject, { PlacedIsoObject } from "../IsoObject";
import { defineFunctionalComponent, xFactor, yFactor } from "../util";

// const angle = Math.atan(0.5);
// const xFactor = Math.cos(angle);
// const yFactor = Math.sin(angle);

const scale = 20;

export default {
  props: { obj: { validator: o => o instanceof IsoObject } },
  setup(props: { obj: PlacedIsoObject }) {
    const obj = toRef(props, "obj");

    function log(evt) {
      console.log(obj.value);
    }

    const x = computed(() => {
      const xx = obj.value.x * xFactor;
      const yx = -obj.value.y * xFactor;
      return (xx + yx) * scale;
    });
    const y = computed(() => {
      const xy = obj.value.x * yFactor;
      const yy = obj.value.y * yFactor;
      const zy = -obj.value.z;

      return (xy + yy + zy) * scale;
    });

    const { path, href, component } = obj.value;

    return {
      x,
      y,
      log,
      path,
      href,
      component,
      scale
    };
  }
};
</script>

<style>
.tile {
  fill: aliceblue;
  stroke: rebeccapurple;
  stroke-width: calc(0.2mm / 20);
}

.tile:hover {
  stroke-width: calc(0.5mm / 20);
}
</style>
