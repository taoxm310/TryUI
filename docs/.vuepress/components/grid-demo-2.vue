<template>
  <div style="padding:30px 0">
    <m-row class="grid-demo-1" gutter="20">
      <m-col >1</m-col>
      <m-col >2</m-col>
    </m-row>
  </div>
</template>

<script>
import MRow from '../../../src/row.vue'
import MCol from '../../../src/col.vue'

export default {
  components:{
    MRow,
    MCol
  }
}
</script>

<style lang="scss">
.grid-demo-1 {
  div {
     background-color: #ddd;
     height: 30px;
     line-height: 30px;
     text-align: center;
     border-radius: 10px;
  }
}
</style>
