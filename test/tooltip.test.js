const expect = chai.expect

import Vue from 'vue/dist/vue.esm'
import Tooltip from '../src/tooltip.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tooltip', () => {
  it('存在', () => {
    expect(Tooltip).to.exist
  })

  describe('props', () => {
    it('接受 position ', done => {
      Vue.component('m-tooltip', Tooltip)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <m-tooltip position="bottom" ref="a">
          <template slot="content">hello</template>
          <button>点我</button>
        </m-tooltip>
      `
      const vm = new Vue({
        el: div
      })

      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const { contentWrapper } = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })
})
