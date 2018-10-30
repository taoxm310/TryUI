const expect = chai.expect

import Vue from 'vue'
import Button from '../src/button.vue'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Button', () => {
  it('存在', () => {
    expect(Button).to.exist
  })

  it('可以设置 icon ', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'download'
      }
    }).$mount()

    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-download')
    vm.$destroy()
  })

  it('可以设置 loading ', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'download',
        loading: true
      }
    }).$mount()

    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
  })

  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'loading'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(window.getComputedStyle(icon).order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
  })

  it('设置 iconPosition 可以改变 order ', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'loading',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(window.getComputedStyle(icon).order).to.equal('2')
    vm.$el.remove()
    vm.$destroy()
  })

  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'download',
        loading: true
      }
    }).$mount()
    const callback = sinon.fake()
    vm.$on('click', callback)
    let button = vm.$el
    button.click()
    expect(callback).to.have.been.called
  })
})
