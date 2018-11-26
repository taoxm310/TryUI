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
      default: true
    },
    selected: {
      type: String
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:selected', name => {
      this.$emit('update:selected', name)
    })
  },
  provide() {
    if (this.single) {
      return {
        eventBus: this.eventBus
      }
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
