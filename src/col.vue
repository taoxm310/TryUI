<template>
  <div class="m-col" :class="classList" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-col',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
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
      ;['span', 'offset'].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          list.push(
            prop !== 'span'
              ? `m-col-${prop}-${this[prop]}`
              : `m-col-${this[prop]}`
          )
        }
      })
      return list
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
  width: 50%;
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
}
</style>


