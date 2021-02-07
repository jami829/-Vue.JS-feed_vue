import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios; // prototype에 axios를 추가하여 Vue 인스턴스 내부안에서 별도로 import없이 this.$axios로 사용가능

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
