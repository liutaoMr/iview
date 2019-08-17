import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import iView from 'iview'
import axios from 'axios'
import qs from 'qs'


import 'iview/dist/styles/iview.css'
import lessStyles from '../my-theme/index.less'

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$ajax =axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
