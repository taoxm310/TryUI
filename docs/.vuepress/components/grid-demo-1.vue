<template>
  <div style="padding:30px 0">
    <m-row class="grid-demo-1">
      <m-col span="2">2</m-col>
      <m-col span="4">4</m-col>
      <m-col span="10">10</m-col>
      <m-col span="8">8</m-col>
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
