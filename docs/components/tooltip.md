---
title: Tooltip
---

# Tooltip

## 示例

### 基本使用

<ClientOnly>
<tooltip-demo-1/>
</ClientOnly>

```js
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
import MTooltip from 'MUI'
import MButton from 'MUI'
export default {
	components: {
		MTooltip,
		MButton
	}
}
</script>
```

### slot-scope 使用

可以在气泡中设置关闭

<ClientOnly>
<tooltip-demo-2/>
</ClientOnly>

```js
<template>
    <m-tooltip position="right">
      <template slot="content" slot-scope="{close}">
        <div>hello world</div>
        <m-button @click="close">close</m-button>
      </template>
      <m-button>open</m-button>
    </m-tooltip>
</template>

<script>
import MTooltip from 'MUI'
import MButton from 'MUI'
export default {
	components: {
		MTooltip,
		MButton
	}
}
</script>
```

## API

| 属性     | 说明     | 类型                          | 默认值 |
| -------- | -------- | ----------------------------- | ------ |
| position | 设置方位 | string: top,bottom,right,left | top    |
| trigger  | 设置触发 | string: click, hover          | click  |
