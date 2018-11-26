<template>
  <div class="m-collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'MCollpase',
  props: {
    //是否只显示一个面板
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addSelected', name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })

    this.eventBus.$on('update:removeSelected', name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  }
}
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.m-collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
