<template>
  <div class="m-col" :class="classList" :style="style">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'm-col',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },

    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    classList() {
      let list = []
      let { ipad, narrowPc, pc, widePc } = this
      ;['span', 'offset'].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          list.push(
            prop !== 'span'
              ? `m-col-${prop}-${this[prop]}`
              : `m-col-${this[prop]}`
          )
        }
      })
      return [
        ...list,
        ipad && [`m-col-ipad-${ipad.span}`],
        narrowPc && [`m-col-narrow-pc-${narrowPc.span}`],
        pc && [`m-col-pc-${pc.span}`],
        widePc && [`m-col-wide-pc${widePc.span}`]
      ]
    },
    style() {
      let result = {}
      if (this.gutter) {
        result.paddingLeft = `${this.gutter / 2}px`
        result.paddingRight = result.paddingLeft
      }

      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.m-col {
  $class-prefix: 'm-col-';
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: 'm-col-offset-';
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }

  @media (min-width: 577px) {
    $class-prefix: 'm-col-ipad-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: 'offset-ipad-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: 'm-col-narrow-pc-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: 'offset-narrow-pc-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: 'm-col-pc-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: 'offset-pc-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: 'm-col-pc-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: 'offset-pc-';
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>


