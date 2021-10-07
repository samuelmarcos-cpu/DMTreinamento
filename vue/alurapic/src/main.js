import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import routes from './routes';
import VueRouter from 'vue-router';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes, 
  mode: 'history'
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
