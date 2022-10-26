<template>
  <div class="home-container">
    <div>HOME</div>
    <router-link title="MyCreationStepOne" :to="'/user-creation-step-one'"
      >CREATION</router-link
    >
    <router-link title="KontakForm" :to="'/kontak'">KONTAK FORM</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
}
</style>
