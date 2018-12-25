<template>
	<div style="padding:30px 0">
		<m-input value="王" @change="inputChange"></m-input>
		<m-input value="周" readonly></m-input>
		<m-input value="禁用" disabled></m-input>
		<div style="padding-top:30px">
			<m-input v-model="message" error="this is an error"></m-input>
		</div>
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