import Vue from 'vue'
import App from './App.vue'
// 导入test.vue
import test from './test.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(test),
}).$mount('#app')