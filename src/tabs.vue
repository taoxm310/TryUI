<template>
  <div class="m-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'MTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn('tabs 的子组件tabs-head 和 tabs-body 不存在')
    }
    this.$children.forEach(vm => {
      if (vm.$options.name === 'MTabsHead') {
        vm.$children.forEach(childVm => {
          if (
            childVm.$options.name === 'MTabsItem' &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  }
}
</script>
<style lang="sass" scoped>

</style>

