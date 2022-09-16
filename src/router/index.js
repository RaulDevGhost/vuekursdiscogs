import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/HomePage.vue"),
  },
  {
    path: "/user-creation-step-one",
    name: "MyCreationStepOne",
    component: () =>
      import(
        /* webpackChunkName: "user-creation" */ "../views/MyCreationStepOne.vue"
      ),
  },
  {
    path: "/user-creation-step-two",
    name: "MyCreationStepTwo",
    component: () =>
      import(
        /* webpackChunkName: "user-creation" */ "../views/MyCreationStepTwo.vue"
      ),
  },
  {
    path: "/user-creation-step-three",
    name: "MyCreationStepThree",
    component: () =>
      import(
        /* webpackChunkName: "user-creation" */ "../views/MyCreationStepThree.vue"
      ),
  },
  {
    path: "/user-creation-step-four",
    name: "MyCreationStepFour",
    component: () =>
      import(
        /* webpackChunkName: "user-creation" */ "../views/MyCreationStepFour.vue"
      ),
  },
  {
    path: "/search-results",
    name: "MySearchResults",
    component: () =>
      import(
        /* webpackChunkName: "user-creation" */ "../views/MySearchResults.vue"
      ),
  },
  {
    path: "/final-submit",
    name: "FinalSubmit",
    component: () =>
      import(
        /* webpackChunkName: "user-creation" */ "../views/FinalSubmit.vue"
      ),
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
