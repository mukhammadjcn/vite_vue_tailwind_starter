import { createApp } from "vue";
import App from "./App.vue";
import route from "./router/router";
import store from "./store/index";
import "./index.css";

createApp(App).use(route).use(store).mount("#app");
