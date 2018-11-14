<template>
  <div class="m-tabs-item" :class="classes" @click="onItemClick" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MTabsItem',
  inject: {
    eventBus: {
      from: 'eventBus',
      default: null
    }
  },
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
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', name => {
        this.active = name === this.name
      })
    }
  },
  methods: {
    onItemClick() {
      if (!this.disabled) {
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('tab-click', this) // 标签被点击时候触发事件
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: #bbb;
.m-tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>

