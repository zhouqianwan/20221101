import Vue from 'vue'
import App from './App.vue'
import left from '@/components/left.vue'
import right from '@/components/right.vue'
Vue.component("Myleft", left);
Vue.component("Myright", right);


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')