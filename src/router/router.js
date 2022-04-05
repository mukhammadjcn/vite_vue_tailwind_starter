import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../pages/home.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("../pages/about.vue"),
  },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

export default route;
