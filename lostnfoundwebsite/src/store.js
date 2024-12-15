import { createStore } from "vuex";
import * as util from "./util";

export default createStore({
  state: {
    user: null,
    lostItems: [],
    selectedLostItem: null,
    myPosts: [],
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
      const matriculationNumber = localStorage.getItem(
        "loggedInUserMatriculationId"
      );
      const items = await util.fetchLostItems();
      const myPosts = items.filter(
        (item) => item.matriculationId === matriculationNumber
      );
      commit("setMyPosts", myPosts);
    },
    async deleteLostItem({ commit }, id) {
      try {
        const res = await fetch(`http://localhost:5001/lostItems/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          commit("deletePost", id);
        } else {
          alert("Failed to delete post.");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },
    async updateLostItem({ commit }, updatedPost) {
      try {
        const res = await fetch(`http://localhost:5001/lostItems/${updatedPost.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        });
        if (res.ok) {
          const data = await res.json();
          commit("updatePost", data);
        } else {
          alert("Failed to update post.");
        }
      } catch (error) {
        console.error("Error updating post:", error);
      }
    },
  },
  modules: {},
});
