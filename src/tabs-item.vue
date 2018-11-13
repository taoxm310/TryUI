<template>
  <div class="m-tabs-item" :class="classes" @click="onItemClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', name => {
      this.active = name === this.name
    })
  },
  methods: {
    onItemClick() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.m-tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  border: 1px solid grey;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    background-color: red;
  }
}
</style>

