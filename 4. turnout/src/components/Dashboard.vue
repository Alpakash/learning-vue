<template>
  <div>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut()">Logout</button>
    <AddEvent />
    <div class="col-md-12 d-flex">
      <EventItem
        v-for="(event_item, index) in $store.state.events"
        :event="event_item"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent";
import EventItem from "./EventItem";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch("setEvents", events);
    });
  }
};
</script>