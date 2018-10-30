const expect = chai.expect

import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  })
})

describe('props', () => {
  const Constructor = Vue.extend(Input)
  let vm
  afterEach(() => vm.$destroy())

  it('接受value ', () => {
    vm = new Constructor({
      propsData: {
        value: 'download'
      }
    }).$mount()

    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.value).to.equal('download')
  })

  it('接受disabled ', () => {
    vm = new Constructor({
      propsData: {
        value: 'download',
        disabled: true
      }
    }).$mount()

    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.disabled).to.equal(true)
  })

  it('接受readonly', () => {
    vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.readOnly).to.equal(true)
  })

  it('接受error', () => {
    vm = new Constructor({
      propsData: {
        error: 'this is an error'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
    const errorMessage = vm.$el.querySelector('.error-message')
    expect(errorMessage.innerText).to.equal('this is an error')
  })
})

describe('事件', () => {
  const Constructor = Vue.extend(Input)
  let vm
  afterEach(() => {
    vm.$destroy()
  })

  it('支持input/change/blur/focus事件', () => {
    ;['input', 'change', 'blur', 'focus'].forEach(eventName => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on(eventName, callback)
      //触发input的change事件
      let event = new Event(eventName)
      let input = vm.$el.querySelector('input')
      input.dispatchEvent(event)
      expect(callback).to.have.been.called
    })
  })
})
