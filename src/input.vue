<template>
  <div class="m-input__wrapper" :class="{error}">
    <input
      type="text"
      :value="value"
      class="m-input"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @input="$emit('input',$event.target.value)"
    >
    <template v-if="error">
      <Icon name="error" class="error-icon"></Icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name: 'm-input',
  components: {
    Icon
  },
  props: {
    value: {
      type: String
    },
    error: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.m-input__wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .error-icon {
    fill: $red;
  }
  .error-message {
    color: $red;
  }
}
</style>


