<template>
  <div class="lost-items-page">

    <div class="sectionHeading"><h1>Lost Items</h1></div>
    <!-- Filter and Search Section -->
    <div class="filter-search-section">
      <!-- Filter Dropdown -->
      <div class="filter-container">
        <img class="filter-icon" src="../assets/icons/filterP.png">
        <select class="filter-dropdown">
          <option value="" disabled selected>Filter by Category</option>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
          <option value="others">Others</option>
        </select>
      </div>
      <!-- Search Bar -->
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Item or location" />
        <img class="search-icon" src="../assets/icons/searchIcon.png">
      </div>
    </div>
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
export default {
  name: "LostItems",
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
.filter-search-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  }

/* Filter Container */
.filter-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  margin: 1rem;
}

/* Filter Icon */
.filter-icon {
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
  }

/* Filter Dropdown */
.filter-dropdown {
  width: 100%;
  padding: 13px 10px 13px 40px;
  font-size: 1rem;
  border: 1px solid #6889FF;
  border-radius: 28px;
  outline: none;
  appearance: none;
  background-color: #f9f9f9;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center; 
  background-size: 16px 16px;
  color: #333;
  cursor: pointer;
}

.filter-dropdown option {
  padding: 10px;
}

/* Search Container */
.search-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 400px;
  margin: 1rem;
}

/* Search Input */
.search-input {
  width: 100%;
  padding: 13px 40px 13px 20px; 
  font-size: 1rem;
  border: 1px solid #6889FF;
  border-radius: 28px; 
  outline: none;
  background-color: #f9f9f9;
  color: #333;
}

/* Search Icon */
.search-icon {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
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
