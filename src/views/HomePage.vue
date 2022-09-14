<template>
  <div>HOME</div>
  <router-link
    class="link"
    title="MyCreationStepOne"
    :to="'/user-creation-step-one'"
    >CREATION</router-link
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
