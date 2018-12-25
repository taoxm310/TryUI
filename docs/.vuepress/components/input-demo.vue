<template>
  <div style="padding:30px 0">
    <m-input value="王" @change="inputChange"></m-input>
    <m-input v-model="message"></m-input>
  </div>
</template>
<script>
import MInput from '../../../src/input.vue'
export default {
	data() {
		return {
			message: 'hello world'
		}
	},
	methods: {
		inputChange() {
			console.log('input changed!')
		}
	},
	components: {
		MInput
	}
}
</script>