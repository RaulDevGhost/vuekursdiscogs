<template>
  <div class="container">
    <h1>FINAL</h1>
    <p class="drag-order">Drag and order your list</p>
    <div class="container-list">
      <draggable
        :list="this.store.myList"
        :disabled="!enabled"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }">
          <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
            <div class="name-item">{{ element.name }}</div>
            <div class="delete-item" @click="deleteItem(element.id)">X</div>
          </div>
        </template>
      </draggable>
    </div>
    <MyButton @click="finalOrder()">SUBMIT</MyButton>
    <!--MODAL SUBMIT-->
    <div v-if="deletedItem" class="modal-container">
      <div class="modal-body">
        <div class="modal-content">
          <div>Delete artist?</div>
          <MyButton @click="confirmationDelete(true)">YES</MyButton>
          <MyButton @click="confirmationDelete(false)">NO</MyButton>
        </div>
      </div>
    </div>
    <!--END MODAL SUBMIT-->
  </div>
</template>

<script>
import draggable from "vuedraggable";
import MyButton from "../components/MyButton.vue";
import { useCounterStore } from "../store";

export default {
  name: "FinalSubmit",
  components: {
    MyButton,
    draggable,
  },
  inject: ["api"],
  data() {
    return {
      enabled: true,
      dragging: false,
      deletedItem: false,
      deletedItemId: "",
      store: useCounterStore(),
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  //   watch: {
  //     myList: function () {
  //       if (this.store.myList.length < 3) {
  //         this.deletedItem = true;
  //       }
  //     },
  //   },
  methods: {
    finalOrder() {
      this.store.myList.map((item, index) => {
        item.order = index + 1;
      });
      console.log("test----->", this.store.myList);
    },
    confirmationDelete(answer) {
      if (answer) {
        this.store.removeFromMyList(this.deletedItemId);
        this.$router.push({ path: "/user-creation-step-four" });
      } else {
        this.deletedItem = false;
      }
    },
    deleteItem(id) {
      this.deletedItemId = id;
      this.deletedItem = true;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  gap: 20px;
  background-color: $black;
  padding-bottom: 10rem;

  .drag-order {
    color: #ffebcc;
    opacity: 0.6;
  }

  .buttons {
    margin-top: 35px;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .not-draggable {
    cursor: no-drop;
  }

  .buttons {
    margin-top: 35px;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 300px;
    color: #ffebcc;
    border: 1px #ffebcc solid;
    padding: 1rem 0 1rem 0;
    margin: 1rem;
    cursor: grab;

    .name-item {
      width: 90%;
      height: 100%;
      padding: 0 1rem;
    }

    .delete-item {
      display: flex;
      align-self: center;
      height: 100%;
      width: 10%;
      border-left: 1px #ffebcc solid;
      justify-content: center;
      cursor: pointer;
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    max-width: 450px;
    width: 100%;
  }

  .container-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }

  .my-list-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  h1,
  h3 {
    text-align: center;
    color: $primary;
  }

  a {
    color: $grey;
  }

  .modal-container {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(185, 197, 191, 0.8);
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
}
</style>
