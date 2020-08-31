<template>
  <div id="app">
    <em>Welcome, {{$store.state.user.email}}</em>
    <h1>{{ msg }}</h1>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>