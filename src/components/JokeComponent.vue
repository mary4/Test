<template>
  <div>
    <button @click="fetchJokes">Get one more</button>
    <p>{{ getJokes }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "JokeComponent",
  computed: mapGetters(["getJokes"]),
  methods: mapActions(["fetchJokes"]),
  async mounted() {
    this.fetchJokes();
  },
};
</script>
