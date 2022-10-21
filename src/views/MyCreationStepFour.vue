<template>
  <div class="container">
    <router-link
      class="link"
      title="MyCreationStepOne"
      :to="'/user-creation-step-three'"
      >BACK</router-link
    >
    <h1>Step 4</h1>
    <MyInput v-model="query" />
    <MyButton @click="search">Search -></MyButton>
    <div v-if="notFound">
      <p class="not-found">
        Nothing found, please check if the name is right !
      </p>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyInput from "../components/MyInput.vue";
import { useCounterStore } from "../store";

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
      notFound: false,
      store: useCounterStore(),
    };
  },
  // computed: {
  //   ...mapState({
  //     myCreationTypeOne: (state) => state.myCreationTypeOne,
  //     myCreationTypeTwoTitel: (state) => state.myCreationTypeTwoTitel,
  //     myCreationTypeThree: (state) => state.myCreationTypeThree,
  //     mySearchResults: (state) => state.mySearchResults,
  //   }),
  // },
  mounted() {
    if (this.store.mySearchResults.length > 0) {
      this.store.updateMySearchResult("updateMySearchResult", "cleanArray");
    }
    if (this.store.myCreationTypeThree === "") {
      this.$router.push({ path: "/user-creation-step-three" });
    }
  },
  methods: {
    async search() {
      if (this.query.length !== 0) {
        try {
          const res = await this.api.search(
            this.query,
            this.myCreationTypeThree
          );
          res.artists.items.map((item) => {
            //this.$store.dispatch("updateMySearchResult", item);
            const nameArtist = item.data.profile.name.toLowerCase();
            const queryArtist = this.query.toLowerCase();
            if (nameArtist === queryArtist) {
              console.log("SODA STEREOOOOOO--->", item);
              this.store.updateMySearchResult(item);
              //this.$store.dispatch("updateMySearchResult", item);
              this.$router.push({ path: "/search-results" });
            }
          });
          if (this.mySearchResults.length === 0) {
            this.notFound = true;
            //console.log("Nothing found, please check if the name is right !");
          }
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

  .not-found {
    color: $primary;
  }
}
</style>
