<template>
  <div class="container">
    <h1>FINAL</h1>
    <div class="container-list">
      <!--<div class="card-container" v-for="(item, index) in myList" :key="index">
        <MyCardArtist>
          <template v-slot:header>
            <img class="artist-image" v-bind:src="item.image" />
          </template>
          <template v-slot:titel>
            <div class="artist-name">
              <h1>{{ item.position }} - {{ item.name }}</h1>
            </div>
          </template>
        </MyCardArtist>
      </div>-->
      <draggable
        :list="myList"
        :disabled="!enabled"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
        @click="ordering"
      >
        <template #item="{ element }">
          <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <MyButton @click="test()">SUBMIT</MyButton>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapState } from "vuex";
import MyButton from "../components/MyButton.vue";

export default {
  name: "FinalSubmit",
  components: {
    MyButton,
    draggable,
  },
  inject: ["api"],
  data() {
    return {
      newList: [],
      enabled: true,
      dragging: false,
    };
  },
  computed: {
    ...mapState({
      myCreationTypeOne: (state) => state.myCreationTypeOne,
      myCreationTypeTwoTitel: (state) => state.myCreationTypeTwoTitel,
      myCreationTypeThree: (state) => state.myCreationTypeThree,
      mySearchResults: (state) => state.mySearchResults,
      myList: (state) => state.myList,
    }),
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  mounted() {
    this.newList = this.myList;
  },
  watch: {
    newList() {
      console.log("helloooo");
    },
  },
  methods: {
    test() {
      this.myList.map((item, index) => {
        item.order = index + 1;
      });
      console.log("test----->", this.myList);
    },
    ordering() {
      this.myList.map((item, index) => {
        item.order = index + 1;
      });
      console.log("test----->", this.myList);
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
    width: 300px;
    color: blanchedalmond;
    border: 1px blanchedalmond solid;
    cursor: grab;
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
}
</style>
