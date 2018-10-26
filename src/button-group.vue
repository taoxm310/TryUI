<template>
  <div class="m-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-button-group',
  mounted(){
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`m-button-group 的子元素应该全是 m-button, 但是现在是 ${name}`)
      }
    }
  }
}
</script>
<style lang="scss">
.m-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .m-button {
    border-radius: 0;
    margin-left: -1px;
    position: relative;
    &:first-child {
      margin-left: 0;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      z-index: 2;
    }
  }
}
</style>

