import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null, // 存储登录令牌
    role: null,  // 存储用户角色（senior 或 junior）
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
  },
  actions: {
    login({ commit }, user) {
      const token = "fake_token_example"; // 模拟生成的令牌
      commit("SET_TOKEN", token);
      commit("SET_ROLE", user.role); // 存储用户角色
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role); // 将角色存储到本地
    },
    logout({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_ROLE", null); // 清除角色信息
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token, // 检查是否已登录
    userRole: (state) => state.role, // 返回用户角色
  },
});
