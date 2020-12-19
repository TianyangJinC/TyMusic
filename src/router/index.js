import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Recommend from "../views/recommend.vue";
import Search from "../views/search.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }, {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }
];

const router = new VueRouter({
  routes
});

export default router;
