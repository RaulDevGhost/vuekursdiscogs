<template>
  <div>HOME</div>
  <button>USER CREATION</button>
  <router-link class="link" title="UserCreation" :to="'/user-creation'"
    >User Creation</router-link
  >
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    console.log("heyyy");
    this.$store.dispatch("updateMyCreationTypeOne", "Top 10");
  },
};
</script>

<style scoped></style>
