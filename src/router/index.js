import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";
import SeniorCaseManagement from "../views/SeniorCaseList.vue";
import JuniorCaseManagement from "../views/JuniorCaseList.vue";
import Login from "../views/LoginPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" }, // 默认重定向到登录页面
  { path: "/login", component: Login }, // 登录页面
  { path: "/home", component: Home, meta: { requiresAuth: true } }, // 首页
  {
    path: "/senior-cases",
    component: SeniorCaseManagement,
    meta: { requiresAuth: true, role: "senior" }, // 仅 senior 可访问
  },
  {
    path: "/junior-cases",
    component: JuniorCaseManagement,
    meta: { requiresAuth: true, role: "junior" }, // 仅 junior 可访问
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // 获取 token
  const role = localStorage.getItem("role"); // 获取角色

  // 如果路由需要认证
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      // 如果未登录，跳转到登录页面
      alert("Please log in first.");
      return next("/login");
    }
    if (to.meta.role && to.meta.role !== role) {
      // 如果角色不匹配，阻止访问并跳转回首页
      alert("Access denied: insufficient permissions.");
      return next("/home"); // 跳转到 Home 页面
    }
    // 如果认证通过，允许访问
    return next();
  }

  // 如果路由不需要认证，直接放行
  next();
});

export default router;
