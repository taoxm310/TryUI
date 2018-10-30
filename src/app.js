import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

Vue.component('m-button', Button)
Vue.component('m-button-group', ButtonGroup)
Vue.component('m-input', Input)
const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: true
  },
  created() {
    setTimeout(() => {
      let event = new Event('change')
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      console.log('hi')
    }, 3000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }
})
