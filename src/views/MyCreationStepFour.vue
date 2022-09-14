<template>
  <div class="container">
    <router-link
      class="link"
      title="MyCreationStepOne"
      :to="'/user-creation-step-one'"
      >BACK</router-link
    >
    <h1>Step 4</h1>
    <MyInput v-model="query" />
    <MyButton @click="search">Search -></MyButton>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MyButton from "../components/MyButton.vue";
import MyInput from "../components/MyInput.vue";

export default {
  name: "MyCreationStepFour",
  components: {
    MyButton,
    MyInput,
  },
  inject: ["api"],
  data() {
    return {
      query: "",
    };
  },
  computed: {
    ...mapState({
      myCreationTypeOne: (state) => state.myCreationTypeOne,
      myCreationTypeTwoTitel: (state) => state.myCreationTypeTwoTitel,
      myCreationTypeThree: (state) => state.myCreationTypeThree,
    }),
  },
  methods: {
    async search() {
      if (this.query.length !== 0) {
        console.log(
          "helllo",
          this.query,
          this.myCreationTypeOne,
          this.myCreationTypeTwoTitel,
          this.myCreationTypeThree
        );
        try {
          const res = await this.api.search(
            this.query,
            this.myCreationTypeThree
          );
          console.group(res.artists.items);
          res.artists.items.map((item) => {
            console.log(item.data.profile.name);
            if (item.data.profile.name === this.query) {
              this.$store.dispatch("updateMySearchResult", item);
              this.$router.push({ path: "/search-results" });
            }
          });
        } catch (e) {
          console.log(e);
        }
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
