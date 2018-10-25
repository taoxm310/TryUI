<template>
  <button class="m-button" @click="$emit('click')">
    <m-icon v-if="loading" name="loading" class="spin"></m-icon>
    <m-icon v-if="icon && !loading" :name="icon"></m-icon>
    <slot></slot>
  </button>
</template>
<script>
import Icon from './icon'

export default {
  name: 'm-button',
  components: {
    'm-icon': Icon
  },
  props: ['icon', 'loading']
}
</script>
<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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
  .spin {
    animation: spin 1s infinite linear;
  }
}
</style>