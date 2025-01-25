<template>
  <el-container style="height: 100vh;">
    <!-- 左侧导航栏 -->
    <el-aside width="200px" class="navbar">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        background-color="#4CAF50"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        @select="handleMenuSelect"
      >
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="/case-management">
          <i class="el-icon-s-management"></i>
          <span>Case Management</span>
        </el-menu-item>
        <el-menu-item index="/login">
          <i class="el-icon-s-tools"></i>
          <span @click.stop="logout">Logout</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 内容区域 -->
    <el-main class="content">
      <!-- 插槽，用于动态加载子页面内容 -->
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: "/home", // 默认激活首页
    };
  },
  watch: {
    $route(to) {
      // 动态监听路由变化，更新 activeMenu
      this.activeMenu = to.path;
    },
  },
  mounted() {
    // 页面加载时设置 activeMenu 为当前路由
    this.activeMenu = this.$route.path;
  },
  methods: {
    handleMenuSelect(index) {
      // 避免重复导航到当前路由
      if (this.$route.path !== index) {
        this.$router.push(index).catch((err) => {
          if (err.name !== "NavigationDuplicated") {
            console.error(err); // 仅输出非重复导航的错误
          }
        });
      }
    },
    logout() {
      // 登出逻辑
      this.$store.dispatch("logout");
      this.activeMenu = "/login"; // 重置激活菜单项
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #4caf50;
  color: #fff;
  height: 100%; /* 高度填满页面 */
}

/* 内容区域样式 */
.content {
  padding: 20px;
  overflow: auto; /* 内容区域可滚动 */
}
</style>
