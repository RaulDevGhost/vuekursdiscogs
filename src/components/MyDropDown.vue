<template>
  <div>
    <select @change="updateValue($event)">
      <option v-for="(item, index) in options" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "MyDropDown",
  props: {
    value: Array,
    label: String,
    fieldname: String,
    options: Array,
    type: String,
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss"></style>
