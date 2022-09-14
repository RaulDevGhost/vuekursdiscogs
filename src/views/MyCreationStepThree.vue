<template>
  <div class="container">
    <router-link
      class="link"
      title="MyCreationStepOne"
      :to="'/user-creation-step-one'"
      >BACK</router-link
    >
    <h1>Step 3</h1>
    <MyDropDown
      :label="'Type of search'"
      :value="types"
      :options="types"
      v-model="option"
    ></MyDropDown>
    <MyButton @click="weiter">NEXT -></MyButton>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MyButton from "../components/MyButton.vue";
import MyDropDown from "../components/MyDropDown.vue";

export default {
  name: "MyCreationStepThree",
  components: {
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
      myCreationTypeTwoTitel: (state) => state.myCreationTypeTwoTitel,
    }),
  },
  methods: {
    weiter() {
      if (this.option.length !== 0) {
        console.log(
          "helllo",
          this.myCreationTypeOne,
          this.myCreationTypeTwoTitel,
          this.option
        );
        this.$store.dispatch("updateMyCreationTypeThree", this.option);
        this.$router.push({ path: "/user-creation-step-four" });
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
