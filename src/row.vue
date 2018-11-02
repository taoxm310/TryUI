<template>
  <div class="m-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-row',
  props: {
    gutter: {
      type: [String, Number]
    }
  },

  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
  computed: {
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
}
</style>


