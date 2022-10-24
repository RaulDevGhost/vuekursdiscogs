import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    myCreationTypeOne: "",
    myCreationTypeTwoTitel: "",
    myCreationTypeThree: "",
    mySearchResults: [],
    myList: [],
  }),
  actions: {
    updateMyCreationTypeOne(payload) {
      console.log("step 1 pinia", payload);
      this.myCreationTypeOne = payload;
    },
    updateMyCreationTypeTwoTitel(payload) {
      console.log("step 2 pinia", payload);
      this.myCreationTypeTwoTitel = payload;
    },
    updateMyCreationTypeThree(payload) {
      console.log("step 3 pinia", payload);
      this.myCreationTypeThree = payload;
    },
    updateMySearchResult(payload) {
      if (payload === "cleanArray") {
        console.log("cleaning");
        this.mySearchResults.length = [];
      } else {
        console.log("pushing my search list", payload);
        this.mySearchResults.push(payload);
        console.log("My search Results list", this.mySearchResults);
      }
    },
    updateMyList(payload) {
      this.myList.push(payload);
      console.log("HEY MY LIST", this.myList);
    },
    removeFromMyList(payload) {
      console.log("removing items ---->", payload);
      //context.commit("removeItemFromMyList", payload);
      this.myList = this.myList.filter((item) => item.id != payload);
    },
    increment(test) {
      console.log(test);
      this.count++;
    },
    decrease() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
  getters: {
    getUserById: (state) => {
      return (userId) => `This is getter ${state.count} ${userId}`;
      //return (userId) => state.users.find((user) => user.id === userId);
    },
    testerGetter: (state) => {
      if (state.count % 2 === 0) return "even";
      return "odd";
    },
  },
});
