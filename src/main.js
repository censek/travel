import Vue from 'vue';
// 解决移动端300ms延迟问题
import fastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import './assets/styles/reset.css';
// 移动端1像素边框问题
import './assets/styles/border.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
