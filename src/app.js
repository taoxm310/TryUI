import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'

import chai from 'chai'
const expect = chai.expect

Vue.component('m-button', Button)
Vue.component('m-button-group', ButtonGroup)
const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true
  }
})

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'download'
    }
  }).$mount()

  const useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.equal('#i-download')
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'download',
      loading:true
    }
  }).$mount()

  const useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend('Button')
  const vm = new Constructor({
    propsData:{
      icon:'loading'
    }
  }).$mount(div)
  const icon = vm.$el.querySelector('svg')
  expect(window.getComputedStyle(icon).order).to.equal('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend('Button')
  const vm = new Constructor({
    propsData:{
      icon:'loading',
      iconPosition:'right'
    }
  }).$mount(div)
  const icon = vm.$el.querySelector('svg')
  expect(window.getComputedStyle(icon).order).to.equal('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'download',
      loading:true
    }
  }).$mount()
  vm.$on('click', function () {
    console.log('hi')
  })
  vm.$el.click()
}