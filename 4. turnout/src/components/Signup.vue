<template>
  <div class>
    <h3>SIGN UP</h3>

    <div class="form-group">
      <input class="form-control" type="text" placeholder="email" v-model="email" />
    </div>
    <div class="form-group">
      <input class="form-control" type="password" placeholder="password" v-model="password" />
    </div>

    <button class="btn btn-primary mb-4" @click="signUp()">Sign up</button>

    <router-link to="/signin">Already a user? Sing in</router-link>
    <br />
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>