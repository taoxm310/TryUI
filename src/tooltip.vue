<template>
  <div class="m-tooltip" @click="onClick" ref="tooltip">
    <div class="content-wrapper" v-if="visible" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'MTooltip',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    placeContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {
        width,
        top,
        left,
        height
      } = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    open() {
      ;(this.visible = true),
        this.$nextTick(() => {
          this.placeContent()
          document.addEventListener('click', this.onClickDocument)
        })
    },
    close() {
      ;(this.visible = false),
        document.removeEventListener('click', this.onClickDocument)
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
      ) {
        return
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return
      }
      this.close()
    },
    onClick(event) {
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
$border-color: #333;
$border-radius: 4px;
.m-tooltip {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border-radius: 3px;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background-color: white;
  transform: translateY(-100%);
  margin-top: -10px;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &:after,
  &::before {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &:before {
    border-top-color: black;
    top: 100%;
  }
  &:after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>

