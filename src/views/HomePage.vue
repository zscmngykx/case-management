<template>
  <navbar>
    <div class="home-page">
      <!-- 主内容区域 -->
      <div class="content-section">
        <!-- 左边图片 -->
        <div class="image-container">
          <img src="/dentist.png" alt="Welcome Image" class="home-image" />
        </div>
        <!-- 右边文字 -->
        <div class="text-container">
          <h2>Welcome to your workspace!</h2>
          <p>Manage your cases efficiently and effectively.</p>
        </div>
      </div>
    </div>
  </navbar>
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
  display: flex;
  justify-content: center; /* 水平居中整个内容 */
  align-items: center; /* 垂直居中整个内容 */
  height: 80vh; /* 占据全屏高度 */
}

.content-section {
  display: flex; /* 左右布局 */
  align-items: center;
  justify-content: center;
  gap: 40px; /* 增加间距 */
  max-width: 1000px; /* 增加内容区域宽度 */
  padding: 40px; /* 增加内边距 */
}

.image-container {
  flex: 1;
  text-align: center;
}

.home-image {
  width: 100%;
  max-width: 400px; /* 增大图片最大宽度 */
  border-radius: 12px;
}

.text-container {
  flex: 1.5;
  text-align: left;
}

.text-container h2 {
  font-size: 32px; /* 增大标题字体 */
  color: #333;
  margin-bottom: 15px;
}

.text-container p {
  font-size: 20px; /* 增大描述字体 */
  color: #555;
}
</style>
