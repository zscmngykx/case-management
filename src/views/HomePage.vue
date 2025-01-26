<template>
  <div class="home-page">
    <!-- 顶部欢迎语 -->
    <div class="welcome-section">
      <h1>Hi, {{ role }}!</h1>
      <p>Welcome to the Case Management System. Keep up the great work!</p>
    </div>

    <!-- 主内容区域 -->
    <div class="content-section">
      <div class="image-placeholder">
        <p>Image will be placed here.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "", // 用户角色
    };
  },
  mounted() {
    // 从 localStorage 获取用户角色
    this.role = localStorage.getItem("role") || "Guest";
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

.welcome-section {
  margin-bottom: 20px;
}

.welcome-section h1 {
  font-size: 28px;
  color: #333;
}

.welcome-section p {
  font-size: 18px;
  color: #666;
}

.content-section {
  margin-top: 20px;
}

.content-section p {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.image-placeholder {
  width: 100%;
  height: 200px; /* 预留图片高度 */
  background-color: #f0f0f0; /* 浅灰色背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px dashed #ccc; /* 虚线边框，表示占位区域 */
}

.image-placeholder p {
  font-size: 14px;
  color: #999;
}
</style>
