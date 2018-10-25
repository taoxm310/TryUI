import Vue from 'vue'
import Button from './button.vue'

Vue.component('m-button', Button)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true
  }
})
