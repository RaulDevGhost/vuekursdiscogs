<template>
  <div class="container">
    <router-link class="link" title="HomePage" :to="'/'">BACK</router-link>
    <h1>Step 1</h1>
    <h4>Select what kind of recommendation you want to create</h4>
    <MyDropDown
      :label="'Type of search'"
      :value="types"
      :options="types"
      v-model="option"
      @change="this.store.updateMyCreationTypeOne(option)"
    ></MyDropDown>
    <p v-if="this.error" class="error-message">
      you need to select a type of list
    </p>
    <MyButton @click="weiter">NEXT</MyButton>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyDropDown from "../components/MyDropDown.vue";
import { useCounterStore } from "../store";

export default {
  name: "MyCreationStepOne",
  components: {
    MyButton,
    MyDropDown,
  },
  data() {
    return {
      option: "",
      error: false,
      types: ["select a type", "Top 10", "Recommend stuff"],
      store: useCounterStore(),
    };
  },
  methods: {
    weiter() {
      if (this.option.length !== 0 && this.option !== "select a type") {
        this.$router.push({ path: "/user-creation-step-two" });
      } else {
        this.error = true;
      }
    },
  },
  watch: {
    option() {
      this.option === "select a type"
        ? (this.error = true)
        : (this.error = false);
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

  h1,
  h4 {
    text-align: center;
    color: $primary;
  }

  a {
    color: $grey;
  }

  .error-message {
    color: $color-error;
  }
}
</style>
