<template>
  <div class="navbar">
    <el-menu :default-active="activeMenu" class="el-menu-vertical" router>
      <!-- 公共菜单项 -->
      <el-menu-item index="/home">
        <i class="el-icon-house"></i>
        <span>Home</span>
      </el-menu-item>

      <!-- 根据角色动态显示菜单项 -->
      <template v-if="role === 'senior'">
        <el-menu-item index="/senior-cases">
          <i class="el-icon-folder"></i>
          <span>Senior Case List</span>
        </el-menu-item>
      </template>

      <template v-if="role === 'junior'">
        <el-menu-item index="/junior-cases">
          <i class="el-icon-folder"></i>
          <span>Junior Case List</span>
        </el-menu-item>
      </template>

      <!-- 公共菜单项 -->
      <el-menu-item index="/logout" @click="logout">
        <i class="el-icon-switch-button"></i>
        <span>Logout</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: "",
      role: "", // 当前用户角色
    };
  },
  mounted() {
    // 从 localStorage 中获取角色
    this.role = localStorage.getItem("role");
    this.activeMenu = this.$route.path; // 设置当前激活的菜单项
  },
  methods: {
    logout() {
      // 清除登录信息
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 200px;
  height: 100vh;
  background-color: #f5f5f5;
}
.el-menu {
  height: 100%;
}
</style>
