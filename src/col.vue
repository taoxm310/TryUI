<template>
  <div class="m-col" :class="classList" :style="style">
    <div style="height:100px; border:1px solid red;">
      <slot></slot>
    </div>
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
  created() {
    console.log('col created')
  },
  mounted() {
    console.log('col mounted')
  },
  computed: {
    classList() {
      let list = []
      ;[('span', 'offset')].forEach(prop => {
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
      console.log(result)

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


