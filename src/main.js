import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vueInstante = null

window.renderSecond = (containerId, router, registerListeners) => {
  // registerListeners(listeners)
  vueInstante = new Vue({
    router,
    render: h => h(App),
  })
  vueInstante.$mount(`#${containerId}`)
}

window.unmountSecond = () => {
  vueInstante.$destroy(true)
}