import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Eduardo" }),
  actions: {
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
  },
});
