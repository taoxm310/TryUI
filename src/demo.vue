<template>
  <div>
    <m-cascader :source="source"></m-cascader>
    <p>1111</p>
    <m-cascader :source="source" popover-height="200px"></m-cascader>
    <p>222</p>
    <m-collapse :selected.sync="selectedPanel" single>
      <m-collapse-panel title="标题1" name="1">内容1</m-collapse-panel>
      <m-collapse-panel title="标题2" name="2">内容2</m-collapse-panel>
      <m-collapse-panel title="标题3" name="3">内容3</m-collapse-panel>
    </m-collapse>
    {{ selectedPanel }}
    <div style="overflow: hidden; border: 1px solid green;padding: 5px;">
      <m-tooltip position="top" trigger="hover">
        <template slot="content">
          <div>
            tooltip content Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo, assumenda quam quibusdam ducimus ratione saepe asperiores quos, magni quod magnam tenetur tempore alias earum similique eaque reprehenderit iusto accusamus.
          </div>
        </template>
        <m-button>click me</m-button>
      </m-tooltip>
    </div>
    <m-tooltip position="bottom" trigger="hover">
      <template slot="content">tooltip content1
      </template>
      <m-button>click me1</m-button>
    </m-tooltip>
    <m-tooltip position="left">
      <template slot="content" slot-scope="{close}">
        <a href="http://baidu.com">baidu</a>
        <m-button @click="close">close</m-button>
      </template>
      <m-button>click me1</m-button>
    </m-tooltip>
    <m-tooltip position="right">
      <template slot="content">
        <div>
          <a href="http://baidu.com">baidu</a>
        </div>
      </template>
      <m-button>click me1</m-button>
    </m-tooltip>
    <m-tabs :selected.sync="selectedTab">
      <m-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <m-tabs-item name="text" disabled>
          <m-icon name="settings"></m-icon>文案</m-tabs-item>
        <m-tabs-item name="content">内容</m-tabs-item>
        <m-tabs-item name="title">标题</m-tabs-item>
      </m-tabs-head>
      <m-tabs-body>
        <m-tabs-pane name="text"> 请填写文案 </m-tabs-pane>
        <m-tabs-pane name="content"> 请填写内容 </m-tabs-pane>
        <m-tabs-pane name="title"> 请填写标题 </m-tabs-pane>
      </m-tabs-body>
    </m-tabs>
    <button @click="showToast1">show1</button>
    <button @click="showToast2">show2</button>
    <button @click="showToast3">show3</button>
    <m-layout style="height: 100px">
      <m-sider class="test">sider</m-sider>
      <m-layout>
        <m-header class="test">header</m-header>
        <m-content class="test">content</m-content>
        <m-footer class="test">footer</m-footer>
      </m-layout>
    </m-layout>
    <m-row gutter="20" justify="start">
      <m-col>1</m-col>
      <m-col>2</m-col>
    </m-row>
    <m-row gutter="20" justify="end">
      <m-col>1</m-col>
      <m-col>2</m-col>
      <m-col>3</m-col>
    </m-row>
    <m-row gutter="20">
      <m-col>1</m-col>
      <m-col>2</m-col>
      <m-col>3</m-col>
      <m-col>4</m-col>
    </m-row>
    <m-row gutter="20">
      <m-col span="2" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span:2}" :wide-pc="{span:1}">
        <div class="demo"></div>
      </m-col>
      <m-col span="2" :ipad="{span:16}" :narrow-pc="{span:20}" :pc="{span:22}" :wide-pc="{span:23}">
        <div class="demo"></div>
      </m-col>
    </m-row>
    <m-row gutter="20">
      <m-col span="2" offset="2">1</m-col>
      <m-col span="18" offset="2">2</m-col>
    </m-row>
    <div class="box">
      <m-input value="王" @change="inputChange"></m-input>
      <m-input v-model="message"></m-input>
      <p>{{ message }}</p>
      <button @click="message +=1">+1</button>
    </div>
    <div class="box">
      <m-button :loading="loading1" @click="loading1 = !loading1">按钮</m-button>
      <m-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮</m-button>
      <m-button icon="download" icon-position="right" :loading="loading3" @click="loading3 = !loading3">按钮</m-button>
      <m-button-group>
        <m-button icon="left">上一页</m-button>
        <m-button>更多</m-button>
        <m-button icon="right" icon-position="right">下一页</m-button>
      </m-button-group>
    </div>
    <div class="box"></div>
  </div>

</template>

<script>
export default {
	data() {
		return {
			loading1: false,
			loading2: true,
			loading3: true,
			message: 'hi',
			selectedTab: 'text',
			selectedPanel: ['1'],
			source: [
				{
					name: '浙江',
					children: [
						{
							name: '杭州',
							children: [{ name: '上城' }, { name: '下城' }, { name: '江干' }]
						},
						{
							name: '嘉兴',
							children: [{ name: '南湖' }, { name: '秀洲' }, { name: '嘉善' }]
						}
					]
				},
				{
					name: '福建',
					children: [
						{
							name: '福州',
							children: [{ name: '鼓楼' }, { name: '台江' }, { name: '仓山' }]
						},
						{
							name: '安徽',
							children: [
								{
									name: '合肥',
									children: [
										{
											name: '瑶海'
										},
										{
											name: '庐阳'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	},
	created() {
		this.$toast('文字', {
			position: 'middle',
			enableHTML: false,
			closeButton: {
				text: '已充值',
				callback() {
					console.log('他说他已经充值了')
				}
			},
			autoClose: false
		})
	},
	methods: {
		inputChange(e) {
			console.log(e)
		},
		showToast1() {
			this.$toast('message1', { autoClose: false })
		},
		showToast2() {
			this.$toast('message2', { position: 'middle' })
		},
		showToast3() {
			this.$toast('message3', { position: 'bottom' })
		},
		onSelect(data) {
			console.log('onSelect', data)
		}
	}
}
</script>
<style>
.box {
	margin: 20px;
}

.demo,
.test {
	background-color: #ddd;
	border: 1px solid #666;
	height: 100px;
}

img {
	max-width: 100%;
}

.m-sider {
	width: 150px;
}

#app {
	padding-top: 100px;
	padding-left: 100px;
	border: 1px solid grey;
}
</style>