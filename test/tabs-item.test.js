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

describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'test'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.equal('test')
  })

  it('接收 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'test',
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('tabs-click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
