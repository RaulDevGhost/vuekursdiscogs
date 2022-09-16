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
              v-if="item.data.visuals.avatarImage !== null"
              class="artist-image"
              v-bind:src="item.data.visuals.avatarImage.sources[0].url"
            />
            <img
              v-else
              class="artist-image"
              src="https://protkd.com/wp-content/uploads/2017/04/default-image.jpg"
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
      <div
        class="my-list-container"
        v-for="(item, index) in myList"
        :key="index"
      >
        <h3>{{ item.order }}</h3>
        <div>-</div>
        <h3>{{ item.name }}</h3>
      </div>
    </div>
    <!--MODAL SUBMIT-->
    <div v-if="added" class="modal-container">
      <div class="modal-body">
        <div class="modal-content">
          <div>Submit ready</div>
          <div>{{ message }}</div>
          <MyButton @click="addAnother()">ADD MORE</MyButton>
        </div>
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
      added: false,
      message: "",
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
        order: this.myList.length > 0 ? this.myList.at(-1).order + 1 : 1,
        name: item.data.profile.name,
        image:
          item.data.visuals.avatarImage !== null
            ? item.data.visuals.avatarImage.sources[0].url
            : "https://protkd.com/wp-content/uploads/2017/04/default-image.jpg",
      };
      if (this.myList.length < 5) {
        if (!this.myList.some((el) => el.name === item.data.profile.name)) {
          this.$store.dispatch("updateMyList", artistInfo);
          this.added = true;
          this.message = `your list has ${this.myList.length} artists`;
        } else {
          this.added = true;
          this.message = "That artist is already in your list";
        }
      }
    },
    addAnother() {
      this.added = false;
      this.$router.push({ path: "/user-creation-step-four" });
      if (this.myList.length === 5) {
        this.$router.push({ path: "/final-submit" });
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

  .my-list-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  h1,
  h3 {
    text-align: center;
    color: $primary;
  }

  a {
    color: $grey;
  }

  .modal-container {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(185, 197, 191, 0.8);
    z-index: 9999;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-body {
      width: 300px;
      height: 150px;
      background-color: #fff;
      color: black;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .modal-content {
      margin: 0 10px 0 10px;
    }
  }
}
</style>
