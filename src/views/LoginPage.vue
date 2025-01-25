<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // 模拟登录成功
        const token = 'fake_token_example' // 假设获取到一个 token
        this.$store.dispatch('login', token)
        this.$router.push('/home') // 登录成功后跳转到首页
      }
    }
  }
  </script>
  
  <style scoped>
  /* Login page styles */
  .login {
    max-width: 300px;
    margin: 0 auto;
    padding: 1rem;
  }
  form div {
    margin-bottom: 1rem;
  }
  label {
    display: block;
  }
  input {
    width: 100%;
    padding: 0.5rem;
  }
  button {
    width: 100%;
    padding: 0.5rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>