declare module ASModule {
  type i8 = number;
  type i16 = number;
  type i32 = number;
  type i64 = BigInt;
  type isize = number;
  type u8 = number;
  type u16 = number;
  type u32 = number;
  type u64 = BigInt;
  type usize = number;
  type f32 = number;
  type f64 = number;
  type bool = any;
  export function __alloc(size: usize, id: u32): usize;
  export function __retain(ptr: usize): usize;
  export function __release(ptr: usize): void;
  export function __collect(): void;
  export var __rtti_base: usize;
  export function sort(arr: usize): usize;
}
export default ASModule;
