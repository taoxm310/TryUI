const expect = chai.expect

import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Row', () => {
  it('存在', () => {
    expect(Row).to.exist
  })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        justify: 'start'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-start')
    div.remove()
    vm.$destroy
  })
  it('接收 gutter 属性', done => {
    Vue.component('m-row', Row)
    Vue.component('m-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <m-row gutter="20">
        <m-col span="12"></m-col>
        <m-col span="12"></m-col>
      </m-row>
    `
    const vm = new Vue({
      el: 'div'
    })

    setTimeout(() => {
      const row = document.querySelector('.m-row')
      expect(getComputedStyle(row).marginLeft).to.equal('-10px')
      expect(getComputedStyle(row).marginRight).to.equal('-10px')
      const cols = row.querySelectorAll('.m-col')
      expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.equal('10px')
      done()
      vm.$el.remove()
      vm.$destroy
    })
  })
})
