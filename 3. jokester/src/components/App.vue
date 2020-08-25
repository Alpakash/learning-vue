<template>
  <div id="app">
      <h3>Got Jokes?</h3>
      <button class="btn btn-primary" @click="initJokes">Add ten random jokes</button>
      <button class="btn btn-primary" @click="addJoke">Add one random joke</button>

      <br />
      <strong>FILTER:</strong>
      <span v-for="(type, index) in types" :key="index">
        <input type="checkbox" :value="type" v-model="checkedTypes" checked />
        <label>{{type}}</label>&nbsp;
      </span>
      <br />

        <Joke
          v-for="(joke, index, key) in $store.state.jokes"
          v-show="checkedTypes.includes(joke.type)"
          :joke="joke"
          :key="key"
          :index="index"
        />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke";

export default {
  data() {
    return {
      types: ["general", "programming"],
      checkedTypes: ["general", "programming"],
    };
  },
  methods: mapActions(["initJokes", "addJoke"]),
  components: {
    Joke,
  },
};
</script>