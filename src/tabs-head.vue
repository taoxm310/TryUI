<template>
  <div class="m-tabs-head">
    <slot></slot>
    <div class="actions-box">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MTabsHead',
  inject: ['eventBus']
}
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
.m-tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  & > .actions-box {
    margin-left: auto;
  }
}
</style>

