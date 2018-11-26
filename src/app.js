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
import Tabs from './tabs.vue'
import TabsPane from './tabs-pane.vue'
import TabsBody from './tabs-body.vue'
import TabsHead from './tabs-head.vue'
import TabsItem from './tabs-item.vue'
import Icon from './icon.vue'
import ToolTip from './tooltip.vue'
import Collapse from './collapse.vue'
import CollapsePanel from './collapse-panel.vue'

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
Vue.component('m-icon', Icon)
Vue.use(plugin)
Vue.component('m-tabs', Tabs)
Vue.component('m-tabs-pane', TabsPane)
Vue.component('m-tabs-body', TabsBody)
Vue.component('m-tabs-head', TabsHead)
Vue.component('m-tabs-item', TabsItem)
Vue.component('m-tooltip', ToolTip)
Vue.component('m-collapse', Collapse)
Vue.component('m-collapse-panel', CollapsePanel)

const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: true,
    message: 'hi',
    selectedTab: 'text'
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
      this.$toast('message1', { autoClose: false })
    },
    showToast2() {
      this.$toast('message2', { position: 'middle' })
    },
    showToast3() {
      this.$toast('message3', { position: 'bottom' })
    },
    onSelect(data) {
      console.log('onSelect', data)
    }
  }
})

console.log(vm)
