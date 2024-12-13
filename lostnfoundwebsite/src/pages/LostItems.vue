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
        v-for="lostItem in filteredItems" 
        :key="lostItem.id" 
        :lostitem="lostItem" 
        @view-details="viewDetails" 
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import FilterandSearch from "../components/FilterandSearch.vue";
import Navbar from "../components/Navbar.vue";
import LostItem from "../components/LostItem.vue";
import Footer from '@/components/Footer.vue';

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
      lostItems: [],
      filteredItems: [],
    };
  },
  methods: {
    async fetchLostItems() {
      try {
        const response = await fetch("http://localhost:5001/lostItems");
        if (!response.ok) {
          throw new Error("Failed to fetch lost items.");
        }
        const data = await response.json();
        this.lostItems = data;
        this.filteredItems = this.lostItems;
      } catch (error) {
        console.error("Error fetching lost items:", error);
      }
    },
    updateFilteredItems(filtered) {
      this.filteredItems = filtered;
    },
    viewDetails(item) {
      this.$router.push({ name: "LostItemDetails", params: { id: item.id } });
    },
  },
  mounted() {
    this.fetchLostItems();
  },
};
</script>


<style>
/* Filter and Search Section */
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

/* Individual product card */
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

/* Product image */
.product-image {
  width: 80%;
  height: 80%;
  max-width: 20rem;
  max-height: 20rem;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* Product name */
.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 4px 0;
  color: #333;
}

/* Product description */
.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
}

/* View more button */
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
