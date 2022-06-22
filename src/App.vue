<template>
  <router-view />
  <Backtop />
</template>

<script>
import Backtop from "./components/Backtop.vue";
export default {
  name: "App",
  components: { Backtop },
};
</script>
<style>
</style>
