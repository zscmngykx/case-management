<template>
  <div id="app">
    <!-- 判断是否显示导航栏 -->
    <div v-if="showNavbar" class="layout">
      <!-- 左侧导航栏 -->
      <Navbar />
      <!-- 右侧内容区域 -->
      <div class="content">
        <router-view />
      </div>
    </div>

    <!-- 登录页面等不需要导航栏的页面 -->
    <div v-else class="standalone-page">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    showNavbar() {
      // 仅在非登录页面显示导航栏
      return this.$route.path !== "/login";
    },
  },
};
</script>

<style>
/* 全局布局样式 */

/* 含导航栏的布局 */
.layout {
  display: flex; /* 水平排列 */
  height: 100vh; /* 页面全高 */
  margin: 0;
}

/* 侧边栏样式 */
.navbar {
  width: 200px;
  background-color: #f5f5f5;
  height: 100vh;
}

/* 内容区域样式 */
.content {
  flex: 1; /* 填充剩余空间 */
  padding: 20px;
  overflow: auto;
  background-color: #fff;
}

/* 登录页面等独立页面样式 */
.standalone-page {
  height: 100vh; /* 页面全高 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4; /* 单独背景 */
}

/* 重置样式 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
