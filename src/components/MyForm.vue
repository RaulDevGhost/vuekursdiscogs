<template>
  <form @submit.prevent="submitForm">
    <div class="kontak-container">
      <div class="kontak-title">
        <h1>KONTAK UZ</h1>
      </div>
      <div
        class="kontak-kontrol"
        :class="{ invalid: userArtistValidity === 'invalid' }"
      >
        <label class="kontak-label">Your favorite artist</label>
        <MyInput v-model.trim="artist" @blur="validateArtistInput" />
        <p
          v-if="userArtistValidity === 'invalid'"
          :class="{ invalid: userArtistValidity === 'invalid' }"
        >
          Please enter a valid Artist!
        </p>
      </div>
      <div
        class="kontak-kontrol"
        :class="{ invalid: userAlbumValidity === 'invalid' }"
      >
        <label class="kontak-label">Your favorite Album</label>
        <MyInput v-model.trim="album" @blur="validateAlbumInput" />
        <p
          v-if="userAlbumValidity === 'invalid'"
          :class="{ invalid: userAlbumValidity === 'invalid' }"
        >
          Please enter a valid Album!
        </p>
      </div>
      <div class="kontak-kontrol">
        <MyCheckBoxes :clean="cleanBoxes" :options="options" v-model="taste" />
      </div>
      <MyButton>SUBMIT</MyButton>
    </div>
  </form>
  <div v-if="modalShow">
    <MyModal :message="messageModal" v-model="modalShow" />
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyInput from "../components/MyInput.vue";
import MyCheckBoxes from "../components/MyChecksBoxes.vue";
import MyModal from "../components/MyModal.vue";

export default {
  name: "MyForm",
  components: {
    MyButton,
    MyInput,
    MyCheckBoxes,
    MyModal,
  },
  data() {
    return {
      options: ["Rock", "Techno", "Reaggeton", "Jazz", "Blues", "Classic"],
      taste: [],
      album: "",
      artist: "",
      cleanBoxes: false,
      modalShow: false,
      messageModal: "",
      userArtistValidity: "pending",
      userAlbumValidity: "pending",
    };
  },
  methods: {
    submitForm() {
      if (this.taste.length > 0) {
        if (
          this.userArtistValidity === "valid" &&
          this.userAlbumValidity === "valid"
        ) {
          this.messageModal = "Thanks for your submit! we will review it!";
          this.modalShow = true;
          this.artist = "";
          this.album = "";
          this.cleanBoxes = true;
          this.taste = [];
          setTimeout(this.$router.push({ path: "/" }), 10000);
        } else {
          this.validateArtistInput();
          this.validateAlbumInput();
          this.messageModal = "Something went wrong! Try it later!";
          this.modalShow = true;
        }
      } else {
        this.messageModal = "You must select a gender!";
        this.modalShow = true;
      }
    },
    validateArtistInput() {
      if (this.artist === "") {
        this.userArtistValidity = "invalid";
      } else {
        this.userArtistValidity = "valid";
      }
    },
    validateAlbumInput() {
      if (this.album === "") {
        this.userAlbumValidity = "invalid";
      } else {
        this.userAlbumValidity = "valid";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.kontak-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin: 2rem 4rem 1rem 4rem;

  .kontak-title {
    margin: 3rem 0;
  }

  .kontak-kontrol {
    padding: 0.5rem 0;

    &.invalid input {
      border-color: $color-error;
    }

    &.invalid label {
      color: $color-error;
    }

    &.invalid p {
      color: $color-error;
    }

    .kontak-label {
      padding-right: 1rem;
    }
  }
}
</style>
