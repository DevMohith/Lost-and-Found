<template>
  <div class="lost-items-page">

    <div class="sectionHeading"><h1>Lost Items</h1></div>
    <!-- Filter and Search Section -->
    <FilterandSearch />
    <div class="product-grid">
      <div
        class="product-card"
        v-for="lostItem in lostItems"
        :key="lostItem.id"
      >
        <img :src="lostItem.image" :alt="lostItem.name" class="product-image" />
        <h3 class="product-name">{{ lostItem.name }}</h3>
        <p class="product-description">{{ lostItem.location }}</p>
        <p class="product-description">{{ lostItem.description }}</p>
        <div class="buttonDiv"><button class="view-more-btn">View More</button></div>        
      </div>
    </div>
    
  </div>
</template>

<script>
import FilterandSearch from "../components/FilterandSearch.vue";

export default {
  name: "LostItems",
  components:{
    FilterandSearch,
  },
  data() {
    return {
      lostItems: [
        {
          id: 1,
          name: "Black Wallet",
          location: "Library",
          description: "Leather wallet with cards inside.",
          image: "https://placehold.co/400",
        },
        {
          id: 2,
          name: "iPhone 12",
          location: "Cafeteria",
          description: "Black iPhone with a cracked screen.",
          image: "https://placehold.co/400",
        },
        {
          id: 3,
          name: "Blue Backpack",
          location: "Bus Stop",
          description: "Backpack containing books and a laptop.",
          image: "https://placehold.co/400",
        },
        {
          id: 4,
          name: "Blue Backpack",
          location: "Bus Stop",
          description: "Backpack containing books and a laptop.",
          image: "https://placehold.co/400",
        },
        {
          id: 5,
          name: "Blue Backpack",
          location: "Bus Stop",
          description: "Backpack containing books and a laptop.",
          image: "https://placehold.co/400",
        },
        {
          id: 6,
          name: "Blue Backpack",
          location: "Bus Stop",
          description: "Backpack containing books and a laptop.",
          image: "https://placehold.co/400",
        }
        // Add more items as needed
      ],
    };
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
  width: 100%;
  max-width: 20rem;
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
