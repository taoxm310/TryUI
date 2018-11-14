<template>
  <div class="m-tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-box">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect()
      let { left: left2 } = this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - left2}px`
    })
  }
}
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
$blue: blue;
$border-color: #ddd;
.m-tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions-box {
    margin-left: auto;
    padding: 0 1em;
  }
}
</style>

