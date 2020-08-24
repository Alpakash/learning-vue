import Vue from "vue";
import App from "./components/App.vue";

import store from "./store";

// store.commit("INIT_JOKES", [{ test: "hello" }, { anotherone: "YELP" }]);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
