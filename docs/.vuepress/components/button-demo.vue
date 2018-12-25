<template>
  <div style="padding:30px 0">
    <m-button>默认按钮</m-button>
    <m-button icon="settings">按钮</m-button>
    <m-button icon="settings" iconPosition="right">按钮</m-button>
    <m-button icon="download" loading>按钮</m-button>
  </div>
</template>
<script>
import MButton from '../../../src/button.vue'
export default {
	components: {
		MButton
	},
	data() {
		return {
			content: `
        <m-button>默认按钮</m-button>
      `
		}
	}
}
</script>
