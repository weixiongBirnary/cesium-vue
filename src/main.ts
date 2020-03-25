import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// noinspection ES6UnusedImports
// import '../node_modules/cesium/Source/Widgets/widgets.css';
import 'cesium/Source/Widgets/widgets.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
