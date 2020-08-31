<template>
  <div class="">
    <h3>SIGN UP</h3>
    <div class="form-group">
      <input type="text" placeholder="email" class="form-control" v-model="email" />
    </div>
    <div class="form-group">
      <input type="password" placeholder="password" class="form-control" v-model="password" />
    </div>
    <button class="btn btn-primary" @click="signIn()">Sign in</button>
    {{error.message}}
    <br><br>
    <router-link to="/signup">Not a user? Sign up</router-link>
    <br>
  </div> 
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ''
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error
      })
    }
  },
};
</script>