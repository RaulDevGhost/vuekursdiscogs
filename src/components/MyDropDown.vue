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
      console.log("helllooo", event.target.value);
      //this.$emit("blur", { value: option, field: this.fieldname, valid: true });
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
