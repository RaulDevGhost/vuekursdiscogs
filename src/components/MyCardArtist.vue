<template>
  <div class="card-list">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="titel"></slot>
      <slot name="divider"></slot>
    </main>
    <footer>
      <slot name="actions"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MyCardArtist",
};
</script>

<style lang="scss">
.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  min-height: 530px;
}

.artist-name {
  margin: 20px 0 10px 0;
  max-width: 250px;
  font-size: 1rem;
}

.artist-image {
  width: 100%;
  min-height: 500px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.9);
}

.artist-line {
  width: 80%;
  min-width: 250px;
  border: 0.01rem solid #000;
  margin-bottom: 20px;
}

.artist-footer {
  height: 5rem;
}
</style>
