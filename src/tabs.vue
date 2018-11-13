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
  created() {
    this.eventBus.$on('update:selected', name => {
      this.selected = name
    })
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>
<style lang="sass" scoped>

</style>

