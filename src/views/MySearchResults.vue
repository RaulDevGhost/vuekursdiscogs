<template>
  <div class="container">
    <router-link
      class="link"
      title="MyCreationStepOne"
      :to="'/user-creation-step-four'"
      >BACK</router-link
    >
    <h1>Serch Results</h1>
    <div class="container-list">
      <div
        class="card-container"
        v-for="(item, index) in mySearchResults"
        :key="index"
      >
        <MyCardArtist>
          <template v-slot:header>
            <img
              class="artist-image"
              v-bind:src="item.data.visuals.avatarImage.sources[0].url"
            />
          </template>
          <template v-slot:titel>
            <div class="artist-name">
              <h1>{{ item.data.profile.name }}</h1>
            </div>
          </template>
          <template v-slot:divider>
            <div class="artist-line"></div>
          </template>
          <template v-slot:actions>
            <div class="artist-footer">
              <MyButton @click="add(item)">ADD</MyButton>
            </div>
          </template>
        </MyCardArtist>
      </div>
    </div>
    <!--The list is going-->
    <div v-if="myList.length > 0">
      <h1>This is how your list is going</h1>
      <div v-for="(item, index) in myList" :key="index">
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MyCardArtist from "../components/MyCardArtist.vue";
import MyButton from "../components/MyButton.vue";

export default {
  name: "MySearchResults",
  components: {
    MyCardArtist,
    MyButton,
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
      myList: (state) => state.myList,
    }),
  },
  methods: {
    add(item) {
      const artistInfo = {
        id: item.data.uri.slice(15),
        name: item.data.profile.name,
      };
      console.log("item", artistInfo);
      this.$store.dispatch("updateMyList", artistInfo);
      console.log("asi va mi lista----->", this.myList);
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
  padding-bottom: 10rem;

  .card-container {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    max-width: 450px;
    width: 100%;
  }

  .container-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }

  h1,
  h3 {
    text-align: center;
    color: $primary;
  }

  a {
    color: $grey;
  }
}
</style>
