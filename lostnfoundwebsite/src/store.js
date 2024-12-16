import { createStore } from "vuex";
import * as util from "./util";

export default createStore({
  state: {
    user: null,
    lostItems: [],
    selectedLostItem: null,
    myPosts: [],
    myFoundItems: [],
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
    setMyPosts(state, items) {
      state.myPosts = items;
    },
    deletePost(state, id) {
      state.myPosts = state.myPosts.filter((post) => post.id !== id);
    },
    updatePost(state, updatedPost) {
      const index = state.myPosts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state.myPosts.splice(index, 1, updatedPost);
      }
    },
    setMyFoundItems(state, items) {
      state.myFoundItems = items;
    },
    removeFoundItem(state, id) {
      state.myFoundItems = state.myFoundItems.filter((item) => item.id !== id);
    },
    updateFoundItem(state, updatedItem) {
      const index = state.myFoundItems.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state.myFoundItems.splice(index, 1, updatedItem);
      }
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
    async fetchMyPosts({ commit }) {
      const matriculationNumber = localStorage.getItem("loggedInUserMatriculationId");
      const items = await util.fetchLostItems();
      const myPosts = items.filter((item) => item.matriculationId === matriculationNumber);
      commit("setMyPosts", myPosts);
    },
    async deleteLostItem({ commit }, id) {
      const success = await util.deleteLostItem(id);
      if (success) {
        commit("deletePost", id);
      } else {
        alert("Failed to delete the lost item.");
      }
    },
    async updateLostItem({ commit }, updatedItem) {
      const updated = await util.updateLostItem(updatedItem);
      commit("updatePost", updated);
    },
    async fetchMyFoundItems({ commit }) {
      const matriculationId = localStorage.getItem("loggedInUserMatriculationId");
      const foundItems = await util.fetchFoundItems();
      const myFoundItems = foundItems.filter(
        (item) => item.matriculationId === matriculationId
      );
      commit("setMyFoundItems", myFoundItems);
    },
    async deleteFoundItem({ commit }, id) {
      const success = await util.deleteFoundItem(id);
      if (success) {
        commit("removeFoundItem", id);
      } else {
        alert("Failed to delete the found item.");
      }
    },
    async updateFoundItem({ commit }, updatedItem) {
      const updated = await util.updateFoundItem(updatedItem);
      commit("updateFoundItem", updated);
    },
  
  },
  modules: {},
});
