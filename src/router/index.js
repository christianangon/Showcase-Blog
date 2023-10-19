/*
 * @Description:
 * @Author: Ian
 * @Date: 2023-10-19 17:29:19
 * @LastEditTime: 2023-10-19 19:26:23
 * @LastEditors: Ian
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
