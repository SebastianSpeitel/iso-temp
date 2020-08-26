(module
  (type $t0 (func (param i32 i32) (result i32)))
  (type $t1 (func (param i32)))
  (type $t2 (func (param i32 i32)))
  (type $t3 (func (param i32 i32 i32)))
  (type $t4 (func (param i32) (result i32)))
  (type $t5 (func))
  (type $t6 (func (param i32 i32 i32 i32)))
  (type $t7 (func (result i32)))
  (type $t8 (func (param i32 i32 i32) (result i32)))
  (import "env" "abort" (func $env.abort (type $t6)))
  (func $f1 (type $t2) (param $p0 i32) (param $p1 i32)
    (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32)
    local.get $p1
    i32.load
    i32.const -4
    i32.and
    local.tee $l2
    i32.const 256
    i32.lt_u
    if $I0
      local.get $l2
      i32.const 4
      i32.shr_u
      local.set $l3
    else
      local.get $l2
      i32.const 31
      local.get $l2
      i32.clz
      i32.sub
      local.tee $l2
      i32.const 4
      i32.sub
      i32.shr_u
      i32.const 16
      i32.xor
      local.set $l3
      local.get $l2
      i32.const 7
      i32.sub
      local.set $l4
    end
    local.get $p1
    i32.load offset=20
    local.set $l2
    local.get $p1
    i32.load offset=16
    local.tee $l5
    if $I1
      local.get $l5
      local.get $l2
      i32.store offset=20
    end
    local.get $l2
    if $I2
      local.get $l2
      local.get $l5
      i32.store offset=16
    end
    local.get $p1
    local.get $p0
    local.get $l3
    local.get $l4
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    i32.eq
    if $I3
      local.get $p0
      local.get $l3
      local.get $l4
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $l2
      i32.store offset=96
      local.get $l2
      i32.eqz
      if $I4
        local.get $p0
        local.get $l4
        i32.const 2
        i32.shl
        i32.add
        local.tee $l2
        i32.load offset=4
        i32.const 1
        local.get $l3
        i32.shl
        i32.const -1
        i32.xor
        i32.and
        local.set $p1
        local.get $l2
        local.get $p1
        i32.store offset=4
        local.get $p1
        i32.eqz
        if $I5
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
  (func $f2 (type $t2) (param $p0 i32) (param $p1 i32)
    (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32) (local $l7 i32) (local $l8 i32)
    local.get $p1
    i32.load
    local.set $l4
    local.get $p1
    i32.const 16
    i32.add
    local.get $p1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $l5
    i32.load
    local.tee $l2
    i32.const 1
    i32.and
    if $I0
      local.get $l4
      i32.const -4
      i32.and
      i32.const 16
      i32.add
      local.get $l2
      i32.const -4
      i32.and
      i32.add
      local.tee $l3
      i32.const 1073741808
      i32.lt_u
      if $I1
        block $B2 (result i32)
          local.get $p0
          local.get $l5
          call $f1
          local.get $p1
          local.get $l3
          local.get $l4
          i32.const 3
          i32.and
          i32.or
          local.tee $l4
          i32.store
          local.get $p1
          i32.const 16
          i32.add
          local.get $p1
          i32.load
          i32.const -4
          i32.and
          i32.add
          local.tee $l5
          i32.load
        end
        local.set $l2
      end
    end
    local.get $l4
    i32.const 2
    i32.and
    if $I3
      local.get $p1
      i32.const 4
      i32.sub
      i32.load
      local.tee $l3
      i32.load
      local.tee $l7
      i32.const -4
      i32.and
      i32.const 16
      i32.add
      local.get $l4
      i32.const -4
      i32.and
      i32.add
      local.tee $l8
      i32.const 1073741808
      i32.lt_u
      if $I4
        block $B5 (result i32)
          local.get $p0
          local.get $l3
          call $f1
          local.get $l3
          local.get $l8
          local.get $l7
          i32.const 3
          i32.and
          i32.or
          local.tee $l4
          i32.store
          local.get $l3
        end
        local.set $p1
      end
    end
    local.get $l5
    local.get $l2
    i32.const 2
    i32.or
    i32.store
    local.get $l5
    i32.const 4
    i32.sub
    local.get $p1
    i32.store
    local.get $l4
    i32.const -4
    i32.and
    local.tee $l3
    i32.const 256
    i32.lt_u
    if $I6
      local.get $l3
      i32.const 4
      i32.shr_u
      local.set $l3
    else
      local.get $l3
      i32.const 31
      local.get $l3
      i32.clz
      i32.sub
      local.tee $l4
      i32.const 4
      i32.sub
      i32.shr_u
      i32.const 16
      i32.xor
      local.set $l3
      local.get $l4
      i32.const 7
      i32.sub
      local.set $l6
    end
    local.get $p0
    local.get $l3
    local.get $l6
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    local.set $l4
    local.get $p1
    i32.const 0
    i32.store offset=16
    local.get $p1
    local.get $l4
    i32.store offset=20
    local.get $l4
    if $I7
      local.get $l4
      local.get $p1
      i32.store offset=16
    end
    local.get $p0
    local.get $l3
    local.get $l6
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    local.get $p1
    i32.store offset=96
    local.get $p0
    local.get $p0
    i32.load
    i32.const 1
    local.get $l6
    i32.shl
    i32.or
    i32.store
    local.get $p0
    local.get $l6
    i32.const 2
    i32.shl
    i32.add
    local.tee $p0
    local.get $p0
    i32.load offset=4
    i32.const 1
    local.get $l3
    i32.shl
    i32.or
    i32.store offset=4)
  (func $f3 (type $t3) (param $p0 i32) (param $p1 i32) (param $p2 i32)
    (local $l3 i32)
    local.get $p2
    block $B0 (result i32)
      local.get $p0
      i32.load offset=1568
      local.tee $p2
      if $I1
        local.get $p2
        local.get $p1
        i32.const 16
        i32.sub
        i32.eq
        if $I2
          block $B3 (result i32)
            local.get $p2
            i32.load
            local.set $l3
            local.get $p1
            i32.const 16
            i32.sub
          end
          local.set $p1
        end
      end
      local.get $p1
    end
    i32.sub
    local.tee $p2
    i32.const 48
    i32.lt_u
    if $I4
      return
    end
    local.get $p1
    local.get $l3
    i32.const 2
    i32.and
    local.get $p2
    i32.const 32
    i32.sub
    i32.const 1
    i32.or
    i32.or
    i32.store
    local.get $p1
    i32.const 0
    i32.store offset=16
    local.get $p1
    i32.const 0
    i32.store offset=20
    local.get $p1
    local.get $p2
    i32.add
    i32.const 16
    i32.sub
    local.tee $p2
    i32.const 2
    i32.store
    local.get $p0
    local.get $p2
    i32.store offset=1568
    local.get $p0
    local.get $p1
    call $f2)
  (func $f4 (type $t7) (result i32)
    (local $l0 i32) (local $l1 i32) (local $l2 i32)
    global.get $g0
    local.tee $l2
    i32.eqz
    if $I0
      i32.const 1
      memory.size
      local.tee $l0
      i32.gt_s
      if $I1 (result i32)
        i32.const 1
        local.get $l0
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
      i32.const 1312
      local.set $l2
      i32.const 1312
      i32.const 0
      i32.store
      i32.const 2880
      i32.const 0
      i32.store
      loop $L3
        local.get $l1
        i32.const 23
        i32.lt_u
        if $I4
          local.get $l1
          i32.const 2
          i32.shl
          i32.const 1312
          i32.add
          i32.const 0
          i32.store offset=4
          i32.const 0
          local.set $l0
          loop $L5
            local.get $l0
            i32.const 16
            i32.lt_u
            if $I6
              local.get $l0
              local.get $l1
              i32.const 4
              i32.shl
              i32.add
              i32.const 2
              i32.shl
              i32.const 1312
              i32.add
              i32.const 0
              i32.store offset=96
              local.get $l0
              i32.const 1
              i32.add
              local.set $l0
              br $L5
            end
          end
          local.get $l1
          i32.const 1
          i32.add
          local.set $l1
          br $L3
        end
      end
      i32.const 1312
      i32.const 2896
      memory.size
      i32.const 16
      i32.shl
      call $f3
      i32.const 1312
      global.set $g0
    end
    local.get $l2)
  (func $f5 (type $t0) (param $p0 i32) (param $p1 i32) (result i32)
    (local $l2 i32)
    local.get $p1
    i32.const 256
    i32.lt_u
    if $I0
      local.get $p1
      i32.const 4
      i32.shr_u
      local.set $p1
    else
      block $B1 (result i32)
        local.get $p1
        i32.const 536870904
        i32.lt_u
        if $I2
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
          local.set $p1
        end
        local.get $p1
      end
      i32.const 31
      local.get $p1
      i32.clz
      i32.sub
      local.tee $l2
      i32.const 4
      i32.sub
      i32.shr_u
      i32.const 16
      i32.xor
      local.set $p1
      local.get $l2
      i32.const 7
      i32.sub
      local.set $l2
    end
    local.get $p0
    local.get $l2
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    i32.const -1
    local.get $p1
    i32.shl
    i32.and
    local.tee $p1
    if $I3 (result i32)
      local.get $p0
      local.get $p1
      i32.ctz
      local.get $l2
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.add
      i32.load offset=96
    else
      local.get $p0
      i32.load
      i32.const -1
      local.get $l2
      i32.const 1
      i32.add
      i32.shl
      i32.and
      local.tee $p1
      if $I4 (result i32)
        local.get $p0
        local.get $p1
        i32.ctz
        local.tee $p1
        i32.const 4
        i32.shl
        local.get $p0
        local.get $p1
        i32.const 2
        i32.shl
        i32.add
        i32.load offset=4
        i32.ctz
        i32.add
        i32.const 2
        i32.shl
        i32.add
        i32.load offset=96
      else
        i32.const 0
      end
    end)
  (func $f6 (type $t8) (param $p0 i32) (param $p1 i32) (param $p2 i32) (result i32)
    (local $l3 i32) (local $l4 i32) (local $l5 i32)
    local.get $p1
    local.tee $l4
    i32.const 1073741808
    i32.ge_u
    if $I0
      i32.const 1040
      i32.const 1104
      i32.const 461
      i32.const 30
      call $env.abort
      unreachable
    end
    block $B1 (result i32)
      local.get $p0
      local.get $l4
      i32.const 15
      i32.add
      i32.const -16
      i32.and
      local.tee $p1
      i32.const 16
      local.get $p1
      i32.const 16
      i32.gt_u
      select
      local.tee $p1
      call $f5
      local.tee $l3
      i32.eqz
      if $I2
        local.get $p0
        local.get $p1
        call $f5
        local.tee $l3
        i32.eqz
        if $I3
          block $B4 (result i32)
            local.get $p1
            i32.const 536870904
            i32.lt_u
            if $I5 (result i32)
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
            else
              local.get $p1
            end
            i32.const 16
            memory.size
            local.tee $l3
            i32.const 16
            i32.shl
            i32.const 16
            i32.sub
            local.get $p0
            i32.load offset=1568
            i32.ne
            i32.shl
            i32.add
            i32.const 65535
            i32.add
            i32.const -65536
            i32.and
            i32.const 16
            i32.shr_u
            local.set $l5
            local.get $l3
            local.get $l5
            local.get $l3
            local.get $l5
            i32.gt_s
            select
            memory.grow
            i32.const 0
            i32.lt_s
            if $I6
              local.get $l5
              memory.grow
              i32.const 0
              i32.lt_s
              if $I7
                unreachable
              end
            end
            local.get $p0
            local.get $l3
            i32.const 16
            i32.shl
            memory.size
            i32.const 16
            i32.shl
            call $f3
            local.get $p0
            local.get $p1
            call $f5
          end
          local.set $l3
        end
      end
      local.get $l3
    end
    i32.load
    drop
    local.get $l3
    i32.const 0
    i32.store offset=4
    local.get $l3
    local.get $p2
    i32.store offset=8
    local.get $l3
    local.get $l4
    i32.store offset=12
    local.get $p0
    local.get $l3
    call $f1
    local.get $l3
    i32.load
    local.tee $p2
    i32.const -4
    i32.and
    local.get $p1
    i32.sub
    local.tee $l4
    i32.const 32
    i32.ge_u
    if $I8
      local.get $l3
      local.get $p1
      local.get $p2
      i32.const 2
      i32.and
      i32.or
      i32.store
      local.get $p1
      local.get $l3
      i32.const 16
      i32.add
      i32.add
      local.tee $p1
      local.get $l4
      i32.const 16
      i32.sub
      i32.const 1
      i32.or
      i32.store
      local.get $p0
      local.get $p1
      call $f2
    else
      local.get $l3
      local.get $p2
      i32.const -2
      i32.and
      i32.store
      local.get $l3
      i32.const 16
      i32.add
      local.tee $p0
      local.get $l3
      i32.load
      i32.const -4
      i32.and
      i32.add
      local.get $p0
      local.get $l3
      i32.load
      i32.const -4
      i32.and
      i32.add
      i32.load
      i32.const -3
      i32.and
      i32.store
    end
    local.get $l3)
  (func $__alloc (type $t0) (param $p0 i32) (param $p1 i32) (result i32)
    call $f4
    local.get $p0
    local.get $p1
    call $f6
    i32.const 16
    i32.add)
  (func $__retain (type $t4) (param $p0 i32) (result i32)
    (local $l1 i32)
    local.get $p0
    i32.const 1300
    i32.gt_u
    if $I0
      local.get $p0
      i32.const 16
      i32.sub
      local.tee $l1
      local.get $l1
      i32.load offset=4
      i32.const 1
      i32.add
      i32.store offset=4
      local.get $l1
      i32.load
      drop
    end
    local.get $p0)
  (func $__release (type $t1) (param $p0 i32)
    local.get $p0
    i32.const 1300
    i32.gt_u
    if $I0
      local.get $p0
      i32.const 16
      i32.sub
      call $f14
    end)
  (func $f10 (type $t0) (param $p0 i32) (param $p1 i32) (result i32)
    local.get $p1
    local.get $p0
    i32.load offset=8
    i32.const 2
    i32.shr_u
    i32.ge_u
    if $I0
      i32.const 1152
      i32.const 1216
      i32.const 664
      i32.const 64
      call $env.abort
      unreachable
    end
    local.get $p0
    i32.load offset=4
    local.get $p1
    i32.const 2
    i32.shl
    i32.add
    i32.load)
  (func $f11 (type $t3) (param $p0 i32) (param $p1 i32) (param $p2 i32)
    local.get $p1
    local.get $p0
    i32.load offset=8
    i32.const 2
    i32.shr_u
    i32.ge_u
    if $I0
      i32.const 1152
      i32.const 1216
      i32.const 675
      i32.const 64
      call $env.abort
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
  (func $sort (type $t4) (param $p0 i32) (result i32)
    (local $l1 i32) (local $l2 i32) (local $l3 i32) (local $l4 i32) (local $l5 i32) (local $l6 i32)
    local.get $p0
    i32.const 1300
    i32.gt_u
    if $I0
      local.get $p0
      i32.const 16
      i32.sub
      local.tee $l1
      local.get $l1
      i32.load offset=4
      i32.const 1
      i32.add
      i32.store offset=4
      local.get $l1
      i32.load
      drop
    end
    local.get $p0
    local.set $l1
    loop $L1
      local.get $l3
      local.get $l1
      i32.load offset=8
      i32.const 2
      i32.shr_u
      i32.lt_s
      if $I2
        local.get $l3
        local.tee $p0
        i32.const 7
        i32.add
        local.set $l2
        loop $L3
          local.get $l2
          local.get $l1
          i32.load offset=8
          i32.const 2
          i32.shr_u
          i32.lt_s
          if $I4
            block $B5
              local.get $l1
              local.get $l2
              call $f10
              local.get $l1
              local.get $p0
              i32.const 1
              i32.add
              call $f10
              i32.ge_s
              br_if $B5
              local.get $l1
              local.get $l2
              i32.const 2
              i32.add
              call $f10
              local.get $l1
              local.get $p0
              i32.const 3
              i32.add
              call $f10
              i32.ge_s
              br_if $B5
              local.get $l1
              local.get $l2
              i32.const 4
              i32.add
              call $f10
              local.get $l1
              local.get $p0
              i32.const 5
              i32.add
              call $f10
              i32.ge_s
              br_if $B5
              local.get $l2
              local.set $p0
            end
            local.get $l2
            i32.const 7
            i32.add
            local.set $l2
            br $L3
          end
        end
        i32.const 0
        local.set $l2
        loop $L6
          local.get $l2
          i32.const 255
          i32.and
          i32.const 7
          i32.lt_u
          if $I7
            local.get $l3
            local.get $l2
            i32.const 255
            i32.and
            local.tee $l4
            i32.add
            local.set $l6
            local.get $p0
            local.get $l4
            i32.add
            local.set $l4
            local.get $l1
            i32.const 1300
            i32.gt_u
            if $I8
              local.get $l1
              i32.const 16
              i32.sub
              local.tee $l5
              local.get $l5
              i32.load offset=4
              i32.const 1
              i32.add
              i32.store offset=4
              local.get $l5
              i32.load
              drop
            end
            local.get $l1
            local.get $l4
            call $f10
            local.set $l5
            local.get $l1
            local.get $l4
            local.get $l1
            local.get $l6
            call $f10
            call $f11
            local.get $l1
            local.get $l6
            local.get $l5
            call $f11
            local.get $l1
            i32.const 1300
            i32.gt_u
            if $I9
              local.get $l1
              i32.const 16
              i32.sub
              call $f14
            end
            local.get $l2
            i32.const 1
            i32.add
            local.set $l2
            br $L6
          end
        end
        local.get $l3
        i32.const 7
        i32.add
        local.set $l3
        br $L1
      end
    end
    local.get $l1)
  (func $__collect (type $t5)
    nop)
  (func $f14 (type $t1) (param $p0 i32)
    (local $l1 i32) (local $l2 i32)
    local.get $p0
    i32.load
    drop
    local.get $p0
    i32.load offset=4
    local.tee $l1
    i32.const 268435455
    i32.and
    local.tee $l2
    i32.const 1
    i32.eq
    if $I0
      block $B1
        block $B2
          block $B3
            local.get $p0
            i32.load offset=8
            br_table $B1 $B1 $B3 $B3 $B2
          end
          local.get $p0
          i32.load offset=16
          local.tee $l1
          if $I4
            local.get $l1
            local.tee $l2
            i32.const 1300
            i32.ge_u
            if $I5
              local.get $l2
              i32.const 16
              i32.sub
              call $f14
            end
          end
          br $B1
        end
        unreachable
      end
      local.get $p0
      local.get $p0
      i32.load
      i32.const 1
      i32.or
      i32.store
      global.get $g0
      local.get $p0
      call $f2
    else
      local.get $p0
      local.get $l2
      i32.const 1
      i32.sub
      local.get $l1
      i32.const -268435456
      i32.and
      i32.or
      i32.store offset=4
    end)
  (memory $memory 1)
  (global $g0 (mut i32) (i32.const 0))
  (global $Int32Array_ID i32 (i32.const 3))
  (global $__rtti_base i32 (i32.const 1264))
  (export "memory" (memory 0))
  (export "__alloc" (func $__alloc))
  (export "__retain" (func $__retain))
  (export "__release" (func $__release))
  (export "__collect" (func $__collect))
  (export "__rtti_base" (global 2))
  (export "Int32Array_ID" (global 1))
  (export "sort" (func $sort))
  (data $d0 (i32.const 1024) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
  (data $d1 (i32.const 1088) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
  (data $d2 (i32.const 1136) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
  (data $d3 (i32.const 1200) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
  (data $d4 (i32.const 1264) "\04\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00!\09\00\00\02"))
