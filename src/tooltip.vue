<template>
  <div class="m-tooltip" @click="show">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          // 为了防止tooltip的父元素有overflow hidden 把气泡覆盖，所以将气泡 append 在 body 上
          let { width, top,left, right} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
          this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
          let eventHandler = () => {
            this.visible = false
            document.removeEventListener('click',eventHandler)
          }
          document.addEventListener('click',eventHandler)
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .m-tooltip {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
      position: absolute;
      border: 1px solid grey;
      border-radius: 3px;
      box-shadow: 0 0 4px rgba(0, 0, 0, .5)
    }
</style>

