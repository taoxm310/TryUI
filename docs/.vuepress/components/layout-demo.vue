<template>
<div style="padding:30px 0">
   <m-layout style="height: 100px">
      <m-sider class="test">sider</m-sider>
      <m-layout>
        <m-header class="test">header</m-header>
        <m-content class="test">content</m-content>
        <m-footer class="test">footer</m-footer>
      </m-layout>
    </m-layout>
  </div>
</template>

<script>
import MHeader from '../../../src/header.vue'
import MLayout from '../../../src/layout.vue'
import MContent from '../../../src/content.vue'
import MFooter from '../../../src/footer.vue'
import MSider from '../../../src/sider.vue'
export default {
  components: {
    MHeader,
    MLayout,
    MContent,
    MFooter,
    MSider
	}
}
</script>

<style lang="scss">
.test {
    background-color: #ddd;
    border: 1px solid #666;
    height: 100px;
  }

.m-sider {
  width:150px;
}

</style>