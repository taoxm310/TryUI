import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'

Vue.component('m-button', Button)
Vue.component('m-button-group',ButtonGroup)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true
  }
})
