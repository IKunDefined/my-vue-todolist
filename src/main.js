import Vue from 'vue'
import App from './App'
import axios from 'axios'
import './assets/reset.css'

let app = new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(app)
Vue.prototype.$http = axios
