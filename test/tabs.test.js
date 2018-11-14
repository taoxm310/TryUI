const expect = chai.expect

import Vue from 'vue/dist/vue.esm'
import Tabs from '../src/tabs.vue'
import TabsPane from '../src/tabs-pane.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsItem from '../src/tabs-item.vue'

Vue.component('m-tabs', Tabs)
Vue.component('m-tabs-pane', TabsPane)
Vue.component('m-tabs-body', TabsBody)
Vue.component('m-tabs-head', TabsHead)
Vue.component('m-tabs-item', TabsItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('接收 selected 属性', done => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <m-tabs selected="content">
        <m-tabs-head>
          <m-tabs-item name="text" disabled>文案</m-tabs-item>
          <m-tabs-item name="content">内容</m-tabs-item>
          <m-tabs-item name="title">标题</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="text"> 请填写文案 </m-tabs-pane>
          <m-tabs-pane name="content"> 请填写内容 </m-tabs-pane>
          <m-tabs-pane name="title"> 请填写标题 </m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let currentTab = vm.$el.querySelector(`.m-tabs-item[data-name="content"]`)
      expect(currentTab.classList.contains('active')).to.be.true
      done()
    })
  })
})
