<template>
  <div>USER CREATION PAGE</div>
  <MyInput v-model="query" />
  <MyDropDown
    :label="'Type of search'"
    :value="test"
    :options="test"
    v-model="option"
  ></MyDropDown>
  <MyButton @click="search">SEARCH</MyButton>
</template>

<script>
import MyInput from "../components/MyInput.vue";
import MyButton from "../components/MyButton.vue";
import MyDropDown from "../components/MyDropDown.vue";

export default {
  name: "UserCreation",
  inject: ["api"],
  components: {
    MyInput,
    MyButton,
    MyDropDown,
  },
  data() {
    return {
      query: "",
      option: "",
      test: ["albums", "artists"],
    };
  },
  methods: {
    updateModell(e) {
      console.log(e);
    },
    async search() {
      console.log(this.option);
      //   const res = await this.api.search(this.query);
      //   console.log(res);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
