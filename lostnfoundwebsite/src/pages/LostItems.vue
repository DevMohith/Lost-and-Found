<template>
  <div class="lost-items-page">
    <Navbar />
    <div class="sectionHeading">
      <h1>Lost Items</h1>
    </div>
    <FilterandSearch
      :lostItems="lostItems"
      @filtered-items="updateFilteredItems"
    />
    <div class="product-grid">
      <LostItem
        v-for="item in filteredItems"
        :key="item.id"
        :lostitem="item"
        mode="view"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FilterandSearch from "../components/FilterandSearch.vue";
import Navbar from "../components/Navbar.vue";
import LostItem from "../components/LostItem.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "LostItems",
  components: {
    FilterandSearch,
    Navbar,
    LostItem,
    Footer,
  },
  data() {
    return {
      filteredItems: [],
    };
  },
  computed: {
    ...mapState(["lostItems"]),
  },
  methods: {
    ...mapActions(["fetchLostItems"]),
    updateFilteredItems(filtered) {
      this.filteredItems = filtered;
    },
    redirectIfNotLoggedIn() {
      const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
      if (!loggedInUserEmail) {
        window.alert("User is not logged in. Please sign in.");
        this.$router.push("/login");
      }
    },
  },
  async mounted() {
    this.redirectIfNotLoggedIn();
    await this.fetchLostItems();
    this.filteredItems = this.lostItems;
  },
};
</script>



<style>
.sectionHeading{
    text-align: center;
    padding: 1rem;
}
  .product-grid {
  display: flex;
  flex-wrap: wrap; 
  gap: 20px;
  justify-content: space-evenly;
  margin-left: 6rem;
  margin-right: 6rem;
  margin-bottom: 3rem;
}


</style>
