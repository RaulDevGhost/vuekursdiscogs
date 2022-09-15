import { createApp } from "vue";
import App from "./App.vue";
import apiServiceSpotify from "@/api/api";
import indexRoute from "./router";
import { createStore } from "vuex";
import { initState } from "./api/initialState";

const app = createApp(App);

const store = createStore({
  state() {
    return initState();
  },
  //   mutations: {
  //     updateValid(state, payload) {
  //       state.isValid = payload;
  //       updateState(state);
  //     },
  //     resetState(state) {
  //       Object.assign(state, {
  //         ...initState(),
  //         dropdownvalues: state.dropdownvalues,
  //       });
  //     },
  //   },
  actions: {
    updateMyCreationTypeOne(context, payload) {
      console.log("step 1", payload);
      context.state.myCreationTypeOne = payload;
    },
    updateMyCreationTypeTwoTitel(context, payload) {
      console.log("step 2", payload);
      context.state.myCreationTypeTwoTitel = payload;
    },
    updateMyCreationTypeThree(context, payload) {
      console.log("step 3", payload);
      context.state.myCreationTypeThree = payload;
    },
    updateMySearchResult(context, payload) {
      console.log("Search Results", payload);
      //context.state.mySearchResults.push(payload);
      if (payload === "cleanArray") {
        context.state.mySearchResults.length = [];
      } else {
        context.state.mySearchResults.push(payload);
      }
    },
    updateMyList(context, payload) {
      console.log("My list", payload);
      context.state.myList.push(payload);
    },
  },
});

app.provide("api", apiServiceSpotify);
app.use(indexRoute);
app.use(store);
app.mount("#app");
