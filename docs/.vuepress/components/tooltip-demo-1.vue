<template>
  <div style="padding:30px 0">
    <m-tooltip position="left">
      <template slot="content">
        <div>hello world</div>
      </template>
      <m-button>click me</m-button>
    </m-tooltip>
    <m-tooltip>
      <template slot="content">
        <div>hello world</div>
      </template>
      <m-button>click me</m-button>
    </m-tooltip>
    <m-tooltip trigger="hover" position="right">
      <template slot="content">
        <div>hello world</div>
      </template>
      <m-button>click me</m-button>
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