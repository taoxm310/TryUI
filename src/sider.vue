<template>
  <transition name="slide">
    <div class="m-sider" v-if="visible">
      <slot></slot>
      <button @click="visible=!visible">close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MSider',
  data() {
    return {
      visible: true
    }
  }
}
</script>

<style lang="scss" scoped>
.m-sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
  margin-left: -150px;
}
</style>

