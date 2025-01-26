<template>
  <div class="login_face">
    <div class="login_box">
      <div class="img_box"></div> <!-- Profile image box -->

      <!-- Login form -->
      <div class="login_msg">
        <!-- Username input -->
        <el-input
          placeholder="Enter your username"
          v-model="username"
          clearable
          id="account"
        ></el-input>
        <!-- Password input -->
        <el-input
          placeholder="Enter your password"
          v-model="password"
          id="password"
          show-password
        ></el-input>
        <!-- Login button -->
        <el-button id="btn" type="primary" @click="login">Log In</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { users } from "@/mockData/users"; // 引入本地用户数据

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.username) {
        this.$message({
          message: "Username cannot be empty!",
          type: "warning",
        });
        return;
      }
      if (!this.password) {
        this.$message({
          message: "Password cannot be empty!",
          type: "warning",
        });
        return;
      }

      // 检查用户是否存在
      const user = users.find(
        (u) => u.username === this.username && u.password === this.password
      );

      if (user) {
        // 保存用户信息到 localStorage
        localStorage.setItem("token", "testToken"); // 模拟 token
        localStorage.setItem("role", user.role);

        // 登录成功，跳转到 Home 页面
        this.$router.push("/home");
      } else {
        this.$message({
          message: "Invalid username or password",
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
/* 保留原始样式 */
.login_msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 400px;
  height: 300px;
  margin: auto;
  margin-top: 3px;
}

#account,
#password {
  width: 400px;
  height: 50px;
  margin: 15px;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 25px;
}

#btn {
  width: 220px;
  height: 50px;
  border-radius: 40px;
  margin: 0;
  background-color: #ba0a26;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}

#btn:hover {
  background-color: #8a081e;
}

.login_face {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-size: cover;
}

.login_box {
  width: 550px;
  height: 450px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.65);
}

.img_box {
  width: 130px;
  height: 130px;
  background-image: url('@/assets/profile.png'); /* 确保路径正确 */
  background-size: cover;
  border-radius: 50%;
  border: white solid 6px;
  margin: auto;
  margin-top: -68px;
}
</style>
