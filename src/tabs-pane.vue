<template>
  <div class="m-tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MTabsPane',
  props: {
    name: {
      type: String | Number,
      required: true
    }
  }
}
</script>
<style lang="sass" scoped>

</style>

