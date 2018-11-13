<template>
  <div class="m-tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MTabsItem',
  props: {
    name: {
      type: String | Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="sass" scoped>

</style>

