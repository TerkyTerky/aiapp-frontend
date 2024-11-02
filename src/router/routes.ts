import HomeView from "@/views/HomeView.vue";
import { RouteRecordRaw } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/UserLoginView.vue";
import UserRegisterView from "@/views/userRegisterView.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: UserLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: UserLoginView,
      },
      {
        path: "register",
        name: "register",
        component: UserRegisterView,
      },
    ],
  },
];
