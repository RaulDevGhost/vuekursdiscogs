import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/HomePage.vue"),
  },
  {
    path: "/user-creation",
    name: "UserCreation",
    component: () =>
      import(
        /* webpackChunkName: "user-creation" */ "../views/UserCreation.vue"
      ),
  },
];

const indexRoute = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default indexRoute;
