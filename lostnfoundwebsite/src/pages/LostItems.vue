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
  },
  async mounted() {
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

.product-card {
  width: 20rem;
  border: 1px solid #6889FF;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 14px;
  background-color: #fff;
  /* text-align: center; */
  height: 100%;
}

.product-image {
  width: 80%;
  height: 80%;
  max-width: 20rem;
  max-height: 20rem;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 4px 0;
  color: #333;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
}

.buttonDiv{
    text-align: center;
}
.view-more-btn {
  background-color: #0469FF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.view-more-btn:hover {
  background-color: #0056b3;
}

</style>
