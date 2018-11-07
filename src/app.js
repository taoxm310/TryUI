import Vue from 'vue/dist/vue.esm'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Layout from './layout.vue'

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

Vue.component('m-button', Button)
Vue.component('m-button-group', ButtonGroup)
Vue.component('m-input', Input)
Vue.component('m-row', Row)
Vue.component('m-col', Col)
Vue.component('m-header', Header)
Vue.component('m-content', Content)
Vue.component('m-footer', Footer)
Vue.component('m-sider', Sider)
Vue.component('m-layout', Layout)

const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: true,
    message: 'hi'
  },
  created() {},
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }
})
