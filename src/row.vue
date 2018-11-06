<template>
  <div class="m-row" :class="classList" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-row',
  props: {
    gutter: {
      type: [String, Number]
    },
    justify: {
      type: [String],
      validator(value) {
        return ['start', 'end', 'space-around', 'space-between'].includes(value)
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
  computed: {
    classList() {
      let { justify } = this
      return [justify && `justify-${justify}`]
    },
    style() {
      const result = {}
      if (this.gutter) {
        result.marginLeft = `-${this.gutter / 2}px`
        result.marginRight = result.marginLeft
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.m-row {
  display: flex;
  flex-wrap: wrap;
  &.justify-start {
    justify-content: flex-start;
  }
  &.justify-end {
    justify-content: flex-end;
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-space-bettwen {
    justify-content: space-bettwen;
  }
  &.justify-space-around {
    justify-content: space-around;
  }
}
</style>


