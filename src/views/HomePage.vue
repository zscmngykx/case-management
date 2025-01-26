<style scoped>
.home-page {
  display: flex;
  justify-content: center; /* 水平居中整个内容 */
  align-items: center; /* 垂直居中整个内容 */
  height: calc(90vh - 60px); /* 减去顶栏的高度（假设顶栏为 60px） */
  margin-top: 0; /* 移除可能的顶部外边距 */
  overflow: hidden; /* 防止内容溢出 */
}

.content-section {
  display: flex; /* 左右布局 */
  align-items: center;
  justify-content: center;
  gap: 40px; /* 增加间距 */
  max-width: 1000px; /* 增加内容区域宽度 */
  padding: 20px; /* 减少内边距 */
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
  margin-bottom: 10px; /* 减小标题和文字之间的距离 */
}

.text-container p {
  font-size: 20px; /* 增大描述字体 */
  color: #555;
}
</style>
