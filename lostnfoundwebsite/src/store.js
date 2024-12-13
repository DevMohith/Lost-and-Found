import { createStore } from 'vuex';
import * as util from "./util";

export default createStore({
  state: {
    user: null,
    lostItems: [], 
    selectedLostItem: null, 
  },
  getters: {
    getLostItemById: (state) => (id) => {
      return state.lostItems.find((item) => item.id === id);
    },
  },
  mutations: {
    userAuthenticated(state, email) {
      state.user = email;
      const encodedEmail = window.btoa(email);
      sessionStorage.setItem("email", encodedEmail);
    },
    setLostItems(state, items) {
      state.lostItems = items;
    },
    setSelectedLostItem(state, item) {
      state.selectedLostItem = item;
    },
  },
  actions: {
    async fetchLostItems({ commit }) {
      const items = await util.fetchLostItems();
      commit("setLostItems", items);
    },
    async fetchLostItemById({ commit }, id) {
      const item = await util.fetchLostItem(id);
      commit("setSelectedLostItem", item);
    },
  },
  modules: {},
});
