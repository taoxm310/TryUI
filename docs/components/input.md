---
title: Input
---

# Input

## 示例

### 基本使用

<ClientOnly>
<input-demo/>
</ClientOnly>

```js
<template>
  <div style="padding:30px 0">
    <m-input value="王" @change="inputChange"></m-input>
    <m-input v-model="message"></m-input>
  </div>
</template>
<script>
import MInput from 'MUI'
export default {
  components: {
		MInput
	}
	data() {
		return {
			message: 'hello world'
		}
	},
	methods: {
		inputChange() {
			console.log('input changed!')
		}
	}
}
```

## API

| 属性     | 说明       | 类型    | 默认值 |
| -------- | ---------- | ------- | ------ |
| value    | 输入框内容 | string  | -      |
| error    | 输入框报错 | string  | -      |
| disabled | 是否禁用   | boolean | false  |
| readonly | 是否只读   | boolean | false  |
