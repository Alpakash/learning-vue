<template>
  <div id="app">
    <h3>Got Jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">
      Add ten random jokes
    </button>
    <div class="">{{$store.state.jokes}}</div>
    <div class="">{{$store.state.jokes.id}}</div>
    <div class="">{{$store.state.jokes.setup}}</div>
    <div class="">{{$store.state.jokes.punchline}}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: mapActions(["initJokes"])
};
</script>