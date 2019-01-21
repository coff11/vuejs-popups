import Vue from 'vue'
import App from './App.vue'
import popups from './index'

Vue.use(popups)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
