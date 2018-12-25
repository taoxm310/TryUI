---
title: Button
---

# Button

按钮操作

## 示例

### 基本使用

<ClientOnly>
<button-demo/>
</ClientOnly>

```js
<template>
    <m-button>默认按钮</m-button>
    <m-button icon="settings">按钮</m-button>
    <m-button icon="settings" iconPosition="right">按钮</m-button>
    <m-button icon="download" loading>按钮</m-button>
</template>
<script>
import MButton from 'MUI'
export default {
	components: {
		MButton
	}
}
</script>
```

## API

| 属性         | 说明             | 类型               | 默认值 |
| ------------ | ---------------- | ------------------ | ------ |
| loading      | 设置按钮载入状态 | boolean            | false  |
| icon         | 设置图标         | string             | -      |
| iconPosition | 设置图标位置     | string: left,right | left   |
