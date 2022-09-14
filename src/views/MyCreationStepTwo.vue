<template>
  <div class="container">
    <router-link
      class="link"
      title="MyCreationStepOne"
      :to="'/user-creation-step-one'"
      >BACK</router-link
    >
    <h1>Step 2</h1>
    <MyInput v-model="titel" />
    <MyButton @click="weiter">NEXT -></MyButton>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyInput from "../components/MyInput.vue";

export default {
  name: "MyCreationStepTwo",
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      titel: "",
    };
  },
  methods: {
    weiter() {
      if (this.titel.length !== 0) {
        this.$store.dispatch("updateMyCreationTypeTwoTitel", this.titel);
        this.$router.push({ path: "/user-creation-step-three" });
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
