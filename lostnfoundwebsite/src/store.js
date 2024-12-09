import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    userAuthenticated(state, email) {
      state.user = email;
      const encodedEmail = window.btoa(email);
      sessionStorage.setItem("email", encodedEmail);
    },
  },
  actions: {},
  modules: {},
});
