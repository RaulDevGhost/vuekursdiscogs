import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/user-creation-step-one",
    name: "MyCreationStepOne",
    component: () => import("../views/MyCreationStepOne.vue"),
  },
  {
    path: "/user-creation-step-two",
    name: "MyCreationStepTwo",
    component: () => import("../views/MyCreationStepTwo.vue"),
  },
  {
    path: "/user-creation-step-three",
    name: "MyCreationStepThree",
    component: () => import("../views/MyCreationStepThree.vue"),
  },
  {
    path: "/user-creation-step-four",
    name: "MyCreationStepFour",
    component: () => import("../views/MyCreationStepFour.vue"),
  },
  {
    path: "/search-results",
    name: "MySearchResults",
    component: () => import("../views/MySearchResults.vue"),
  },
  {
    path: "/final-submit",
    name: "FinalSubmit",
    component: () => import("../views/FinalSubmit.vue"),
  },
  {
    path: "/kontak",
    name: "KontakForm",
    component: () => import("../views/KontakForm.vue"),
  },
  // {
  //   path: "/user-creation",
  //   name: "UserCreation",
  //   component: () =>
  //     import(
  //        "../views/UserCreation.vue"
  //     ),
  // },
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
