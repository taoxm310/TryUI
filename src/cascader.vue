<template>
  <div class="m-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
        <m-cascader-item :items="source"></m-cascader-item>
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

</style>
