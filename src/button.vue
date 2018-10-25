<template>
  <button class="m-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]:true}">
    <m-icon v-if="loading" name="loading" class="spin"></m-icon>
    <m-icon v-if="icon && !loading" :name="icon"></m-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'

export default {
  name: 'm-button',
  components: {
    'm-icon': Icon
  },
  props: {
    icon: {},
    loading: {},
    iconPosition: { type: String, default: 'left' } //iconPosition 在文字左边还是右边
  }
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
  vertical-align: middle;
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .m-icon {
    margin-right: 0.3em;
    order: 1;
  }
  > .content {
    order: 2;
  }
  .spin {
    animation: spin 1s infinite linear;
  }
  &.icon-right {
    > .m-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>