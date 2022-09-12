import { createApp } from "vue";
import App from "./App.vue";
import apiServiceSpotify from "@/api/api";
import indexRoute from "./router";

const app = createApp(App);
app.provide("api", apiServiceSpotify);
app.use(indexRoute);
app.mount("#app");
