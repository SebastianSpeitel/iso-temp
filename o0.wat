(module
  (type $t0 (func (param i32 i32)))
  (type $t1 (func (param i32)))
  (type $t2 (func (param i32) (result i32)))
  (type $t3 (func (param i32 i32 i32)))
  (type $t4 (func (param i32 i32) (result i32)))
  (type $t5 (func (param i32 i32 i32) (result i32)))
  (type $t6 (func))
  (type $t7 (func (param i32 i32 i32 i32)))
  (type $t8 (func (result i32)))
  (import "env" "abort" (func $~lib/builtins/abort (type $t7)))
  (func $~lib/rt/tlsf/removeBlock (type $t0) (param $p0 i32) (param $p1 i32)
    (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32) (local $l7 i32) (local $l8 i32) (local $l9 i32) (local $l10 i32) (local $l11 i32)
    local.get $p1
    i32.load
    local.set $l2
    i32.const 1
    drop
    local.get $l2
    i32.const 1
    i32.and
    i32.eqz
    if $I0
      i32.const 0
      i32.const 32
      i32.const 277
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $l2
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    local.set $l3
    i32.const 1
    drop
    local.get $l3
    i32.const 16
    i32.ge_u
    if $I1 (result i32)
      local.get $l3
      i32.const 1073741808
      i32.lt_u
    else
      i32.const 0
    end
    i32.eqz
    if $I2
      i32.const 0
      i32.const 32
      i32.const 279
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $l3
    i32.const 256
    i32.lt_u
    if $I3
      i32.const 0
      local.set $l4
      local.get $l3
      i32.const 4
      i32.shr_u
      local.set $l5
    else
      i32.const 31
      local.get $l3
      i32.clz
      i32.sub
      local.set $l4
      local.get $l3
      local.get $l4
      i32.const 4
      i32.sub
      i32.shr_u
      i32.const 1
      i32.const 4
      i32.shl
      i32.xor
      local.set $l5
      local.get $l4
      i32.const 8
      i32.const 1
      i32.sub
      i32.sub
      local.set $l4
    end
    i32.const 1
    drop
    local.get $l4
    i32.const 23
    i32.lt_u
    if $I4 (result i32)
      local.get $l5
      i32.const 16
      i32.lt_u
    else
      i32.const 0
    end
    i32.eqz
    if $I5
      i32.const 0
      i32.const 32
      i32.const 292
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $p1
    i32.load offset=16
    local.set $l6
    local.get $p1
    i32.load offset=20
    local.set $l7
    local.get $l6
    if $I6
      local.get $l6
      local.get $l7
      i32.store offset=20
    end
    local.get $l7
    if $I7
      local.get $l7
      local.get $l6
      i32.store offset=16
    end
    local.get $p1
    block $B8 (result i32)
      local.get $p0
      local.set $l10
      local.get $l4
      local.set $l9
      local.get $l5
      local.set $l8
      local.get $l10
      local.get $l9
      i32.const 4
      i32.shl
      local.get $l8
      i32.add
      i32.const 2
      i32.shl
      i32.add
      i32.load offset=96
    end
    i32.eq
    if $I9
      block $B10
        local.get $p0
        local.set $l11
        local.get $l4
        local.set $l10
        local.get $l5
        local.set $l9
        local.get $l7
        local.set $l8
        local.get $l11
        local.get $l10
        i32.const 4
        i32.shl
        local.get $l9
        i32.add
        i32.const 2
        i32.shl
        i32.add
        local.get $l8
        i32.store offset=96
      end
      local.get $l7
      i32.eqz
      if $I11
        block $B12 (result i32)
          local.get $p0
          local.set $l9
          local.get $l4
          local.set $l8
          local.get $l9
          local.get $l8
          i32.const 2
          i32.shl
          i32.add
          i32.load offset=4
        end
        local.set $l9
        block $B13
          local.get $p0
          local.set $l8
          local.get $l4
          local.set $l11
          local.get $l9
          i32.const 1
          local.get $l5
          i32.shl
          i32.const -1
          i32.xor
          i32.and
          local.tee $l9
          local.set $l10
          local.get $l8
          local.get $l11
          i32.const 2
          i32.shl
          i32.add
          local.get $l10
          i32.store offset=4
        end
        local.get $l9
        i32.eqz
        if $I14
          local.get $p0
          local.get $p0
          i32.load
          i32.const 1
          local.get $l4
          i32.shl
          i32.const -1
          i32.xor
          i32.and
          i32.store
        end
      end
    end)
  (func $~lib/rt/tlsf/insertBlock (type $t0) (param $p0 i32) (param $p1 i32)
    (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32) (local $l7 i32) (local $l8 i32) (local $l9 i32) (local $l10 i32) (local $l11 i32) (local $l12 i32) (local $l13 i32)
    i32.const 1
    drop
    local.get $p1
    i32.eqz
    if $I0
      i32.const 0
      i32.const 32
      i32.const 205
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $p1
    i32.load
    local.set $l2
    i32.const 1
    drop
    local.get $l2
    i32.const 1
    i32.and
    i32.eqz
    if $I1
      i32.const 0
      i32.const 32
      i32.const 207
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    block $B2 (result i32)
      local.get $p1
      local.set $l3
      local.get $l3
      i32.const 16
      i32.add
      local.get $l3
      i32.load
      i32.const 3
      i32.const -1
      i32.xor
      i32.and
      i32.add
    end
    local.set $l4
    local.get $l4
    i32.load
    local.set $l5
    local.get $l5
    i32.const 1
    i32.and
    if $I3
      local.get $l2
      i32.const 3
      i32.const -1
      i32.xor
      i32.and
      i32.const 16
      i32.add
      local.get $l5
      i32.const 3
      i32.const -1
      i32.xor
      i32.and
      i32.add
      local.set $l3
      local.get $l3
      i32.const 1073741808
      i32.lt_u
      if $I4
        local.get $p0
        local.get $l4
        call $~lib/rt/tlsf/removeBlock
        local.get $p1
        local.get $l2
        i32.const 3
        i32.and
        local.get $l3
        i32.or
        local.tee $l2
        i32.store
        block $B5 (result i32)
          local.get $p1
          local.set $l6
          local.get $l6
          i32.const 16
          i32.add
          local.get $l6
          i32.load
          i32.const 3
          i32.const -1
          i32.xor
          i32.and
          i32.add
        end
        local.set $l4
        local.get $l4
        i32.load
        local.set $l5
      end
    end
    local.get $l2
    i32.const 2
    i32.and
    if $I6
      block $B7 (result i32)
        local.get $p1
        local.set $l6
        local.get $l6
        i32.const 4
        i32.sub
        i32.load
      end
      local.set $l6
      local.get $l6
      i32.load
      local.set $l3
      i32.const 1
      drop
      local.get $l3
      i32.const 1
      i32.and
      i32.eqz
      if $I8
        i32.const 0
        i32.const 32
        i32.const 228
        i32.const 16
        call $~lib/builtins/abort
        unreachable
      end
      local.get $l3
      i32.const 3
      i32.const -1
      i32.xor
      i32.and
      i32.const 16
      i32.add
      local.get $l2
      i32.const 3
      i32.const -1
      i32.xor
      i32.and
      i32.add
      local.set $l7
      local.get $l7
      i32.const 1073741808
      i32.lt_u
      if $I9
        local.get $p0
        local.get $l6
        call $~lib/rt/tlsf/removeBlock
        local.get $l6
        local.get $l3
        i32.const 3
        i32.and
        local.get $l7
        i32.or
        local.tee $l2
        i32.store
        local.get $l6
        local.set $p1
      end
    end
    local.get $l4
    local.get $l5
    i32.const 2
    i32.or
    i32.store
    local.get $l2
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    local.set $l8
    i32.const 1
    drop
    local.get $l8
    i32.const 16
    i32.ge_u
    if $I10 (result i32)
      local.get $l8
      i32.const 1073741808
      i32.lt_u
    else
      i32.const 0
    end
    i32.eqz
    if $I11
      i32.const 0
      i32.const 32
      i32.const 243
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    i32.const 1
    drop
    local.get $p1
    i32.const 16
    i32.add
    local.get $l8
    i32.add
    local.get $l4
    i32.eq
    i32.eqz
    if $I12
      i32.const 0
      i32.const 32
      i32.const 244
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $l4
    i32.const 4
    i32.sub
    local.get $p1
    i32.store
    local.get $l8
    i32.const 256
    i32.lt_u
    if $I13
      i32.const 0
      local.set $l9
      local.get $l8
      i32.const 4
      i32.shr_u
      local.set $l10
    else
      i32.const 31
      local.get $l8
      i32.clz
      i32.sub
      local.set $l9
      local.get $l8
      local.get $l9
      i32.const 4
      i32.sub
      i32.shr_u
      i32.const 1
      i32.const 4
      i32.shl
      i32.xor
      local.set $l10
      local.get $l9
      i32.const 8
      i32.const 1
      i32.sub
      i32.sub
      local.set $l9
    end
    i32.const 1
    drop
    local.get $l9
    i32.const 23
    i32.lt_u
    if $I14 (result i32)
      local.get $l10
      i32.const 16
      i32.lt_u
    else
      i32.const 0
    end
    i32.eqz
    if $I15
      i32.const 0
      i32.const 32
      i32.const 260
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    block $B16 (result i32)
      local.get $p0
      local.set $l7
      local.get $l9
      local.set $l3
      local.get $l10
      local.set $l6
      local.get $l7
      local.get $l3
      i32.const 4
      i32.shl
      local.get $l6
      i32.add
      i32.const 2
      i32.shl
      i32.add
      i32.load offset=96
    end
    local.set $l11
    local.get $p1
    i32.const 0
    i32.store offset=16
    local.get $p1
    local.get $l11
    i32.store offset=20
    local.get $l11
    if $I17
      local.get $l11
      local.get $p1
      i32.store offset=16
    end
    block $B18
      local.get $p0
      local.set $l12
      local.get $l9
      local.set $l7
      local.get $l10
      local.set $l3
      local.get $p1
      local.set $l6
      local.get $l12
      local.get $l7
      i32.const 4
      i32.shl
      local.get $l3
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $l6
      i32.store offset=96
    end
    local.get $p0
    local.get $p0
    i32.load
    i32.const 1
    local.get $l9
    i32.shl
    i32.or
    i32.store
    block $B19
      local.get $p0
      local.set $l13
      local.get $l9
      local.set $l12
      block $B20 (result i32)
        local.get $p0
        local.set $l3
        local.get $l9
        local.set $l6
        local.get $l3
        local.get $l6
        i32.const 2
        i32.shl
        i32.add
        i32.load offset=4
      end
      i32.const 1
      local.get $l10
      i32.shl
      i32.or
      local.set $l7
      local.get $l13
      local.get $l12
      i32.const 2
      i32.shl
      i32.add
      local.get $l7
      i32.store offset=4
    end)
  (func $~lib/rt/tlsf/addMemory (type $t5) (param $p0 i32) (param $p1 i32) (param $p2 i32) (result i32)
    (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32) (local $l7 i32) (local $l8 i32) (local $l9 i32)
    i32.const 1
    drop
    local.get $p1
    local.get $p2
    i32.le_u
    if $I0 (result i32)
      local.get $p1
      i32.const 15
      i32.and
      i32.eqz
    else
      i32.const 0
    end
    if $I1 (result i32)
      local.get $p2
      i32.const 15
      i32.and
      i32.eqz
    else
      i32.const 0
    end
    i32.eqz
    if $I2
      i32.const 0
      i32.const 32
      i32.const 386
      i32.const 5
      call $~lib/builtins/abort
      unreachable
    end
    block $B3 (result i32)
      local.get $p0
      local.set $l3
      local.get $l3
      i32.load offset=1568
    end
    local.set $l4
    i32.const 0
    local.set $l5
    local.get $l4
    if $I4
      i32.const 1
      drop
      local.get $p1
      local.get $l4
      i32.const 16
      i32.add
      i32.ge_u
      i32.eqz
      if $I5
        i32.const 0
        i32.const 32
        i32.const 396
        i32.const 16
        call $~lib/builtins/abort
        unreachable
      end
      local.get $p1
      i32.const 16
      i32.sub
      local.get $l4
      i32.eq
      if $I6
        local.get $p1
        i32.const 16
        i32.sub
        local.set $p1
        local.get $l4
        i32.load
        local.set $l5
      else
        nop
      end
    else
      i32.const 1
      drop
      local.get $p1
      local.get $p0
      i32.const 1572
      i32.add
      i32.ge_u
      i32.eqz
      if $I7
        i32.const 0
        i32.const 32
        i32.const 408
        i32.const 5
        call $~lib/builtins/abort
        unreachable
      end
    end
    local.get $p2
    local.get $p1
    i32.sub
    local.set $l6
    local.get $l6
    i32.const 16
    i32.const 16
    i32.add
    i32.const 16
    i32.add
    i32.lt_u
    if $I8
      i32.const 0
      return
      unreachable
    end
    local.get $l6
    i32.const 16
    i32.const 1
    i32.shl
    i32.sub
    local.set $l7
    local.get $p1
    local.set $l8
    local.get $l8
    local.get $l7
    i32.const 1
    i32.or
    local.get $l5
    i32.const 2
    i32.and
    i32.or
    i32.store
    local.get $l8
    i32.const 0
    i32.store offset=16
    local.get $l8
    i32.const 0
    i32.store offset=20
    local.get $p1
    local.get $l6
    i32.add
    i32.const 16
    i32.sub
    local.set $l4
    local.get $l4
    i32.const 0
    i32.const 2
    i32.or
    i32.store
    block $B9
      local.get $p0
      local.set $l9
      local.get $l4
      local.set $l3
      local.get $l9
      local.get $l3
      i32.store offset=1568
    end
    local.get $p0
    local.get $l8
    call $~lib/rt/tlsf/insertBlock
    i32.const 1)
  (func $~lib/rt/tlsf/maybeInitialize (type $t8) (result i32)
    (local $l0 i32) (local $l1 i32) (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32) (local $l7 i32) (local $l8 i32) (local $l9 i32) (local $l10 i32) (local $l11 i32)
    global.get $g0
    local.set $l0
    local.get $l0
    i32.eqz
    if $I0
      global.get $g6
      i32.const 15
      i32.add
      i32.const 15
      i32.const -1
      i32.xor
      i32.and
      local.set $l1
      memory.size
      local.set $l2
      local.get $l1
      i32.const 1572
      i32.add
      i32.const 65535
      i32.add
      i32.const 65535
      i32.const -1
      i32.xor
      i32.and
      i32.const 16
      i32.shr_u
      local.set $l3
      local.get $l3
      local.get $l2
      i32.gt_s
      if $I1 (result i32)
        local.get $l3
        local.get $l2
        i32.sub
        memory.grow
        i32.const 0
        i32.lt_s
      else
        i32.const 0
      end
      if $I2
        unreachable
      end
      local.get $l1
      local.set $l0
      local.get $l0
      i32.const 0
      i32.store
      block $B3
        local.get $l0
        local.set $l5
        i32.const 0
        local.set $l4
        local.get $l5
        local.get $l4
        i32.store offset=1568
      end
      i32.const 0
      local.set $l5
      block $B4
        loop $L5
          local.get $l5
          i32.const 23
          i32.lt_u
          local.set $l4
          local.get $l4
          if $I6
            block $B7
              block $B8
                local.get $l0
                local.set $l8
                local.get $l5
                local.set $l7
                i32.const 0
                local.set $l6
                local.get $l8
                local.get $l7
                i32.const 2
                i32.shl
                i32.add
                local.get $l6
                i32.store offset=4
              end
              i32.const 0
              local.set $l8
              block $B9
                loop $L10
                  local.get $l8
                  i32.const 16
                  i32.lt_u
                  local.set $l7
                  local.get $l7
                  if $I11
                    block $B12
                      block $B13
                        local.get $l0
                        local.set $l11
                        local.get $l5
                        local.set $l10
                        local.get $l8
                        local.set $l9
                        i32.const 0
                        local.set $l6
                        local.get $l11
                        local.get $l10
                        i32.const 4
                        i32.shl
                        local.get $l9
                        i32.add
                        i32.const 2
                        i32.shl
                        i32.add
                        local.get $l6
                        i32.store offset=96
                      end
                    end
                    local.get $l8
                    i32.const 1
                    i32.add
                    local.set $l8
                    br $L10
                  end
                end
              end
            end
            local.get $l5
            i32.const 1
            i32.add
            local.set $l5
            br $L5
          end
        end
      end
      local.get $l1
      i32.const 1572
      i32.add
      i32.const 15
      i32.add
      i32.const 15
      i32.const -1
      i32.xor
      i32.and
      local.set $l5
      i32.const 0
      drop
      local.get $l0
      local.get $l5
      memory.size
      i32.const 16
      i32.shl
      call $~lib/rt/tlsf/addMemory
      drop
      local.get $l0
      global.set $g0
    end
    local.get $l0)
  (func $~lib/rt/tlsf/prepareSize (type $t2) (param $p0 i32) (result i32)
    (local $l1 i32) (local $l2 i32)
    local.get $p0
    i32.const 1073741808
    i32.ge_u
    if $I0
      block $B1
        i32.const 80
        i32.const 32
        i32.const 461
        i32.const 30
        call $~lib/builtins/abort
        unreachable
        unreachable
      end
      unreachable
      unreachable
    end
    local.get $p0
    i32.const 15
    i32.add
    i32.const 15
    i32.const -1
    i32.xor
    i32.and
    local.tee $l1
    i32.const 16
    local.tee $l2
    local.get $l1
    local.get $l2
    i32.gt_u
    select)
  (func $~lib/rt/tlsf/searchBlock (type $t4) (param $p0 i32) (param $p1 i32) (result i32)
    (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32) (local $l7 i32) (local $l8 i32) (local $l9 i32)
    local.get $p1
    i32.const 256
    i32.lt_u
    if $I0
      i32.const 0
      local.set $l2
      local.get $p1
      i32.const 4
      i32.shr_u
      local.set $l3
    else
      local.get $p1
      i32.const 536870904
      i32.lt_u
      if $I1 (result i32)
        local.get $p1
        i32.const 1
        i32.const 27
        local.get $p1
        i32.clz
        i32.sub
        i32.shl
        i32.add
        i32.const 1
        i32.sub
      else
        local.get $p1
      end
      local.set $l4
      i32.const 31
      local.get $l4
      i32.clz
      i32.sub
      local.set $l2
      local.get $l4
      local.get $l2
      i32.const 4
      i32.sub
      i32.shr_u
      i32.const 1
      i32.const 4
      i32.shl
      i32.xor
      local.set $l3
      local.get $l2
      i32.const 8
      i32.const 1
      i32.sub
      i32.sub
      local.set $l2
    end
    i32.const 1
    drop
    local.get $l2
    i32.const 23
    i32.lt_u
    if $I2 (result i32)
      local.get $l3
      i32.const 16
      i32.lt_u
    else
      i32.const 0
    end
    i32.eqz
    if $I3
      i32.const 0
      i32.const 32
      i32.const 338
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    block $B4 (result i32)
      local.get $p0
      local.set $l5
      local.get $l2
      local.set $l4
      local.get $l5
      local.get $l4
      i32.const 2
      i32.shl
      i32.add
      i32.load offset=4
    end
    i32.const 0
    i32.const -1
    i32.xor
    local.get $l3
    i32.shl
    i32.and
    local.set $l6
    i32.const 0
    local.set $l7
    local.get $l6
    i32.eqz
    if $I5
      local.get $p0
      i32.load
      i32.const 0
      i32.const -1
      i32.xor
      local.get $l2
      i32.const 1
      i32.add
      i32.shl
      i32.and
      local.set $l5
      local.get $l5
      i32.eqz
      if $I6
        i32.const 0
        local.set $l7
      else
        local.get $l5
        i32.ctz
        local.set $l2
        block $B7 (result i32)
          local.get $p0
          local.set $l8
          local.get $l2
          local.set $l4
          local.get $l8
          local.get $l4
          i32.const 2
          i32.shl
          i32.add
          i32.load offset=4
        end
        local.set $l6
        i32.const 1
        drop
        local.get $l6
        i32.eqz
        if $I8
          i32.const 0
          i32.const 32
          i32.const 351
          i32.const 18
          call $~lib/builtins/abort
          unreachable
        end
        block $B9 (result i32)
          local.get $p0
          local.set $l9
          local.get $l2
          local.set $l8
          local.get $l6
          i32.ctz
          local.set $l4
          local.get $l9
          local.get $l8
          i32.const 4
          i32.shl
          local.get $l4
          i32.add
          i32.const 2
          i32.shl
          i32.add
          i32.load offset=96
        end
        local.set $l7
      end
    else
      block $B10 (result i32)
        local.get $p0
        local.set $l9
        local.get $l2
        local.set $l8
        local.get $l6
        i32.ctz
        local.set $l4
        local.get $l9
        local.get $l8
        i32.const 4
        i32.shl
        local.get $l4
        i32.add
        i32.const 2
        i32.shl
        i32.add
        i32.load offset=96
      end
      local.set $l7
    end
    local.get $l7)
  (func $~lib/rt/tlsf/growMemory (type $t0) (param $p0 i32) (param $p1 i32)
    (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32) (local $l7 i32)
    i32.const 0
    drop
    local.get $p1
    i32.const 536870904
    i32.lt_u
    if $I0
      local.get $p1
      i32.const 1
      i32.const 27
      local.get $p1
      i32.clz
      i32.sub
      i32.shl
      i32.const 1
      i32.sub
      i32.add
      local.set $p1
    end
    memory.size
    local.set $l2
    local.get $p1
    i32.const 16
    local.get $l2
    i32.const 16
    i32.shl
    i32.const 16
    i32.sub
    block $B1 (result i32)
      local.get $p0
      local.set $l3
      local.get $l3
      i32.load offset=1568
    end
    i32.ne
    i32.shl
    i32.add
    local.set $p1
    local.get $p1
    i32.const 65535
    i32.add
    i32.const 65535
    i32.const -1
    i32.xor
    i32.and
    i32.const 16
    i32.shr_u
    local.set $l4
    local.get $l2
    local.tee $l3
    local.get $l4
    local.tee $l5
    local.get $l3
    local.get $l5
    i32.gt_s
    select
    local.set $l6
    local.get $l6
    memory.grow
    i32.const 0
    i32.lt_s
    if $I2
      local.get $l4
      memory.grow
      i32.const 0
      i32.lt_s
      if $I3
        unreachable
      end
    end
    memory.size
    local.set $l7
    local.get $p0
    local.get $l2
    i32.const 16
    i32.shl
    local.get $l7
    i32.const 16
    i32.shl
    call $~lib/rt/tlsf/addMemory
    drop)
  (func $~lib/rt/tlsf/prepareBlock (type $t3) (param $p0 i32) (param $p1 i32) (param $p2 i32)
    (local $l3 i32) (local $l4 i32) (local $l5 i32)
    local.get $p1
    i32.load
    local.set $l3
    i32.const 1
    drop
    local.get $p2
    i32.const 15
    i32.and
    i32.eqz
    i32.eqz
    if $I0
      i32.const 0
      i32.const 32
      i32.const 365
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $l3
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    local.get $p2
    i32.sub
    local.set $l4
    local.get $l4
    i32.const 16
    i32.const 16
    i32.add
    i32.ge_u
    if $I1
      local.get $p1
      local.get $p2
      local.get $l3
      i32.const 2
      i32.and
      i32.or
      i32.store
      local.get $p1
      i32.const 16
      i32.add
      local.get $p2
      i32.add
      local.set $l5
      local.get $l5
      local.get $l4
      i32.const 16
      i32.sub
      i32.const 1
      i32.or
      i32.store
      local.get $p0
      local.get $l5
      call $~lib/rt/tlsf/insertBlock
    else
      local.get $p1
      local.get $l3
      i32.const 1
      i32.const -1
      i32.xor
      i32.and
      i32.store
      block $B2 (result i32)
        local.get $p1
        local.set $l5
        local.get $l5
        i32.const 16
        i32.add
        local.get $l5
        i32.load
        i32.const 3
        i32.const -1
        i32.xor
        i32.and
        i32.add
      end
      block $B3 (result i32)
        local.get $p1
        local.set $l5
        local.get $l5
        i32.const 16
        i32.add
        local.get $l5
        i32.load
        i32.const 3
        i32.const -1
        i32.xor
        i32.and
        i32.add
      end
      i32.load
      i32.const 2
      i32.const -1
      i32.xor
      i32.and
      i32.store
    end)
  (func $~lib/rt/tlsf/allocateBlock (type $t5) (param $p0 i32) (param $p1 i32) (param $p2 i32) (result i32)
    (local $l3 i32) (local $l4 i32)
    i32.const 1
    drop
    global.get $g2
    i32.eqz
    i32.eqz
    if $I0
      i32.const 0
      i32.const 32
      i32.const 500
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $p1
    call $~lib/rt/tlsf/prepareSize
    local.set $l3
    local.get $p0
    local.get $l3
    call $~lib/rt/tlsf/searchBlock
    local.set $l4
    local.get $l4
    i32.eqz
    if $I1
      global.get $g3
      if $I2
        i32.const 1
        drop
        i32.const 1
        global.set $g2
        call $~lib/rt/pure/__collect
        i32.const 1
        drop
        i32.const 0
        global.set $g2
        local.get $p0
        local.get $l3
        call $~lib/rt/tlsf/searchBlock
        local.set $l4
        local.get $l4
        i32.eqz
        if $I3
          local.get $p0
          local.get $l3
          call $~lib/rt/tlsf/growMemory
          local.get $p0
          local.get $l3
          call $~lib/rt/tlsf/searchBlock
          local.set $l4
          i32.const 1
          drop
          local.get $l4
          i32.eqz
          if $I4
            i32.const 0
            i32.const 32
            i32.const 512
            i32.const 20
            call $~lib/builtins/abort
            unreachable
          end
        end
      else
        local.get $p0
        local.get $l3
        call $~lib/rt/tlsf/growMemory
        local.get $p0
        local.get $l3
        call $~lib/rt/tlsf/searchBlock
        local.set $l4
        i32.const 1
        drop
        local.get $l4
        i32.eqz
        if $I5
          i32.const 0
          i32.const 32
          i32.const 517
          i32.const 18
          call $~lib/builtins/abort
          unreachable
        end
      end
    end
    i32.const 1
    drop
    local.get $l4
    i32.load
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    local.get $l3
    i32.ge_u
    i32.eqz
    if $I6
      i32.const 0
      i32.const 32
      i32.const 520
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $l4
    i32.const 0
    i32.store offset=4
    local.get $l4
    local.get $p2
    i32.store offset=8
    local.get $l4
    local.get $p1
    i32.store offset=12
    local.get $p0
    local.get $l4
    call $~lib/rt/tlsf/removeBlock
    local.get $p0
    local.get $l4
    local.get $l3
    call $~lib/rt/tlsf/prepareBlock
    i32.const 0
    drop
    local.get $l4)
  (func $~lib/rt/tlsf/__alloc (type $t4) (param $p0 i32) (param $p1 i32) (result i32)
    call $~lib/rt/tlsf/maybeInitialize
    local.get $p0
    local.get $p1
    call $~lib/rt/tlsf/allocateBlock
    i32.const 16
    i32.add)
  (func $~lib/rt/pure/increment (type $t1) (param $p0 i32)
    (local $l1 i32)
    local.get $p0
    i32.load offset=4
    local.set $l1
    local.get $l1
    i32.const 268435455
    i32.const -1
    i32.xor
    i32.and
    local.get $l1
    i32.const 1
    i32.add
    i32.const 268435455
    i32.const -1
    i32.xor
    i32.and
    i32.eq
    i32.eqz
    if $I0
      i32.const 0
      i32.const 144
      i32.const 109
      i32.const 3
      call $~lib/builtins/abort
      unreachable
    end
    local.get $p0
    local.get $l1
    i32.const 1
    i32.add
    i32.store offset=4
    i32.const 0
    drop
    i32.const 1
    drop
    local.get $p0
    i32.load
    i32.const 1
    i32.and
    i32.eqz
    i32.eqz
    if $I1
      i32.const 0
      i32.const 144
      i32.const 112
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end)
  (func $~lib/rt/pure/__retain (type $t2) (param $p0 i32) (result i32)
    local.get $p0
    global.get $g6
    i32.gt_u
    if $I0
      local.get $p0
      i32.const 16
      i32.sub
      call $~lib/rt/pure/increment
    end
    local.get $p0)
  (func $~lib/rt/pure/__release (type $t1) (param $p0 i32)
    local.get $p0
    global.get $g6
    i32.gt_u
    if $I0
      local.get $p0
      i32.const 16
      i32.sub
      call $~lib/rt/pure/decrement
    end)
  (func $~lib/typedarray/Int32Array#get:length (type $t2) (param $p0 i32) (result i32)
    local.get $p0
    i32.load offset=8
    i32.const 2
    i32.shr_u)
  (func $~lib/typedarray/Int32Array#__get (type $t4) (param $p0 i32) (param $p1 i32) (result i32)
    local.get $p1
    local.get $p0
    i32.load offset=8
    i32.const 2
    i32.shr_u
    i32.ge_u
    if $I0
      block $B1
        i32.const 192
        i32.const 256
        i32.const 664
        i32.const 64
        call $~lib/builtins/abort
        unreachable
        unreachable
      end
      unreachable
      unreachable
    end
    local.get $p0
    i32.load offset=4
    local.get $p1
    i32.const 2
    i32.shl
    i32.add
    i32.load)
  (func $~lib/typedarray/Int32Array#__set (type $t3) (param $p0 i32) (param $p1 i32) (param $p2 i32)
    local.get $p1
    local.get $p0
    i32.load offset=8
    i32.const 2
    i32.shr_u
    i32.ge_u
    if $I0
      block $B1
        i32.const 192
        i32.const 256
        i32.const 675
        i32.const 64
        call $~lib/builtins/abort
        unreachable
        unreachable
      end
      unreachable
      unreachable
    end
    local.get $p0
    i32.load offset=4
    local.get $p1
    i32.const 2
    i32.shl
    i32.add
    local.get $p2
    i32.store)
  (func $src/assembly/sorter/swap (type $t3) (param $p0 i32) (param $p1 i32) (param $p2 i32)
    (local $l3 i32)
    local.get $p0
    call $~lib/rt/pure/__retain
    local.set $p0
    local.get $p0
    local.get $p2
    call $~lib/typedarray/Int32Array#__get
    local.set $l3
    local.get $p0
    local.get $p2
    local.get $p0
    local.get $p1
    call $~lib/typedarray/Int32Array#__get
    call $~lib/typedarray/Int32Array#__set
    local.get $p0
    local.get $p1
    local.get $l3
    call $~lib/typedarray/Int32Array#__set
    local.get $p0
    call $~lib/rt/pure/__release)
  (func $src/assembly/sorter/sort (type $t2) (param $p0 i32) (result i32)
    (local $l1 i32) (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32)
    local.get $p0
    call $~lib/rt/pure/__retain
    local.set $p0
    i32.const 0
    local.set $l1
    block $B0
      loop $L1
        local.get $l1
        local.get $p0
        call $~lib/typedarray/Int32Array#get:length
        i32.lt_s
        local.set $l2
        local.get $l2
        if $I2
          block $B3
            local.get $l1
            local.set $l3
            local.get $l1
            i32.const 7
            i32.add
            local.set $l4
            block $B4
              loop $L5
                local.get $l4
                local.get $p0
                call $~lib/typedarray/Int32Array#get:length
                i32.lt_s
                local.set $l5
                local.get $l5
                if $I6
                  block $B7
                    local.get $p0
                    local.get $l4
                    call $~lib/typedarray/Int32Array#__get
                    local.get $p0
                    local.get $l3
                    i32.const 1
                    i32.add
                    call $~lib/typedarray/Int32Array#__get
                    i32.ge_s
                    if $I8
                      br $B7
                      unreachable
                    end
                    local.get $p0
                    local.get $l4
                    i32.const 2
                    i32.add
                    call $~lib/typedarray/Int32Array#__get
                    local.get $p0
                    local.get $l3
                    i32.const 3
                    i32.add
                    call $~lib/typedarray/Int32Array#__get
                    i32.ge_s
                    if $I9
                      br $B7
                      unreachable
                    end
                    local.get $p0
                    local.get $l4
                    i32.const 4
                    i32.add
                    call $~lib/typedarray/Int32Array#__get
                    local.get $p0
                    local.get $l3
                    i32.const 5
                    i32.add
                    call $~lib/typedarray/Int32Array#__get
                    i32.ge_s
                    if $I10
                      br $B7
                      unreachable
                    end
                    local.get $l4
                    local.set $l3
                  end
                  local.get $l4
                  i32.const 7
                  i32.add
                  local.set $l4
                  br $L5
                end
              end
            end
            i32.const 0
            local.set $l4
            block $B11
              loop $L12
                local.get $l4
                i32.const 255
                i32.and
                i32.const 7
                i32.lt_u
                local.set $l6
                local.get $l6
                if $I13
                  block $B14
                    local.get $p0
                    local.get $l1
                    local.get $l4
                    i32.const 255
                    i32.and
                    i32.add
                    local.get $l3
                    local.get $l4
                    i32.const 255
                    i32.and
                    i32.add
                    call $src/assembly/sorter/swap
                  end
                  local.get $l4
                  i32.const 1
                  i32.add
                  local.set $l4
                  br $L12
                end
              end
            end
          end
          local.get $l1
          i32.const 7
          i32.add
          local.set $l1
          br $L1
        end
      end
    end
    local.get $p0)
  (func $~lib/rt/pure/__collect (type $t6)
    i32.const 1
    drop
    return)
  (func $~lib/rt/tlsf/freeBlock (type $t0) (param $p0 i32) (param $p1 i32)
    (local $l2 i32)
    local.get $p1
    i32.load
    local.set $l2
    local.get $p1
    local.get $l2
    i32.const 1
    i32.or
    i32.store
    local.get $p0
    local.get $p1
    call $~lib/rt/tlsf/insertBlock
    i32.const 0
    drop)
  (func $~lib/rt/pure/finalize (type $t1) (param $p0 i32)
    i32.const 0
    drop
    global.get $g0
    local.get $p0
    call $~lib/rt/tlsf/freeBlock)
  (func $~lib/rt/pure/decrement (type $t1) (param $p0 i32)
    (local $l1 i32) (local $l2 i32)
    local.get $p0
    i32.load offset=4
    local.set $l1
    local.get $l1
    i32.const 268435455
    i32.and
    local.set $l2
    i32.const 0
    drop
    i32.const 1
    drop
    local.get $p0
    i32.load
    i32.const 1
    i32.and
    i32.eqz
    i32.eqz
    if $I0
      i32.const 0
      i32.const 144
      i32.const 122
      i32.const 14
      call $~lib/builtins/abort
      unreachable
    end
    local.get $l2
    i32.const 1
    i32.eq
    if $I1
      local.get $p0
      i32.const 16
      i32.add
      i32.const 1
      call $~lib/rt/__visit_members
      i32.const 1
      drop
      block $B2
        i32.const 1
        drop
        local.get $l1
        i32.const -2147483648
        i32.and
        i32.eqz
        i32.eqz
        if $I3
          i32.const 0
          i32.const 144
          i32.const 126
          i32.const 18
          call $~lib/builtins/abort
          unreachable
        end
        local.get $p0
        call $~lib/rt/pure/finalize
      end
    else
      i32.const 1
      drop
      local.get $l2
      i32.const 0
      i32.gt_u
      i32.eqz
      if $I4
        i32.const 0
        i32.const 144
        i32.const 136
        i32.const 16
        call $~lib/builtins/abort
        unreachable
      end
      i32.const 1
      drop
      local.get $p0
      local.get $l1
      i32.const 268435455
      i32.const -1
      i32.xor
      i32.and
      local.get $l2
      i32.const 1
      i32.sub
      i32.or
      i32.store offset=4
    end)
  (func $~lib/rt/pure/__visit (type $t0) (param $p0 i32) (param $p1 i32)
    local.get $p0
    global.get $g6
    i32.lt_u
    if $I0
      return
      unreachable
    end
    i32.const 1
    drop
    block $B1
      i32.const 1
      drop
      local.get $p1
      i32.const 1
      i32.eq
      i32.eqz
      if $I2
        i32.const 0
        i32.const 144
        i32.const 69
        i32.const 16
        call $~lib/builtins/abort
        unreachable
      end
      local.get $p0
      i32.const 16
      i32.sub
      call $~lib/rt/pure/decrement
    end)
  (func $~lib/rt/__visit_members (type $t0) (param $p0 i32) (param $p1 i32)
    (local $l2 i32)
    block $B0
    end
    block $B1
      block $B2
        block $B3
          block $B4
            local.get $p0
            i32.const 8
            i32.sub
            i32.load
            br_table $B4 $B4 $B3 $B3 $B2
          end
          block $B5
            block $B6
              return
              unreachable
            end
            unreachable
            unreachable
          end
          unreachable
        end
        block $B7
          block $B8
            block $B9
              local.get $p0
              i32.load
              local.tee $l2
              if $I10
                local.get $l2
                local.get $p1
                call $~lib/rt/pure/__visit
              end
              return
              unreachable
            end
            unreachable
            unreachable
          end
          unreachable
          unreachable
        end
        unreachable
      end
      block $B11
        block $B12
          unreachable
          unreachable
        end
        unreachable
        unreachable
      end
      unreachable
    end)
  (table $T0 1 funcref)
  (memory $memory 1)
  (global $g0 (mut i32) (i32.const 0))
  (global $g1 i32 (i32.const 0))
  (global $g2 (mut i32) (i32.const 0))
  (global $g3 (mut i32) (i32.const 1))
  (global $Int32Array_ID i32 (i32.const 3))
  (global $__rtti_base i32 (i32.const 304))
  (global $g6 i32 (i32.const 340))
  (export "memory" (memory 0))
  (export "__alloc" (func $~lib/rt/tlsf/__alloc))
  (export "__retain" (func $~lib/rt/pure/__retain))
  (export "__release" (func $~lib/rt/pure/__release))
  (export "__collect" (func $~lib/rt/pure/__collect))
  (export "__rtti_base" (global 5))
  (export "Int32Array_ID" (global 4))
  (export "sort" (func $src/assembly/sorter/sort))
  (elem $e0 (i32.const 1))
  (data $d0 (i32.const 16) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00")
  (data $d1 (i32.const 64) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00")
  (data $d2 (i32.const 128) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s\00")
  (data $d3 (i32.const 176) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00")
  (data $d4 (i32.const 240) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s\00")
  (data $d5 (i32.const 304) "\04\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00!\09\00\00\02\00\00\00"))
