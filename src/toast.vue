<template>
  <div class="m-toast" ref="wrapper" :class="toastClass">
    <div class="message">
      <slot v-if="!enableHTML"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: 'MToast',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].includes(value)
      }
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHTML: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {
    this.updateStyle()
    this.startTimer()
  },
  computed: {
    toastClass() {
      return [`position-${this.position}`]
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`
      })
    },
    startTimer() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.m-toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  left: 50%;
  display: flex;
  color: white;
  align-items: center;
  background-color: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0; //initial value = 1
    cursor: pointer;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>

