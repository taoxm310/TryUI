import Vue from 'vue'
import Demo from './demo.vue'

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
import Cascader from './cascader.vue'
import CascaderItem from './cascader-item.vue'


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
Vue.component('m-cascader', Cascader)
Vue.component('m-cascader-item', CascaderItem)


Vue.config.productionTip = false

new Vue ({
  render:h => h(Demo)
}).$mount('#app')