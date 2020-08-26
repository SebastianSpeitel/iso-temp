import { RenderFunction, FunctionalComponent } from "vue";

export function defineFunctionalComponent<P = {}>(
  setup: (props: P) => ReturnType<RenderFunction>,
  opts: Readonly<FunctionalComponent<P>> = { props: {} as P }
): FunctionalComponent<P> {
  return Object.assign(setup, opts);
}

function deg2rad(a: number) {
  return (a * Math.PI) / 180;
}
export const xFactor = Math.cos(deg2rad(30));
export const yFactor = Math.sin(deg2rad(30));
