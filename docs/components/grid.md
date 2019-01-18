---
title: Grid
---

# Grid

## 示例

### 基本使用
<ClientOnly>
<grid-demo-1/>
</ClientOnly>

```js
<template>
  <m-row class="grid-demo-1">
    <m-col span="2">1</m-col>
    <m-col span="22">2</m-col>
  </m-row>
</template>
<style lang="scss">
.grid-demo-1 {
  div {
     background-color: #ddd;
     height: 30px;
     line-height: 30px;
     text-align: center;
     border-radius: 10px;
  }
}
</style>
```

## API

| 属性   | 说明           | 类型          | 默认值 |
| ------ | -------------- | ------------- | ------ |
| gutter | 栅格间隔       | number,string | 0      |
| span   | 栅格占据的列数 | number,string | 24     |
