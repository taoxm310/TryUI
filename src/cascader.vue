<template>
  <div class="m-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
        <m-cascader-item
          :items="source"
          class="popover"
          :height="popoverHeight"
        ></m-cascader-item>
    </div>
  </div>
</template>

<script>
import MCascaderItem from './cascader-item.vue'
export default {
  name:'MCascader',
  components:{
    MCascaderItem
  },
  props:{
    source:{
      type:Array
    },
    popoverHeight:{
      type:String
    }
  },
  data(){
    return {
      popoverVisible:false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '_var.scss';
.m-cascader {
  position:relative;
  .trigger {
    border: 1px solid red;
    height: 32px;
    width:100px;
  }
  .popover-wrapper {
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 0;
    background:white;
    @extend .box-shadow;
  }
}
</style>
