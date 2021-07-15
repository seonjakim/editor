// Vue.component('todo-item', {
//   template: '<li>This is a todo</li>'
// })
// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'hello vue'
//   }
// })

import Vue from 'vue'
import App from './App.vue'
new Vue({
  render: h => h(App)
}).$mount('#app')
