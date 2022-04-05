<template>
  <h1 class="text-3xl font-bold underline">Home page</h1>
  <p>{{ getCount }}</p>
  <button @click="add">Increment</button>
  <router-link to="/about">About</router-link>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.dispatch("incrementCount");
    },
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
  },
};
</script>

<style></style>
