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
  created() {
    console.log('row created')
  },
  mounted() {
    console.log('row mounted')
    console.log('children', this.$children)
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
      console.log(result)
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


