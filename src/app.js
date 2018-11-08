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
import Toast from './toast.vue'
import plugin from './plugin.js'

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
Vue.component('m-toast', Toast)
Vue.use(plugin)

const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: true,
    message: 'hi'
  },
  created() {
    this.$toast('文字', {
      position: 'middle',
      enableHTML: false,
      closeButton: {
        text: '已充值',
        callback() {
          console.log('他说他已经充值了')
        }
      },
      autoClose: false
    })
  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    showToast1() {
      this.$toast('message1')
    },
    showToast2() {
      this.$toast('message2', { position: 'middle' })
    },
    showToast3() {
      this.$toast('message3', { position: 'bottom' })
    }
  }
})

console.log(vm)
