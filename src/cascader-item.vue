<template>
  <div class="m-cascader-item">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected=item" :key="item">
        {{ item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <m-cascader-item :items="rightItems">
      </m-cascader-item>
    </div>
  </div>
</template>

<script>
export default {
	name: 'MCascaderItem',
	props: {
		items: {
			type: Array
		}
	},
	data() {
		return {
			leftSelected: null
		}
	}
}
</script>

<style lang="scss" scoped>
.m-cascader-item {
	border: 1px solid red;
	margin: 10px;
}
</style>

