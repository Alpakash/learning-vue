import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp.js'

Vue.use(VueRouter)

import store from './store'

import Dashboard from './components/Dashboard'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/dashboard', component: Dashboard},
    {path: '/signin', component: Login},
    {path: '/signup', component: Signup}
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/dashboard').catch(() => {});
  } else {
    router.replace('/signin')
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
 