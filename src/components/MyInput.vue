<template>
  <input type="text" :value="modelValue" @input="updateValue" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
