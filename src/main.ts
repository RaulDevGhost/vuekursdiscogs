import { createApp } from "vue";
import App from "./App.vue";
import apiServiceSpotify from "@/api/api";
import indexRoute from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

// const store = createStore({
//   state() {
//     return initState();
//   },
//   mutations: {
//     removeItemFromMyList(state, payload) {
//       console.log("PAYLOAD MUTATION.->", payload);
//       state.myList = state.myList.filter((item) => item.id != payload);
//     },
//   },
//   actions: {
//     updateMyCreationTypeOne(context, payload) {
//       console.log("step 1", payload);
//       context.state.myCreationTypeOne = payload;
//     },
//     updateMyCreationTypeTwoTitel(context, payload) {
//       console.log("step 2", payload);
//       context.state.myCreationTypeTwoTitel = payload;
//     },
//     updateMyCreationTypeThree(context, payload) {
//       console.log("step 3", payload);
//       context.state.myCreationTypeThree = payload;
//     },
//     updateMySearchResult(context, payload) {
//       console.log("Search Results", payload);
//       //context.state.mySearchResults.push(payload);
//       if (payload === "cleanArray") {
//         context.state.mySearchResults.length = [];
//       } else {
//         context.state.mySearchResults.push(payload);
//       }
//     },
//     updateMyList(context, payload) {
//       console.log("My list", payload);
//       context.state.myList.push(payload);
//     },
//     removeFromMyList(context, payload) {
//       console.log("removing items ---->", payload);
//       context.commit("removeItemFromMyList", payload);
//     },
//   },
// });

app.provide("api", apiServiceSpotify);
app.use(indexRoute);
app.use(pinia);
app.mount("#app");
