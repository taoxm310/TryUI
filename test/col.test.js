const expect = chai.expect

import Vue from 'vue/dist/vue.esm'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.exist
  })
  it('接收 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '1'
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('m-col-1')).to.be.true
    div.remove()
    vm.$destroy
  })
  it('接收 offset 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: '2'
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('offset-2')).to.be.true
    div.remove()
    vm.$destroy
  })
  it('接收 pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: { span: 2, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('m-col-pc-2')).to.be.true
    expect(element.classList.contains('offset-pc-2')).to.be.true
    div.remove()
    vm.$destroy
  })
  it('接收 ipad 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: { span: 2, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('m-col-ipad-2')).to.be.true
    expect(element.classList.contains('offset-ipad-2')).to.be.true
    div.remove()
    vm.$destroy
  })
  it('接收 narrow-pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: { span: 2, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('m-col-narrow-pc-2')).to.be.true
    expect(element.classList.contains('offset-narrow-pc-2')).to.be.true
    div.remove()
    vm.$destroy
  })
  it('接收 wide-pc 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc: { span: 2, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('m-col-wide-pc-2')).to.be.true
    expect(element.classList.contains('offset-wide-pc-2')).to.be.true
    div.remove()
    vm.$destroy
  })
})
