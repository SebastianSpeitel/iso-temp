//const unsorted = new Set<PlacedIsoObject>(objects);
const unsorted = objects.map(o => {
  const { x: X, y: Y, z, dx, dy, dz } = o;
  return { o, x: X - dx, y: Y - dy, z, X, Y, Z: z + dz };
});
console.log(unsorted.length, unsorted);
debugger;
console.countReset("compares");
console.time("sort");
while (unsorted.length) {
  let first: PlacedIsoObject;
  let index: number;
  let fX: number, fY: number, fZ: number;
  for (let i = 0; i < unsorted.length; i++) {
    const { o, x, y, z, X, Y, Z } = unsorted[i];
    //O right of first => O in front of first
    if (first && x >= fX) continue;

    // A left of B => A in front of B
    if (first && y >= fY) continue;

    // A over B => A in front of B
    if (first && z >= fZ) continue;

    first = o;
    index = i;
    fX = X;
    fY = Y;
    fZ = Z;
  }
  sorted.push(first);
  unsorted.splice(index, 1);
  console.log(sorted.length, unsorted.length);
}


const sortedObjects = computed(() => {
    const sorted = [];
    const unsorted = new Set<PlacedIsoObject>(objects);
    console.log(unsorted.size);
    console.countReset("compares");
    console.time("sort");
    while (unsorted.size) {
      let first: PlacedIsoObject;
      let fX: number, fY: number, fZ: number;
      for (let o of unsorted) {
        //O right of first => O in front of first
        let X = o.x;
        if (first && X - o.dx >= fX) continue;

        // A left of B => A in front of B
        let Y = o.y;
        if (first && Y - o.dy >= fY) continue;

        // A over B => A in front of B
        let z = o.z;
        if (first && z >= fZ) continue;

        first = o;
        fX = X;
        fY = Y;
        fZ = z + o.dz;
      }
      sorted.push(first);
      unsorted.delete(first);
      console.log(sorted.length, unsorted.size);
    }
    console.timeEnd("sort");

    return sorted;
    //objects.sort(renderOrder);
  });
