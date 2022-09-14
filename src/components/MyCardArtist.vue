<template>
  <slot></slot>
  <slot></slot>
</template>

<script>
export default {
  name: "MyCardArtist",
};
</script>

<style lang="scss">
.card-container {
  display: flex;
  flex-direction: column;

  .artist-image {
    width: 100%;
  }
}
</style>
