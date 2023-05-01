import { createStore } from 'vuex'

const state = createStore({
  state() {
    return {
      lang: ""
    }
  },
  getters: {
    getLang(state) {
      return state.lang;
    }
  },
  mutations: {
    setLang(state, payload) {
      state.lang = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})

export default state;
