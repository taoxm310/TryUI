<template>
  <button class="m-button" @click="$emit('click',$event)" :class="{[`icon-${iconPosition}`]:true}">
    <m-icon class="icon loading" v-if="loading" name="loading"></m-icon>
    <m-icon class="icon" v-if="icon && !loading" :name="icon"></m-icon>
    <div class="m-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";

export default {
  name: "m-button",
  components: {
    "m-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: value => {
        return value === "left" || value === "right";
      }
    } //iconPosition 在文字左边还是右边
  }
};
</script>
<style lang="scss" scoped>
@import '_var.scss';
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
  > .icon {
    margin-right: 0.1em;
    order: 1;
  }
  > .m-button-content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .m-button-content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>