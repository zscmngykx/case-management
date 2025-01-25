import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";
import SeniorCaseManagement from "../views/SeniorCaseList.vue";
import JuniorCaseManagement from "../views/JuniorCaseList.vue";
import Login from "../views/LoginPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" }, // 默认重定向到登录页面
  { path: "/home", component: Home, meta: { requiresAuth: true } },
  {
    path: "/senior-cases",
    component: SeniorCaseManagement,
    meta: { requiresAuth: true, role: "senior" },
  },
  {
    path: "/junior-cases",
    component: JuniorCaseManagement,
    meta: { requiresAuth: true, role: "junior" },
  },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // 获取存储的 token
  const role = localStorage.getItem("role"); // 获取存储的角色

  // 如果路由需要认证
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      // 如果没有 token，重定向到登录页面
      return next("/login");
    }
    if (to.meta.role && to.meta.role !== role) {
      // 如果角色不匹配，阻止访问并跳转回之前的页面
      alert("Access denied: insufficient permissions.");
      return next(from.path || "/login"); // 防止死循环
    }
    // 如果认证通过，放行
    return next();
  }

  // 如果路由不需要认证，直接放行
  next();
});

export default router;
