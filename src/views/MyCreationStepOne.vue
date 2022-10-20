<template>
  <div class="container">
    <router-link class="link" title="HomePage" :to="'/'">BACK</router-link>
    <h1>Step 1</h1>
    <MyDropDown
      :label="'Type of search'"
      :value="types"
      :options="types"
      v-model="option"
    ></MyDropDown>
    <h1>{{ this.store.count }}</h1>
    <h1>{{ this.store.getUserById(this.store.count) }}</h1>
    <button @click="this.myOwnName('kslksks')">+</button>
    <MyButton @click="weiter">NEXT -></MyButton>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyDropDown from "../components/MyDropDown.vue";
import { useCounterStore } from "../store";
import { mapActions } from "pinia";

export default {
  name: "MyCreationStepOne",
  components: {
    MyButton,
    MyDropDown,
  },
  data() {
    return {
      query: "",
      option: "",
      types: ["select a type", "Top 10", "Recommend stuff"],
      store: useCounterStore(),
    };
  },
  methods: {
    ...mapActions(useCounterStore, { myOwnName: "increment" }),
    // incrementation() {
    //   const testing = "heyyyy";
    //   //this.store.increment(testing);
    //   //this.myOwnName(testing);
    // },
    weiter() {
      if (this.option.length !== 0) {
        this.$store.dispatch("updateMyCreationTypeOne", this.option);
        this.$router.push({ path: "/user-creation-step-two" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  background-color: $black;

  h1 {
    text-align: center;
    color: $primary;
  }

  a {
    color: $grey;
  }
}
</style>
