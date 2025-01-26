<template>
    <div class="header-bar">
      <div class="header-text">
        <span>Welcome, {{ role }}!</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderBar",
    data() {
      return {
        role: "", // 当前用户角色
      };
    },
    mounted() {
      // 从 localStorage 中获取角色
      this.role = localStorage.getItem("role") || "Guest";
    },
  };
  </script>
  
  <style scoped>
  .header-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* 将内容靠右对齐 */
    height: 60px; /* 顶栏高度 */
    padding: 0 20px;
    background-color: #f5f5f5; /* 和侧边栏一致 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  }
  
  .header-text {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  </style>
  