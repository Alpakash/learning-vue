<template>
  <div class="col-md-12">
      <div class="joke-card">
              <p class="text-justify">{{index+1}}</p>
          <button class="close" @click="removeJoke(index)"><span>&times;</span></button>
              <p><u>{{joke.setup}}</u></p>
              <p><em>{{joke.punchline}}</em></p>
          </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['joke', 'index'],
    methods: mapActions(["removeJoke"])
}
</script>