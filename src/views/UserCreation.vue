<template>
  <div>USER CREATION PAGE</div>
  <MyInput v-model="query" />
  <MyDropDown
    :label="'Type of search'"
    :value="types"
    :options="types"
    v-model="option"
  ></MyDropDown>
  <MyButton @click="search">SEARCH</MyButton>
</template>

<script>
import { mapState } from "vuex";
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
      types: ["select a type", "albums", "artists", "tracks"],
    };
  },
  computed: {
    ...mapState({
      myCreationTypeOne: (state) => state.myCreationTypeOne,
    }),
  },
  methods: {
    updateModell(e) {
      console.log(e);
    },
    async search() {
      console.log("vuexxxxx", this.myCreationTypeOne);

      if (this.option.length !== 0) {
        console.log("helllo", this.option);
        // const res = await this.api.search(this.query, this.option);
        // console.log(res);
      }
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
