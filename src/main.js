import Vue from 'vue'
import App from './App'
import './assets/reset.css'

let app = new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(app)
