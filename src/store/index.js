import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    login({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token) // 存储 token
    },
    logout({ commit }) {
      commit('SET_TOKEN', null)
      localStorage.removeItem('token')
    }
  },
  getters: {
    isAuthenticated: state => !!state.token
  }
})