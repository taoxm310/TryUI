<template>
  <div class="m-tooltip" @click="show">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MTooltip',
  data(){
    return {
      visible:false
    }
  },
  methods:{
    show (){
      this.visible = !this.visible
    }
  }
}
</script>
<style lang="scss" scoped>
  .m-tooltip {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid grey;
      border-radius: 3px;
      box-shadow: 0 0 4px rgba(0, 0, 0, .5)
    }
  }
</style>

