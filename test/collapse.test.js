const expect = chai.expect

import Vue from 'vue/dist/vue.esm'
import Collapse from '../src/collapse.vue'
import CollapsePanel from '../src/collapse-panel.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
  it('存在', () => {
    expect(Collapse).to.exist
  })

  describe('props', () => {
    it('接受 selected ', done => {
      Vue.component('m-collapse', Collapse)
      Vue.component('m-collapse-panel', CollapsePanel)

      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <m-collapse :selected="xxx">
        <m-collapse-panel title="标题1" name="1"><span id="c1">内容1</span></m-collapse-panel>
        <m-collapse-panel title="标题2" name="2"><span id="c2">内容2</span></m-collapse-panel>
        <m-collapse-panel title="标题3" name="3"><span id="c3">内容3</span></m-collapse-panel>
      </m-collapse>
      `
      const vm = new Vue({
        el: div,
        data: {
          xxx: ['1', '2']
        }
      })

      setTimeout(() => {
        expect(vm.$el.querySelector('#c1')).to.exist
        expect(vm.$el.querySelector('#c2')).to.exist
        expect(vm.$el.querySelector('#c3')).to.not.exist
        done()
      })
    })
    it('接受 single', done => {
      Vue.component('m-collapse', Collapse)
      Vue.component('m-collapse-panel', CollapsePanel)

      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <m-collapse :selected="xxx" single>
        <m-collapse-panel title="标题1" name="1"><span id="c1">内容1</span></m-collapse-panel>
        <m-collapse-panel title="标题2" name="2"><span id="c2">内容2</span></m-collapse-panel>
        <m-collapse-panel title="标题3" name="3"><span id="c3">内容3</span></m-collapse-panel>
      </m-collapse>
      `
      const vm = new Vue({
        el: div,
        data: {
          xxx: ['1']
        }
      })
      setTimeout(() => {
        vm.$el.querySelector('[data-name="2"]').click()
        setTimeout(() => {
          expect(vm.$el.querySelector('#c1')).to.not.exist
          expect(vm.$el.querySelector('#c2')).to.exist
          expect(vm.$el.querySelector('#c3')).to.not.exist
        })
        done()
      })
    })
  })

  describe('event', () => {
    it('触发update:selected 事件', done => {
      Vue.component('m-collapse', Collapse)
      Vue.component('m-collapse-panel', CollapsePanel)

      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <m-collapse :selected="xxx" single @update:selected="onSelect">
        <m-collapse-panel title="标题1" name="1"><span id="c1">内容1</span></m-collapse-panel>
        <m-collapse-panel title="标题2" name="2"><span id="c2>内容2</span></m-collapse-panel>
        <m-collapse-panel title="标题3" name="3"><span id="c3">内容3</span></m-collapse-panel>
      </m-collapse>
      `
      const callback = sinon.fake()
      const vm = new Vue({
        el: div,
        data: {
          xxx: ['1']
        },
        methods: {
          onSelect: callback
        }
      })
      vm.$nextTick(() => {
        vm.$el.querySelector('[data-name="2"]').click()
        expect(callback).to.have.been.called
        done()
      })
    })
  })
})
