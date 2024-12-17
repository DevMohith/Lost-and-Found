<template>
    <div class="filter-search-section">

      <div class="filter-container">
        <img class="filter-icon" src="../assets/icons/filterP.png">
        <select class="filter-dropdown" v-model="selectedLocation" @change="applyFilters">
          <option value="" disabled selected>Filter by Location</option>
          <option value="all">All</option>
          <option value="Library">Library</option>
          <option value="Cafeteria">Cafeteria</option>
          <option value="Blue Tower">Blue Tower</option>
          <option value="Bonhoefferstraße 13">Bonhoefferstraße 13</option>
          <option value="SRH Campus Tram station">SRH Campus Tram station</option>
          <option value="Ochsenkopf Tram Station">Ochsenkopf Tram Station</option>
          <option value="Bonhoefferstraße 9">Bonhoefferstraße 9</option>
          <option value="SRH Parkplatz">SRH Parkplatz</option>
          <option value="SRH Gym">SRH Gym</option>
          <option value="MPS 3">MPS 3</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div class="search-container">
        <input 
          type="text" 
          class="search-input"
          placeholder="Search here"
          @input="applyFilters"
          v-model="searchQuery" 
        />
        <img class="search-icon" src="../assets/icons/searchIcon.png">
      </div>
    </div>
</template>

<script>
export default {
    name:"FilterandSearch",
    props: {
      lostItems: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        searchQuery: "",
        selectedLocation: "",
      }
    },
    methods: {
    applyFilters() {
      const filtered = this.lostItems.filter((item) => {
        const matchesSearch = this.searchQuery === "" || 
          item.name?.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
          item.category?.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesLocation = this.selectedLocation === "all" || this.selectedLocation === "" || 
          item.location === this.selectedLocation;
        
        return matchesSearch && matchesLocation;
      });
      this.$emit("filtered-items", filtered);
    },
  },
}
</script>


<style>
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
  width: 470px;
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
</style>