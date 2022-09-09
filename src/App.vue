<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { releasesOne, releases } from "./api/api";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  async mounted() {
    const res = await releases("Rock", "1983", "Metal", "US");
    console.log(res.data);
    const resOne = await releasesOne();
    console.log(resOne);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
