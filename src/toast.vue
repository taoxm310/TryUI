<template>
  <div class="m-toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MToast'
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.m-toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: white;
  align-items: center;
  background-color: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>

