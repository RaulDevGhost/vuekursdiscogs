<template>
  <div class="modal-container">
    <div class="modal-body">
      <div class="modal-content">
        <div>{{ message }}</div>
        <MyButton @click="clickEvent(false)">OK</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
export default {
  name: "MyModal",
  components: {
    MyButton,
  },
  props: {
    message: {
      required: true,
      type: String,
    },
  },
  methods: {
    clickEvent(e) {
      this.$emit("update:modelValue", e);
    },
  },
};
</script>

<style scoped lang="scss">
.modal-container {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-body {
    width: 300px;
    height: 150px;
    background-color: #fff;
    color: black;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal-content {
    margin: 0 10px 0 10px;
  }
}
</style>
