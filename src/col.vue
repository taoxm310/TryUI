<template>
  <div class="m-col" :class="`m-col-${span}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-col',
  props: {
    span: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" scoped>
.m-col {
  height: 50px;
  background-color: grey;
  width: 50%;
  border: 1px solid red;
  $class-prefix: 'm-col-';
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>


