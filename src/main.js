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
      console.log("helllooo", payload);
      context.state.myCreationTypeOne = payload;
    },
    updateMyCreationTypeTwo(context, payload) {
      context.state.myCreationTypeTwo = payload;
    },
    updateMyCreationFinalProcess(context, payload) {
      context.state.myCreationFinalProcess.push(payload);
    },
  },
});

app.provide("api", apiServiceSpotify);
app.use(indexRoute);
app.use(store);
app.mount("#app");
