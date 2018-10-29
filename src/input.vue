<template>
  <div class="m-input__wrapper" :class="{error}">
    <input type="text" :value="value" class="m-input" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
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
</style>


