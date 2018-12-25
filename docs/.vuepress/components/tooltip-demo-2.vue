<template>
  <div style="padding:30px 0">
    <m-tooltip position="right">
      <template slot="content" slot-scope="{close}">
        <div>hello world</div>
        <m-button @click="close">close</m-button>
      </template>
      <m-button>open</m-button>
    </m-tooltip>
  </div>
</template>

<script>
import MTooltip from '../../../src/tooltip.vue'
import MButton from '../../../src/button.vue'
export default {
	components: {
		MTooltip,
		MButton
	}
}
</script>