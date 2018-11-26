<template>
  <div class="m-tooltip" @click="onClick" ref="tooltip">
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
    placeContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {width, top,left,height} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    open(){
      this.visible = true,
      this.$nextTick(() => {
        this.placeContent()
        document.addEventListener('click',this.onClickDocument)
      })
    },
    close() {
      this.visible = false,
      document.removeEventListener('click', this.onClickDocument)
    },
    onClickDocument(e){
      if (this.$refs.tooltip && this.$refs.tooltip === e.target || this.$refs.tooltip.contains(e.target) ) {
        return
      }
      this.close()
    },
    onClick(event){
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
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

