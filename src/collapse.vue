<template>
  <div class="m-collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MCollpase'
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
