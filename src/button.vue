<template>
  <button class="m-button">
    <m-icon v-if="icon" :name="icon"></m-icon>
    <slot></slot>
  </button>
</template>
<script>
import Icon from './icon'

export default {
  name: 'm-button',
  components:{
    'm-icon':Icon
  },
  props:['icon']
}
</script>
<style lang="scss">
.m-button {
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>