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
    
  </div>
</template>

<script>
export default {
  name: "LostItems",
  
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
  padding: 10px 10px 10px 40px;
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

/* Dropdown Arrow Style for Consistency */

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
  padding: 10px 40px 10px 20px; 
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

</style>
