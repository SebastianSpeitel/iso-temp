import { abort } from 'env';

function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var $lib_builtins_abort = env.abort;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_rt_tlsf_collectLock = 0;
 var $lib_gc_gc_auto = 1;
 var $lib_rt___rtti_base = 336;
 var $lib_heap___heap_base = 372;
 function $lib_rt_tlsf_removeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, $9 = 0, $3 = 0, $7 = 0, $5 = 0, $8 = 0, $6 = 0, $2 = 0, $24 = 0, $47 = 0;
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 277 | 0, 14 | 0);
   abort();
  }
  $3 = $2 & (3 ^ -1 | 0) | 0;
  if ($3 >>> 0 >= 16 >>> 0) {
   $24 = $3 >>> 0 < 1073741808 >>> 0
  } else {
   $24 = 0
  }
  if (!$24) {
   $lib_builtins_abort(0 | 0, 32 | 0, 279 | 0, 14 | 0);
   abort();
  }
  if ($3 >>> 0 < 256 >>> 0) {
   $4 = 0;
   $5 = $3 >>> 4 | 0;
  } else {
   $4 = 31 - Math_clz32($3) | 0;
   $5 = ($3 >>> ($4 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $4 = $4 - (8 - 1 | 0) | 0;
  }
  if ($4 >>> 0 < 23 >>> 0) {
   $47 = $5 >>> 0 < 16 >>> 0
  } else {
   $47 = 0
  }
  if (!$47) {
   $lib_builtins_abort(0 | 0, 32 | 0, 292 | 0, 14 | 0);
   abort();
  }
  $6 = HEAP32[($1 + 16 | 0) >> 2] | 0;
  $7 = HEAP32[($1 + 20 | 0) >> 2] | 0;
  if ($6) {
   HEAP32[($6 + 20 | 0) >> 2] = $7
  }
  if ($7) {
   HEAP32[($7 + 16 | 0) >> 2] = $6
  }
  $lib_rt_tlsf_GETHEAD_inlined_0 : {
   $9 = $4;
   $8 = $5;
  }
  if (($1 | 0) == (HEAP32[(($0 + ((($9 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0 | 0)) {
   $lib_rt_tlsf_SETHEAD_inlined_1 : {
    $9 = $5;
    $8 = $7;
    HEAP32[(($0 + ((($4 << 4 | 0) + $9 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $7;
   }
   if (!$7) {
    $lib_rt_tlsf_GETSL_inlined_0 : {
     $9 = $0;
     $8 = $4;
    }
    $9 = HEAP32[(($9 + ($8 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    $lib_rt_tlsf_SETSL_inlined_1 : {
     $8 = $0;
     $9 = $9 & ((1 << $5 | 0) ^ -1 | 0) | 0;
     HEAP32[(($0 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] = $9;
    }
    if (!$9) {
     HEAP32[$0 >> 2] = (HEAP32[$0 >> 2] | 0) & ((1 << $4 | 0) ^ -1 | 0) | 0
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $6 = 0, $9 = 0, $2 = 0, $4 = 0, $7 = 0, $8 = 0, $10 = 0, $5 = 0, $11 = 0, $107 = 0, $140 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 32 | 0, 205 | 0, 14 | 0);
   abort();
  }
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 207 | 0, 14 | 0);
   abort();
  }
  $3 = $1;
  $4 = ($3 + 16 | 0) + ((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
  $5 = HEAP32[$4 >> 2] | 0;
  if ($5 & 1 | 0) {
   $3 = (($2 & (3 ^ -1 | 0) | 0) + 16 | 0) + ($5 & (3 ^ -1 | 0) | 0) | 0;
   if ($3 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
    $2 = $2 & 3 | 0 | $3 | 0;
    HEAP32[$1 >> 2] = $2;
    $6 = $1;
    $4 = ($6 + 16 | 0) + ((HEAP32[$6 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  }
  if ($2 & 2 | 0) {
   $6 = $1;
   $6 = HEAP32[($6 - 4 | 0) >> 2] | 0;
   $3 = HEAP32[$6 >> 2] | 0;
   if (!($3 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 228 | 0, 16 | 0);
    abort();
   }
   $7 = (($3 & (3 ^ -1 | 0) | 0) + 16 | 0) + ($2 & (3 ^ -1 | 0) | 0) | 0;
   if ($7 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0 | 0, $6 | 0);
    $2 = $3 & 3 | 0 | $7 | 0;
    HEAP32[$6 >> 2] = $2;
    $1 = $6;
   }
  }
  HEAP32[$4 >> 2] = $5 | 2 | 0;
  $8 = $2 & (3 ^ -1 | 0) | 0;
  if ($8 >>> 0 >= 16 >>> 0) {
   $107 = $8 >>> 0 < 1073741808 >>> 0
  } else {
   $107 = 0
  }
  if (!$107) {
   $lib_builtins_abort(0 | 0, 32 | 0, 243 | 0, 14 | 0);
   abort();
  }
  if (!((($1 + 16 | 0) + $8 | 0 | 0) == ($4 | 0))) {
   $lib_builtins_abort(0 | 0, 32 | 0, 244 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($8 >>> 0 < 256 >>> 0) {
   $9 = 0;
   $10 = $8 >>> 4 | 0;
  } else {
   $9 = 31 - Math_clz32($8) | 0;
   $10 = ($8 >>> ($9 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $9 = $9 - (8 - 1 | 0) | 0;
  }
  if ($9 >>> 0 < 23 >>> 0) {
   $140 = $10 >>> 0 < 16 >>> 0
  } else {
   $140 = 0
  }
  if (!$140) {
   $lib_builtins_abort(0 | 0, 32 | 0, 260 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETHEAD_inlined_1 : {
   $7 = $0;
   $3 = $9;
   $6 = $10;
  }
  $11 = HEAP32[(($7 + ((($3 << 4 | 0) + $6 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = $11;
  if ($11) {
   HEAP32[($11 + 16 | 0) >> 2] = $1
  }
  $lib_rt_tlsf_SETHEAD_inlined_2 : {
   $7 = $9;
   $3 = $10;
   $6 = $1;
   HEAP32[(($0 + ((($9 << 4 | 0) + $3 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $1;
  }
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 0 | (1 << $9 | 0) | 0;
  $lib_rt_tlsf_SETSL_inlined_2 : {
   $lib_rt_tlsf_GETSL_inlined_1 : {
    $3 = $0;
    $6 = $9;
   }
   $7 = HEAP32[(($3 + ($6 << 2 | 0) | 0) + 4 | 0) >> 2] | 0 | (1 << $10 | 0) | 0;
   HEAP32[(($0 + ($9 << 2 | 0) | 0) + 4 | 0) >> 2] = $7;
  }
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $6 = 0, $16 = 0, $21 = 0, $5 = 0;
  if ($1 >>> 0 <= $2 >>> 0) {
   $16 = !($1 & 15 | 0)
  } else {
   $16 = 0
  }
  if ($16) {
   $21 = !($2 & 15 | 0)
  } else {
   $21 = 0
  }
  if (!$21) {
   $lib_builtins_abort(0 | 0, 32 | 0, 386 | 0, 5 | 0);
   abort();
  }
  $4 = HEAP32[($0 + 1568 | 0) >> 2] | 0;
  $5 = 0;
  if ($4) {
   if (!($1 >>> 0 >= ($4 + 16 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 396 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($4 | 0)) {
    $1 = $1 - 16 | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  } else {
   if (!($1 >>> 0 >= ($0 + 1572 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 408 | 0, 5 | 0);
    abort();
   }
  }
  $6 = $2 - $1 | 0;
  if ($6 >>> 0 < ((16 + 16 | 0) + 16 | 0) >>> 0) {
   return 0 | 0
  }
  HEAP32[$1 >> 2] = $6 - (16 << 1 | 0) | 0 | 1 | 0 | ($5 & 2 | 0) | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = 0;
  $4 = ($1 + $6 | 0) - 16 | 0;
  HEAP32[$4 >> 2] = 0 | 2 | 0;
  HEAP32[($0 + 1568 | 0) >> 2] = $4;
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
  return 1 | 0;
 }
 
 function $lib_rt_tlsf_maybeInitialize() {
  var $0 = 0, $5 = 0, $8 = 0, $1 = 0, $4 = 0, $6 = 0, $2 = 0, $3 = 0, $34 = 0;
  $0 = $lib_rt_tlsf_ROOT;
  if (!$0) {
   $1 = ($lib_heap___heap_base + 15 | 0) & (15 ^ -1 | 0) | 0;
   $2 = __wasm_memory_size();
   $3 = ((($1 + 1572 | 0) + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
   if (($3 | 0) > ($2 | 0)) {
    $34 = (__wasm_memory_grow($3 - $2 | 0 | 0) | 0) < (0 | 0)
   } else {
    $34 = 0
   }
   if ($34) {
    abort()
   }
   $0 = $1;
   HEAP32[$0 >> 2] = 0;
   $lib_rt_tlsf_SETTAIL_inlined_0 : {
    $5 = $0;
    $4 = 0;
    HEAP32[($0 + 1568 | 0) >> 2] = $4;
   }
   $5 = 0;
   for_loop_0 : while (1) {
    $4 = $5 >>> 0 < 23 >>> 0;
    if ($4) {
     for_continue_0 : {
      $lib_rt_tlsf_SETSL_inlined_0 : {
       $8 = $0;
       $6 = 0;
       HEAP32[(($0 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] = $6;
      }
      $8 = 0;
      for_loop_1 : while (1) {
       if ($8 >>> 0 < 16 >>> 0) {
        $lib_rt_tlsf_SETHEAD_inlined_0 : {
         $6 = 0;
         HEAP32[(($0 + ((($5 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $6;
        }
        $8 = $8 + 1 | 0;
        continue for_loop_1;
       }
       break for_loop_1;
      };
     }
     $5 = $5 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $5 = (($1 + 1572 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0;
   $lib_rt_tlsf_addMemory($0 | 0, $5 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
   $lib_rt_tlsf_ROOT = $0;
  }
  return $0 | 0;
 }
 
 function $lib_rt_tlsf_prepareSize($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  if ($0 >>> 0 >= 1073741808 >>> 0) {
   $lib_builtins_abort(80 | 0, 32 | 0, 461 | 0, 30 | 0);
   abort();
  }
  $1 = ($0 + 15 | 0) & (15 ^ -1 | 0) | 0;
  $2 = 16;
  return ($1 >>> 0 > $2 >>> 0 ? $1 : $2) | 0;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $6 = 0, $8 = 0, $5 = 0, $7 = 0, $3 = 0, $9 = 0, $24 = 0, $42 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $2 = 0;
   $3 = $1 >>> 4 | 0;
  } else {
   if ($1 >>> 0 < 536870904 >>> 0) {
    $24 = ($1 + (1 << (27 - Math_clz32($1) | 0) | 0) | 0) - 1 | 0
   } else {
    $24 = $1
   }
   $4 = $24;
   $2 = 31 - Math_clz32($4) | 0;
   $3 = ($4 >>> ($2 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $2 = $2 - (8 - 1 | 0) | 0;
  }
  if ($2 >>> 0 < 23 >>> 0) {
   $42 = $3 >>> 0 < 16 >>> 0
  } else {
   $42 = 0
  }
  if (!$42) {
   $lib_builtins_abort(0 | 0, 32 | 0, 338 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETSL_inlined_2 : {
   $5 = $0;
   $4 = $2;
  }
  $6 = (HEAP32[(($5 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0) & ((0 ^ -1 | 0) << $3 | 0) | 0;
  $7 = 0;
  if (!$6) {
   $5 = (HEAP32[$0 >> 2] | 0) & ((0 ^ -1 | 0) << ($2 + 1 | 0) | 0) | 0;
   if (!$5) {
    $7 = 0
   } else {
    $2 = __wasm_ctz_i32($5 | 0) | 0;
    $lib_rt_tlsf_GETSL_inlined_3 : {
     $8 = $0;
     $4 = $2;
    }
    $6 = HEAP32[(($8 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    if (!$6) {
     $lib_builtins_abort(0 | 0, 32 | 0, 351 | 0, 18 | 0);
     abort();
    }
    $lib_rt_tlsf_GETHEAD_inlined_2 : {
     $9 = $0;
     $8 = $2;
     $4 = __wasm_ctz_i32($6 | 0) | 0;
    }
    $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
   }
  } else {
   $lib_rt_tlsf_GETHEAD_inlined_3 : {
    $9 = $0;
    $8 = $2;
    $4 = __wasm_ctz_i32($6 | 0) | 0;
   }
   $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  }
  return $7 | 0;
 }
 
 function $lib_rt_tlsf_growMemory($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0;
  if ($1 >>> 0 < 536870904 >>> 0) {
   $1 = $1 + ((1 << (27 - Math_clz32($1) | 0) | 0) - 1 | 0) | 0
  }
  $2 = __wasm_memory_size();
  $1 = $1 + (16 << ((($2 << 16 | 0) - 16 | 0 | 0) != (HEAP32[($0 + 1568 | 0) >> 2] | 0 | 0)) | 0) | 0;
  $4 = (($1 + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
  if ((__wasm_memory_grow((($2 | 0) > ($4 | 0) ? $2 : $4) | 0) | 0) < (0 | 0)) {
   if ((__wasm_memory_grow($4 | 0) | 0) < (0 | 0)) {
    abort()
   }
  }
  $lib_rt_tlsf_addMemory($0 | 0, $2 << 16 | 0 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $48 = 0;
  $3 = HEAP32[$1 >> 2] | 0;
  if (!!($2 & 15 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 365 | 0, 14 | 0);
   abort();
  }
  $4 = ($3 & (3 ^ -1 | 0) | 0) - $2 | 0;
  if ($4 >>> 0 >= (16 + 16 | 0) >>> 0) {
   HEAP32[$1 >> 2] = $2 | ($3 & 2 | 0) | 0;
   $5 = ($1 + 16 | 0) + $2 | 0;
   HEAP32[$5 >> 2] = $4 - 16 | 0 | 1 | 0;
   $lib_rt_tlsf_insertBlock($0 | 0, $5 | 0);
  } else {
   HEAP32[$1 >> 2] = $3 & (1 ^ -1 | 0) | 0;
   $5 = $1;
   $48 = ($5 + 16 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
   $5 = $1;
   HEAP32[$48 >> 2] = (HEAP32[(($5 + 16 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0) >> 2] | 0) & (2 ^ -1 | 0) | 0;
  }
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0;
  if (!!$lib_rt_tlsf_collectLock) {
   $lib_builtins_abort(0 | 0, 32 | 0, 500 | 0, 14 | 0);
   abort();
  }
  $3 = $lib_rt_tlsf_prepareSize($1 | 0) | 0;
  $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
  if (!$4) {
   if ($lib_gc_gc_auto) {
    $lib_rt_tlsf_collectLock = 1;
    $lib_rt_pure___collect();
    $lib_rt_tlsf_collectLock = 0;
    $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
    if (!$4) {
     $lib_rt_tlsf_growMemory($0 | 0, $3 | 0);
     $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
     if (!$4) {
      $lib_builtins_abort(0 | 0, 32 | 0, 512 | 0, 20 | 0);
      abort();
     }
    }
   } else {
    $lib_rt_tlsf_growMemory($0 | 0, $3 | 0);
    $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
    if (!$4) {
     $lib_builtins_abort(0 | 0, 32 | 0, 517 | 0, 18 | 0);
     abort();
    }
   }
  }
  if (!(((HEAP32[$4 >> 2] | 0) & (3 ^ -1 | 0) | 0) >>> 0 >= $3 >>> 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 520 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 + 4 | 0) >> 2] = 0;
  HEAP32[($4 + 8 | 0) >> 2] = $2;
  HEAP32[($4 + 12 | 0) >> 2] = $1;
  $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
  $lib_rt_tlsf_prepareBlock($0 | 0, $4 | 0, $3 | 0);
  return $4 | 0;
 }
 
 function $lib_rt_tlsf___alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return ($lib_rt_tlsf_allocateBlock($lib_rt_tlsf_maybeInitialize() | 0 | 0, $0 | 0, $1 | 0) | 0) + 16 | 0 | 0;
 }
 
 function $lib_rt_pure_increment($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  if (!(($1 & (268435455 ^ -1 | 0) | 0 | 0) == (($1 + 1 | 0) & (268435455 ^ -1 | 0) | 0 | 0))) {
   $lib_builtins_abort(0 | 0, 144 | 0, 109 | 0, 3 | 0);
   abort();
  }
  HEAP32[($0 + 4 | 0) >> 2] = $1 + 1 | 0;
  if (!!((HEAP32[$0 >> 2] | 0) & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 144 | 0, 112 | 0, 14 | 0);
   abort();
  }
 }
 
 function $lib_rt_pure___retain($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > $lib_heap___heap_base >>> 0) {
   $lib_rt_pure_increment($0 - 16 | 0 | 0)
  }
  return $0 | 0;
 }
 
 function $lib_rt_pure___release($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > $lib_heap___heap_base >>> 0) {
   $lib_rt_pure_decrement($0 - 16 | 0 | 0)
  }
 }
 
 function $lib_array_Array_f32__get_length($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $lib_array_Array_f32____uget($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return Math_fround(Math_fround(HEAPF32[((HEAP32[($0 + 4 | 0) >> 2] | 0) + ($1 << 2 | 0) | 0) >> 2]));
 }
 
 function $lib_array_Array_f32____get($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if ($1 >>> 0 >= (HEAP32[($0 + 12 | 0) >> 2] | 0) >>> 0) {
   $lib_builtins_abort(192 | 0, 256 | 0, 104 | 0, 42 | 0);
   abort();
  }
  return Math_fround(Math_fround($lib_array_Array_f32____uget($0 | 0, $1 | 0)));
 }
 
 function $lib_rt_tlsf_checkUsedBlock($0) {
  $0 = $0 | 0;
  var $1 = 0, $9 = 0, $15 = 0, $22 = 0;
  $1 = $0 - 16 | 0;
  if (($0 | 0) != (0 | 0)) {
   $9 = !($0 & 15 | 0)
  } else {
   $9 = 0
  }
  if ($9) {
   $15 = !((HEAP32[$1 >> 2] | 0) & 1 | 0)
  } else {
   $15 = 0
  }
  if ($15) {
   $22 = !((HEAP32[($1 + 4 | 0) >> 2] | 0) & (268435455 ^ -1 | 0) | 0)
  } else {
   $22 = 0
  }
  if (!$22) {
   $lib_builtins_abort(0 | 0, 32 | 0, 580 | 0, 3 | 0);
   abort();
  }
  return $1 | 0;
 }
 
 function $lib_util_memory_memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $6 = 0, $10 = 0, $18 = 0, $97 = 0, $122 = 0, $135 = 0, $148 = 0, $213 = 0, $226 = 0, $291 = 0, $356 = 0, $369 = 0, $382 = 0, $395 = 0, $408 = 0, $421 = 0, $434 = 0, $447 = 0, $460 = 0, $473 = 0, $486 = 0, $499 = 0, $512 = 0, $525 = 0, $538 = 0, $551 = 0, $566 = 0, $579 = 0, $592 = 0, $605 = 0, $618 = 0, $631 = 0, $644 = 0, $657 = 0, $672 = 0, $685 = 0, $698 = 0, $711 = 0, $726 = 0, $739 = 0, $754 = 0;
  while_continue_0 : while (1) {
   if ($2) {
    $10 = $1 & 3 | 0
   } else {
    $10 = 0
   }
   $5 = $10;
   if ($5) {
    $6 = $0;
    $0 = $0 + 1 | 0;
    $18 = $6;
    $6 = $1;
    $1 = $1 + 1 | 0;
    HEAP8[$18 >> 0] = HEAPU8[$6 >> 0] | 0;
    $2 = $2 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  if (($0 & 3 | 0 | 0) == (0 | 0)) {
   while_continue_1 : while (1) {
    $5 = $2 >>> 0 >= 16 >>> 0;
    if ($5) {
     HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
     HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
     HEAP32[($0 + 8 | 0) >> 2] = HEAP32[($1 + 8 | 0) >> 2] | 0;
     HEAP32[($0 + 12 | 0) >> 2] = HEAP32[($1 + 12 | 0) >> 2] | 0;
     $1 = $1 + 16 | 0;
     $0 = $0 + 16 | 0;
     $2 = $2 - 16 | 0;
     continue while_continue_1;
    }
    break while_continue_1;
   };
   if ($2 & 8 | 0) {
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
    HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
    $0 = $0 + 8 | 0;
    $1 = $1 + 8 | 0;
   }
   if ($2 & 4 | 0) {
    HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
    $0 = $0 + 4 | 0;
    $1 = $1 + 4 | 0;
   }
   if ($2 & 2 | 0) {
    HEAP16[$0 >> 1] = HEAPU16[$1 >> 1] | 0;
    $0 = $0 + 2 | 0;
    $1 = $1 + 2 | 0;
   }
   if ($2 & 1 | 0) {
    $5 = $0;
    $0 = $5 + 1 | 0;
    $97 = $5;
    $5 = $1;
    $1 = $5 + 1 | 0;
    HEAP8[$97 >> 0] = HEAPU8[$5 >> 0] | 0;
   }
   return;
  }
  if ($2 >>> 0 >= 32 >>> 0) {
   break_2 : {
    case2_2 : {
     case1_2 : {
      case0_2 : {
       $5 = $0 & 3 | 0;
       if (($5 | 0) == (1 | 0)) {
        break case0_2
       }
       if (($5 | 0) == (2 | 0)) {
        break case1_2
       }
       if (($5 | 0) == (3 | 0)) {
        break case2_2
       }
       break break_2;
      }
      $3 = HEAP32[$1 >> 2] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $122 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$122 >> 0] = HEAPU8[$5 >> 0] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $135 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$135 >> 0] = HEAPU8[$5 >> 0] | 0;
      $5 = $0;
      $0 = $5 + 1 | 0;
      $148 = $5;
      $5 = $1;
      $1 = $5 + 1 | 0;
      HEAP8[$148 >> 0] = HEAPU8[$5 >> 0] | 0;
      $2 = $2 - 3 | 0;
      while_continue_3 : while (1) {
       $5 = $2 >>> 0 >= 17 >>> 0;
       if ($5) {
        $4 = HEAP32[($1 + 1 | 0) >> 2] | 0;
        HEAP32[$0 >> 2] = $3 >>> 24 | 0 | ($4 << 8 | 0) | 0;
        $3 = HEAP32[($1 + 5 | 0) >> 2] | 0;
        HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 24 | 0 | ($3 << 8 | 0) | 0;
        $4 = HEAP32[($1 + 9 | 0) >> 2] | 0;
        HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 24 | 0 | ($4 << 8 | 0) | 0;
        $3 = HEAP32[($1 + 13 | 0) >> 2] | 0;
        HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 24 | 0 | ($3 << 8 | 0) | 0;
        $1 = $1 + 16 | 0;
        $0 = $0 + 16 | 0;
        $2 = $2 - 16 | 0;
        continue while_continue_3;
       }
       break while_continue_3;
      };
      break break_2;
     }
     $3 = HEAP32[$1 >> 2] | 0;
     $5 = $0;
     $0 = $5 + 1 | 0;
     $213 = $5;
     $5 = $1;
     $1 = $5 + 1 | 0;
     HEAP8[$213 >> 0] = HEAPU8[$5 >> 0] | 0;
     $5 = $0;
     $0 = $5 + 1 | 0;
     $226 = $5;
     $5 = $1;
     $1 = $5 + 1 | 0;
     HEAP8[$226 >> 0] = HEAPU8[$5 >> 0] | 0;
     $2 = $2 - 2 | 0;
     while_continue_4 : while (1) {
      $5 = $2 >>> 0 >= 18 >>> 0;
      if ($5) {
       $4 = HEAP32[($1 + 2 | 0) >> 2] | 0;
       HEAP32[$0 >> 2] = $3 >>> 16 | 0 | ($4 << 16 | 0) | 0;
       $3 = HEAP32[($1 + 6 | 0) >> 2] | 0;
       HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 16 | 0 | ($3 << 16 | 0) | 0;
       $4 = HEAP32[($1 + 10 | 0) >> 2] | 0;
       HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 16 | 0 | ($4 << 16 | 0) | 0;
       $3 = HEAP32[($1 + 14 | 0) >> 2] | 0;
       HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 16 | 0 | ($3 << 16 | 0) | 0;
       $1 = $1 + 16 | 0;
       $0 = $0 + 16 | 0;
       $2 = $2 - 16 | 0;
       continue while_continue_4;
      }
      break while_continue_4;
     };
     break break_2;
    }
    $3 = HEAP32[$1 >> 2] | 0;
    $5 = $0;
    $0 = $5 + 1 | 0;
    $291 = $5;
    $5 = $1;
    $1 = $5 + 1 | 0;
    HEAP8[$291 >> 0] = HEAPU8[$5 >> 0] | 0;
    $2 = $2 - 1 | 0;
    while_continue_5 : while (1) {
     $5 = $2 >>> 0 >= 19 >>> 0;
     if ($5) {
      $4 = HEAP32[($1 + 3 | 0) >> 2] | 0;
      HEAP32[$0 >> 2] = $3 >>> 8 | 0 | ($4 << 24 | 0) | 0;
      $3 = HEAP32[($1 + 7 | 0) >> 2] | 0;
      HEAP32[($0 + 4 | 0) >> 2] = $4 >>> 8 | 0 | ($3 << 24 | 0) | 0;
      $4 = HEAP32[($1 + 11 | 0) >> 2] | 0;
      HEAP32[($0 + 8 | 0) >> 2] = $3 >>> 8 | 0 | ($4 << 24 | 0) | 0;
      $3 = HEAP32[($1 + 15 | 0) >> 2] | 0;
      HEAP32[($0 + 12 | 0) >> 2] = $4 >>> 8 | 0 | ($3 << 24 | 0) | 0;
      $1 = $1 + 16 | 0;
      $0 = $0 + 16 | 0;
      $2 = $2 - 16 | 0;
      continue while_continue_5;
     }
     break while_continue_5;
    };
    break break_2;
   }
  }
  if ($2 & 16 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $356 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$356 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $369 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$369 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $382 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$382 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $395 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$395 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $408 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$408 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $421 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$421 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $434 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$434 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $447 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$447 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $460 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$460 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $473 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$473 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $486 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$486 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $499 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$499 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $512 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$512 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $525 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$525 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $538 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$538 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $551 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$551 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 8 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $566 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$566 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $579 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$579 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $592 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$592 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $605 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$605 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $618 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$618 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $631 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$631 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $644 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$644 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $657 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$657 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 4 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $672 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$672 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $685 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$685 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $698 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$698 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $711 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$711 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 2 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $726 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$726 >> 0] = HEAPU8[$5 >> 0] | 0;
   $5 = $0;
   $0 = $5 + 1 | 0;
   $739 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$739 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
  if ($2 & 1 | 0) {
   $5 = $0;
   $0 = $5 + 1 | 0;
   $754 = $5;
   $5 = $1;
   $1 = $5 + 1 | 0;
   HEAP8[$754 >> 0] = HEAPU8[$5 >> 0] | 0;
  }
 }
 
 function $lib_memory_memory_copy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $4 = 0, $6 = 0, $7 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $48 = 0, $61 = 0, $75 = 0, $118 = 0;
  $lib_util_memory_memmove_inlined_0 : {
   $5 = $0;
   $4 = $1;
   $3 = $2;
   if (($5 | 0) == ($4 | 0)) {
    break $lib_util_memory_memmove_inlined_0
   }
   if ((($4 - $5 | 0) - $3 | 0) >>> 0 <= (0 - ($3 << 1 | 0) | 0) >>> 0) {
    $lib_util_memory_memcpy($5 | 0, $4 | 0, $3 | 0);
    break $lib_util_memory_memmove_inlined_0;
   }
   if ($5 >>> 0 < $4 >>> 0) {
    if (($4 & 7 | 0 | 0) == ($5 & 7 | 0 | 0)) {
     while_continue_0 : while (1) {
      $6 = $5 & 7 | 0;
      if ($6) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       $7 = $5;
       $5 = $5 + 1 | 0;
       $48 = $7;
       $7 = $4;
       $4 = $4 + 1 | 0;
       HEAP8[$48 >> 0] = HEAPU8[$7 >> 0] | 0;
       continue while_continue_0;
      }
      break while_continue_0;
     };
     while_continue_1 : while (1) {
      $6 = $3 >>> 0 >= 8 >>> 0;
      if ($6) {
       i64toi32_i32$2 = $4;
       i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       $61 = i64toi32_i32$0;
       i64toi32_i32$0 = $5;
       HEAP32[$5 >> 2] = $61;
       HEAP32[($5 + 4 | 0) >> 2] = i64toi32_i32$1;
       $3 = $3 - 8 | 0;
       $5 = $5 + 8 | 0;
       $4 = $4 + 8 | 0;
       continue while_continue_1;
      }
      break while_continue_1;
     };
    }
    while_continue_2 : while (1) {
     $6 = $3;
     if ($3) {
      $7 = $5;
      $5 = $5 + 1 | 0;
      $75 = $7;
      $7 = $4;
      $4 = $4 + 1 | 0;
      HEAP8[$75 >> 0] = HEAPU8[$7 >> 0] | 0;
      $3 = $3 - 1 | 0;
      continue while_continue_2;
     }
     break while_continue_2;
    };
   } else {
    if (($4 & 7 | 0 | 0) == ($5 & 7 | 0 | 0)) {
     while_continue_3 : while (1) {
      $6 = ($5 + $3 | 0) & 7 | 0;
      if ($6) {
       if (!$3) {
        break $lib_util_memory_memmove_inlined_0
       }
       $3 = $3 - 1 | 0;
       HEAP8[($5 + $3 | 0) >> 0] = HEAPU8[($4 + $3 | 0) >> 0] | 0;
       continue while_continue_3;
      }
      break while_continue_3;
     };
     while_continue_4 : while (1) {
      $6 = $3 >>> 0 >= 8 >>> 0;
      if ($6) {
       $3 = $3 - 8 | 0;
       i64toi32_i32$2 = $4 + $3 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $118 = i64toi32_i32$1;
       i64toi32_i32$1 = $5 + $3 | 0;
       HEAP32[i64toi32_i32$1 >> 2] = $118;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       continue while_continue_4;
      }
      break while_continue_4;
     };
    }
    while_continue_5 : while (1) {
     $6 = $3;
     if ($3) {
      $3 = $3 - 1 | 0;
      HEAP8[($5 + $3 | 0) >> 0] = HEAPU8[($4 + $3 | 0) >> 0] | 0;
      continue while_continue_5;
     }
     break while_continue_5;
    };
   }
  }
 }
 
 function $lib_rt_tlsf_freeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$1 >> 2] = HEAP32[$1 >> 2] | 0 | 1 | 0;
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
 }
 
 function $lib_rt_tlsf_reallocateBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $8 = 0, $6 = 0, $7 = 0;
  $3 = $lib_rt_tlsf_prepareSize($2 | 0) | 0;
  $4 = HEAP32[$1 >> 2] | 0;
  if ($3 >>> 0 <= ($4 & (3 ^ -1 | 0) | 0) >>> 0) {
   $lib_rt_tlsf_prepareBlock($0 | 0, $1 | 0, $3 | 0);
   HEAP32[($1 + 12 | 0) >> 2] = $2;
   return $1 | 0;
  }
  $5 = $1;
  $6 = ($5 + 16 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
  $7 = HEAP32[$6 >> 2] | 0;
  if ($7 & 1 | 0) {
   $5 = (($4 & (3 ^ -1 | 0) | 0) + 16 | 0) + ($7 & (3 ^ -1 | 0) | 0) | 0;
   if ($5 >>> 0 >= $3 >>> 0) {
    $lib_rt_tlsf_removeBlock($0 | 0, $6 | 0);
    HEAP32[$1 >> 2] = $4 & 3 | 0 | $5 | 0;
    HEAP32[($1 + 12 | 0) >> 2] = $2;
    $lib_rt_tlsf_prepareBlock($0 | 0, $1 | 0, $3 | 0);
    return $1 | 0;
   }
  }
  $8 = $lib_rt_tlsf_allocateBlock($0 | 0, $2 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0) | 0;
  HEAP32[($8 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $lib_memory_memory_copy($8 + 16 | 0 | 0, $1 + 16 | 0 | 0, $2 | 0);
  if ($1 >>> 0 >= $lib_heap___heap_base >>> 0) {
   $lib_rt_tlsf_freeBlock($0 | 0, $1 | 0)
  }
  return $8 | 0;
 }
 
 function $lib_rt_tlsf___realloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return ($lib_rt_tlsf_reallocateBlock($lib_rt_tlsf_maybeInitialize() | 0 | 0, $lib_rt_tlsf_checkUsedBlock($0 | 0) | 0 | 0, $1 | 0) | 0) + 16 | 0 | 0;
 }
 
 function $lib_memory_memory_fill($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $8 = 0, $6 = 0, i64toi32_i32$2 = 0, $4 = 0, i64toi32_i32$0 = 0, $7 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $9 = 0, $19 = 0, $104 = 0, $104$hi = 0, $107$hi = 0, $9$hi = 0;
  $lib_util_memory_memset_inlined_0 : {
   $5 = $0;
   $4 = $1;
   $3 = $2;
   if (!$3) {
    break $lib_util_memory_memset_inlined_0
   }
   $6 = ($5 + $3 | 0) - 4 | 0;
   HEAP8[$5 >> 0] = $4;
   HEAP8[($6 + 3 | 0) >> 0] = $4;
   if ($3 >>> 0 <= 2 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($5 + 1 | 0) >> 0] = $4;
   HEAP8[($5 + 2 | 0) >> 0] = $4;
   HEAP8[($6 + 2 | 0) >> 0] = $4;
   HEAP8[($6 + 1 | 0) >> 0] = $4;
   if ($3 >>> 0 <= 6 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP8[($5 + 3 | 0) >> 0] = $4;
   HEAP8[$6 >> 0] = $4;
   if ($3 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   $7 = (0 - $5 | 0) & 3 | 0;
   $5 = $5 + $7 | 0;
   $3 = $3 - $7 | 0;
   $3 = $3 & -4 | 0;
   $8 = Math_imul((-1 >>> 0) / (255 >>> 0) | 0, $4 & 255 | 0);
   $6 = ($5 + $3 | 0) - 28 | 0;
   HEAP32[$5 >> 2] = $8;
   HEAP32[($6 + 24 | 0) >> 2] = $8;
   if ($3 >>> 0 <= 8 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($5 + 4 | 0) >> 2] = $8;
   HEAP32[($5 + 8 | 0) >> 2] = $8;
   HEAP32[($6 + 16 | 0) >> 2] = $8;
   HEAP32[($6 + 20 | 0) >> 2] = $8;
   if ($3 >>> 0 <= 24 >>> 0) {
    break $lib_util_memory_memset_inlined_0
   }
   HEAP32[($5 + 12 | 0) >> 2] = $8;
   HEAP32[($5 + 16 | 0) >> 2] = $8;
   HEAP32[($5 + 20 | 0) >> 2] = $8;
   HEAP32[($5 + 24 | 0) >> 2] = $8;
   HEAP32[$6 >> 2] = $8;
   HEAP32[($6 + 4 | 0) >> 2] = $8;
   HEAP32[($6 + 8 | 0) >> 2] = $8;
   HEAP32[($6 + 12 | 0) >> 2] = $8;
   $7 = 24 + ($5 & 4 | 0) | 0;
   $5 = $5 + $7 | 0;
   $3 = $3 - $7 | 0;
   i64toi32_i32$0 = 0;
   $104 = $8;
   $104$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$2 = $8;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
    $19 = 0;
   } else {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $19 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $107$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $104$hi;
   i64toi32_i32$0 = $104;
   i64toi32_i32$2 = $107$hi;
   i64toi32_i32$3 = $19;
   i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
   $9 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
   $9$hi = i64toi32_i32$2;
   while_continue_0 : while (1) {
    if ($3 >>> 0 >= 32 >>> 0) {
     i64toi32_i32$2 = $9$hi;
     i64toi32_i32$0 = $5;
     HEAP32[$5 >> 2] = $9;
     HEAP32[($5 + 4 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 8 | 0) >> 2] = $9;
     HEAP32[($5 + 12 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 16 | 0) >> 2] = $9;
     HEAP32[($5 + 20 | 0) >> 2] = i64toi32_i32$2;
     i64toi32_i32$0 = $5;
     HEAP32[($5 + 24 | 0) >> 2] = $9;
     HEAP32[($5 + 28 | 0) >> 2] = i64toi32_i32$2;
     $3 = $3 - 32 | 0;
     $5 = $5 + 32 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
  }
 }
 
 function $lib_array_ensureSize($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $6 = 0, $3 = 0, $5 = 0, $4 = 0;
  $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  if ($1 >>> 0 > ($3 >>> $2 | 0) >>> 0) {
   if ($1 >>> 0 > (1073741808 >>> $2 | 0) >>> 0) {
    $lib_builtins_abort(304 | 0, 256 | 0, 14 | 0, 48 | 0);
    abort();
   }
   $4 = HEAP32[$0 >> 2] | 0;
   $5 = $1 << $2 | 0;
   $6 = $lib_rt_tlsf___realloc($4 | 0, $5 | 0) | 0;
   $lib_memory_memory_fill($6 + $3 | 0 | 0, 0 | 0, $5 - $3 | 0 | 0);
   if (($6 | 0) != ($4 | 0)) {
    HEAP32[$0 >> 2] = $6;
    HEAP32[($0 + 4 | 0) >> 2] = $6;
   }
   HEAP32[($0 + 8 | 0) >> 2] = $5;
  }
 }
 
 function $lib_array_Array_f32____uset($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = Math_fround($2);
  HEAPF32[((HEAP32[($0 + 4 | 0) >> 2] | 0) + ($1 << 2 | 0) | 0) >> 2] = $2;
 }
 
 function $lib_array_Array_f32____set($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = Math_fround($2);
  if ($1 >>> 0 >= (HEAP32[($0 + 12 | 0) >> 2] | 0) >>> 0) {
   if (($1 | 0) < (0 | 0)) {
    $lib_builtins_abort(192 | 0, 256 | 0, 120 | 0, 22 | 0);
    abort();
   }
   $lib_array_ensureSize($0 | 0, $1 + 1 | 0 | 0, 2 | 0);
   HEAP32[($0 + 12 | 0) >> 2] = $1 + 1 | 0;
  }
  $lib_array_Array_f32____uset($0 | 0, $1 | 0, Math_fround($2));
 }
 
 function src_assembly_sorter_swap_f32_($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = Math_fround(0);
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $3 = Math_fround($lib_array_Array_f32____get($0 | 0, $2 | 0));
  $lib_array_Array_f32____set($0 | 0, $2 | 0, Math_fround(Math_fround($lib_array_Array_f32____get($0 | 0, $1 | 0))));
  $lib_array_Array_f32____set($0 | 0, $1 | 0, Math_fround($3));
  $lib_rt_pure___release($0 | 0);
 }
 
 function src_assembly_sorter_sort($0) {
  $0 = $0 | 0;
  var $4 = 0, $3 = 0, $1 = 0, $30 = 0, $42 = 0, $54 = 0;
  $0 = $lib_rt_pure___retain($0 | 0) | 0;
  $1 = 0;
  for_loop_0 : while (1) {
   if (($1 | 0) < ($lib_array_Array_f32__get_length($0 | 0) | 0 | 0)) {
    for_continue_0 : {
     $3 = $1;
     $4 = $3;
     for_loop_1 : while (1) {
      if (($4 | 0) < ($lib_array_Array_f32__get_length($0 | 0) | 0 | 0)) {
       for_continue_1 : {
        if ($3) {
         $30 = Math_fround($lib_array_Array_f32____get($0 | 0, $4 | 0)) >= Math_fround($lib_array_Array_f32____get($0 | 0, $3 + 1 | 0 | 0))
        } else {
         $30 = 0
        }
        if ($30) {
         break for_continue_1
        }
        if ($3) {
         $42 = Math_fround($lib_array_Array_f32____get($0 | 0, $4 + 2 | 0 | 0)) >= Math_fround($lib_array_Array_f32____get($0 | 0, $3 + 3 | 0 | 0))
        } else {
         $42 = 0
        }
        if ($42) {
         break for_continue_1
        }
        if ($3) {
         $54 = Math_fround($lib_array_Array_f32____get($0 | 0, $4 + 4 | 0 | 0)) >= Math_fround($lib_array_Array_f32____get($0 | 0, $3 + 5 | 0 | 0))
        } else {
         $54 = 0
        }
        if ($54) {
         break for_continue_1
        }
        $3 = $4;
       }
       $4 = $4 + 7 | 0;
       continue for_loop_1;
      }
      break for_loop_1;
     };
     $4 = 0;
     for_loop_3 : while (1) {
      if (($4 & 255 | 0) >>> 0 < 8 >>> 0) {
       src_assembly_sorter_swap_f32_($0 | 0, $1 + ($4 & 255 | 0) | 0 | 0, $3 + ($4 & 255 | 0) | 0 | 0);
       $4 = $4 + 1 | 0;
       continue for_loop_3;
      }
      break for_loop_3;
     };
    }
    $1 = $1 + 7 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return $0 | 0;
 }
 
 function $lib_rt_pure___collect() {
  return;
 }
 
 function $lib_rt_pure_finalize($0) {
  $0 = $0 | 0;
  $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT | 0, $0 | 0);
 }
 
 function $lib_rt_pure_decrement($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $2 = $1 & 268435455 | 0;
  if (!!((HEAP32[$0 >> 2] | 0) & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 144 | 0, 122 | 0, 14 | 0);
   abort();
  }
  if (($2 | 0) == (1 | 0)) {
   $lib_rt___visit_members($0 + 16 | 0 | 0, 1 | 0);
   if (!!($1 & -2147483648 | 0)) {
    $lib_builtins_abort(0 | 0, 144 | 0, 126 | 0, 18 | 0);
    abort();
   }
   $lib_rt_pure_finalize($0 | 0);
  } else {
   if (!($2 >>> 0 > 0 >>> 0)) {
    $lib_builtins_abort(0 | 0, 144 | 0, 136 | 0, 16 | 0);
    abort();
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1 & (268435455 ^ -1 | 0) | 0 | ($2 - 1 | 0) | 0;
  }
 }
 
 function $lib_rt_pure___visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if ($0 >>> 0 < $lib_heap___heap_base >>> 0) {
   return
  }
  if (!(($1 | 0) == (1 | 0))) {
   $lib_builtins_abort(0 | 0, 144 | 0, 69 | 0, 16 | 0);
   abort();
  }
  $lib_rt_pure_decrement($0 - 16 | 0 | 0);
 }
 
 function $lib_array_Array_f32____visit_impl($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_pure___visit(HEAP32[$0 >> 2] | 0 | 0, $1 | 0);
 }
 
 function $lib_rt___visit_members($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  switch$1$leave : {
   switch (HEAP32[($0 - 8 | 0) >> 2] | 0 | 0) {
   case 0:
   case 1:
    return;
   case 2:
    $2 = HEAP32[$0 >> 2] | 0;
    if ($2) {
     $lib_rt_pure___visit($2 | 0, $1 | 0)
    }
    return;
   case 3:
    $lib_array_Array_f32____visit_impl($0 | 0, $1 | 0);
    return;
   default:
    abort();
   };
  }
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 var FUNCTION_TABLE = [];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__alloc": $lib_rt_tlsf___alloc, 
  "__retain": $lib_rt_pure___retain, 
  "__release": $lib_rt_pure___release, 
  "__collect": $lib_rt_pure___collect, 
  "sort": src_assembly_sorter_sort
 };
}

var memasmFunc = new ArrayBuffer(65536);
var bufferView = new Uint8Array(memasmFunc);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    } 
  }
  base64DecodeToExistingUint8Array(bufferView, 16, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABzAA==");
base64DecodeToExistingUint8Array(bufferView, 64, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQA=");
base64DecodeToExistingUint8Array(bufferView, 128, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABzAA==");
base64DecodeToExistingUint8Array(bufferView, 176, "JAAAAAEAAAABAAAAJAAAAEkAbgBkAGUAeAAgAG8AdQB0ACAAbwBmACAAcgBhAG4AZwBlAA==");
base64DecodeToExistingUint8Array(bufferView, 240, "GgAAAAEAAAABAAAAGgAAAH4AbABpAGIALwBhAHIAcgBhAHkALgB0AHMA");
base64DecodeToExistingUint8Array(bufferView, 288, "HAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaAA=");
base64DecodeToExistingUint8Array(bufferView, 336, "BAAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACIZAAAAAAAA");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var sort = retasmFunc.sort;
