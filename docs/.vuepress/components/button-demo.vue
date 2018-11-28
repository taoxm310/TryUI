<template>
  <div>
    <m-button>默认按钮</m-button>
  </div>
</template>
<script>
import MButton from "../../../src/button.vue";
export default {
  components: {
    MButton
  },
  data() {
    return {
      content: `
        <m-button>默认按钮</m-button>
      `
    };
  }
};
</script>
