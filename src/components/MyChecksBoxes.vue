<template>
  <div class="checkboxes-container">
    <div v-for="(item, index) in options" :key="index">
      <input
        type="checkbox"
        :id="item"
        :name="item"
        :value="item"
        v-model="interest"
      />
      <label :for="item"> {{ item }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCheckBoxes",
  props: {
    options: Array,
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      interest: [],
    };
  },
  watch: {
    interest() {
      this.$emit("update:modelValue", this.interest);
    },
  },
};
</script>

<style scoped lang="scss">
.checkboxes-container {
  display: flex;
  justify-content: left;
}
</style>
