// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Routes from './routes'
import Store from './store'
import App from './App'
import axios from 'axios'

// Vue dependencies
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueRouter)

// Import bootstrap css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { hubConnection } from 'signalr-no-jquery';
const options = {  logging: true };
const connection = hubConnection('http://localhost:53573', options);
const hubProxy = connection.createHubProxy("ts3ruleshub");

hubProxy.on('addrule', function(id, rule) {
  Store.commit('addRule', [id, rule]);
});

hubProxy.on('removerule', function(id) {
  Store.commit('deleteRule', [id]);
});

connection.start({jsonp: true})
.done(function(){
  //console.log('Now conntected, ID: ' + connection.id);
})
.fail(function(){
  //console.log("Failed, could not connect");
});


// Routes for web
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: Routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: Store,
  render: h => h(App)
})
