<template>
  <div class="container">
    <router-link
      class="link"
      title="MyCreationStepOne"
      :to="'/user-creation-step-one'"
      >BACK</router-link
    >
    <h1>Serch Results</h1>
    <button @click="test">TEST</button>
    <div class="container-list">
      <div
        v-for="(item, index) in mySearchResults"
        :key="index"
        @click="test()"
      >
        <div class="card-container">
          <MyCardArtist>
            <h1>{{ item.data.profile.name }}</h1>
            <img
              class="artist-image"
              v-bind:src="item.data.visuals.avatarImage.sources[0].url"
            />
          </MyCardArtist>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MyCardArtist } from "../components/MyCardArtist.vue";

export default {
  name: "MySearchResults",
  components: {
    MyCardArtist,
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
      mySearchResults: (state) => state.mySearchResults,
    }),
  },
  methods: {
    test() {
      console.log("test", this.mySearchResults);
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
  height: 100%;
  min-height: 100vh;
  width: 100%;
  gap: 20px;
  background-color: $black;

  .container-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }

  h1 {
    text-align: center;
    color: $primary;
  }

  a {
    color: $grey;
  }
}
</style>
