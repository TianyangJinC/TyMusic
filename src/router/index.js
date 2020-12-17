import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Main from "../views/main.vue";
import Recommend from "../views/recommend.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }, {
    path: '/main',
    name: 'Main',
    component: Main
  }, {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  }
];

const router = new VueRouter({
  routes
});

export default router;
