<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Fruits from "./components/Fruits.vue";
import Search from "./components/Search.vue";

export default {
  components: { Navbar, Fruits, Search },
};
</script>

<template>
  <div>
    <Navbar></Navbar>
    <router-View></router-View>
  </div>
</template>

<style scoped></style>
