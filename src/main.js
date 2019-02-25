import Vue from 'vue'
import VTooltip from 'v-tooltip';
import App from './App.vue';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/main.scss';

Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOc1JL8nSUzMFy7Cg9aZNs_Hj63dVYqZs',
    libraries: 'places'
  }
})
Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
