<template>
  <component :is="type" :href="href" class="button">
    <slot />
  </component>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    type() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  margin: 0.5em 0;
  padding: 1em 2em;
  background: #fff;
  border: 2px solid tomato;
  border-radius: 3px;
  color: tomato;
  font-family: "Quicksand", sans-serif;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background: tomato;
  color: #fff;
}
</style>
