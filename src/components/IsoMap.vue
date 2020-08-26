<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <g :transform="`translate(${width / 2},${height / 2})`">
      <v-iso-object
        v-for="o of sortedObjects"
        :key="o.id"
        :class="`${o.x},${o.y},${o.z}`"
        :obj="o"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import VIsoObject from "./IsoObject.vue";
import { computed, h, reactive, toRefs, ref, onMounted, Ref, watch } from "vue";
import IsoObject, {
  Positioned,
  renderOrder,
  PlacedIsoObject,
  ordered
} from "../IsoObject";
import { sorted } from "../sorter";
import { Tile1x1, Tile4x4, Tile1x2, SlopeRight, Player } from "./objects";
//@ts-ignore
window.IsoObject = IsoObject;

// function elementSorter(a: Positioned, b: Positioned) {
//   const aLow = Math.min(a.x, a.x + a.dx),
//     aHigh = Math.max(a.x, a.x + a.dx),
//     bLow = Math.min(b.x, b.x + b.dx),
//     bHigh = Math.max(b.x, b.x + b.dx);

//   // B in front of A
//   //if ((b.x >= a.x || b.y >= a.y) && bHigh >= aHigh) return 1;
//   if (b.x >= a.x || b.y >= a.y) return 1;

//   // A in front of B
//   //if ((a.x >= b.x || a.y >= b.y) && aHigh >= bHigh) return -1;
//   if (a.x >= b.x || a.y >= b.y) return -1;

//   console.warn(`Uncertain render order`, a, b);
// }

function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default {
  components: { VIsoObject },
  async setup(props, { attrs }) {
    const container: Ref<HTMLDivElement> = ref(null);
    let objects: PlacedIsoObject[] = [];

    objects = Array.from({ length: 1000 }, (_, i) => {
      //if (i % 2 == 0) return;
      //if (Math.random() < 0.25) return;
      // obj.at({
      //   x: (Math.random() * 10) | 0,
      //   y: (Math.random() * 10) | 0,
      //   z: (Math.random() * 10) | 0
      // })

      const x = i % 10;
      const y = (i / 10) % 10 | 0;
      const z = (i / 100) | 0;

      let edges = 0;
      if (x !== 0 && x !== 9) edges++;
      if (y !== 0 && y !== 9) edges++;
      if (z !== 0 && z !== 9) edges++;

      if (edges >= 2) return;

      return Tile1x1.at({ x, y, z });
    }).filter(Boolean);

    // console.log(objects.sort(renderOrder));
    // console.log(objects.reverse().sort(renderOrder));
    // console.log(objects.sort(renderOrder).sort(renderOrder));

    const player = Player.at({ x: 10, y: 10, z: 1 });
    //@ts-ignore
    window.player = player;

    objects.push(player);

    objects.push(Tile4x4.at({ x: 0, y: 0, z: 0 }));
    objects.push(Tile4x4.at({ x: 4, y: 0, z: 0 }));
    objects.push(Tile4x4.at({ x: 0, y: 4, z: 0 }));
    objects.push(Tile4x4.at({ x: 4, y: 4, z: 0 }));

    objects.push(Tile1x2.at({ x: -2, y: 3, z: 1 }));
    objects.push(SlopeRight.at({ x: -1, y: 3, z: 1 }));

    //setInterval(() => (player.z += 0.1), 500);

    shuffle(objects);

    document.addEventListener("keypress", evt => {
      switch (evt.key) {
        case "w":
          player.x -= 0.1;
          player.y -= 0.1;
          break;
        case "a":
          player.x -= 0.1;
          player.y += 0.1;
          break;
        case "s":
          player.x += 0.1;
          player.y += 0.1;
          break;
        case "d":
          player.y -= 0.1;
          player.x += 0.1;
          break;
        case "q":
          player.z += 0.1;
          break;
        case "e":
          player.z -= 0.1;
          break;
      }
    });

    const sortedObjects = await sorted(new Set(objects));
    //const sortedObjects = await ordered(objects);

    // computed(() => ordered(objects));

    //console.log(sortedObjects.value);
    // watch(sortedObjects as any, console.log);

    // const sortedObjects = computed(() => {
    //   const sorted = [];
    //   //const unsorted = new Set<PlacedIsoObject>(objects);
    //   console.time("map");
    //   const unsorted = new Set(
    //     objects.map(o => {
    //       const { x: X, y: Y, z } = o;
    //       return { o, x: X - o.dx, y: Y - o.dy, z, X, Y, Z: z + o.dz };
    //     })
    //   );
    //   console.timeEnd("map");
    //   console.log(unsorted.size, unsorted);
    //   console.time("sort");
    //   while (unsorted.size) {
    //     let first;
    //     for (let info of unsorted) {
    //       //console.count("comparison");
    //       const { o, x, y, z, X, Y, Z } = info;

    //       //O right of first => O in front of first
    //       if (first && x >= first.X) continue;

    //       // A left of B => A in front of B
    //       if (first && y >= first.Y) continue;

    //       // A over B => A in front of B
    //       if (first && z >= first.Z) continue;

    //       first = info;
    //     }
    //     sorted.push(first.o);
    //     unsorted.delete(first);
    //   }
    //   console.timeEnd("sort");
    //   //console.countReset("comparison");

    //   return sorted;
    //   //objects.sort(renderOrder);
    // });

    const width = computed(() => +attrs.width);
    const height = computed(() => +attrs.height);

    return { sortedObjects, width, height };
  }
};
</script>

<style></style>
