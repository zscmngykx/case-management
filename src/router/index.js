import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";
import CaseManagementPage from "../views/CaseManagementPage.vue";
import Login from "../views/LoginPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" }, // 默认重定向到首页
  { path: "/home", component: Home },
  { path: "/case-management", component: CaseManagementPage },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
