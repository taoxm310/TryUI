<template>
  <svg class="m-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'
export default {
  name: 'm-icon',
  props: ['name']
}
</script>

<style lang="scss">
.m-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>


