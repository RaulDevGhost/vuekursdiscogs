<template>
  <form @submit.prevent="submitForm">
    <div class="kontak-container">
      <div class="kontak-title">
        <h1>KONTAK UZ</h1>
      </div>
      <div class="kontak-kontrol">
        <label class="kontak-label">Your favorite artist</label>
        <MyInput v-model="artist" />
      </div>
      <div class="kontak-kontrol">
        <label class="kontak-label">Your favorite Album</label>
        <MyInput v-model="album" />
      </div>
      <div class="kontak-kontrol">
        <MyCheckBoxes :options="options" v-model="taste" />
      </div>
      <MyButton>SUBMIT</MyButton>
    </div>
  </form>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyInput from "../components/MyInput.vue";
import MyCheckBoxes from "../components/MyChecksBoxes.vue";

export default {
  name: "MyForm",
  components: {
    MyButton,
    MyInput,
    MyCheckBoxes,
  },
  data() {
    return {
      options: ["Rock", "Techno", "Reaggeton"],
      taste: [],
      album: "",
      artist: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Submit taste", this.taste);
      console.log("Submit album", this.album);
      console.log("Submit album", this.artist);
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

  .kontak-title {
    margin: 3rem 0;
  }

  .kontak-kontrol {
    padding: 0.5rem 0;

    .kontak-label {
      padding-right: 1rem;
    }
  }
}
</style>
