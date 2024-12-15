<template>
    <div>
      <Navbar />
      <h1>Matching Found Items</h1>
      <div v-if="matches.length">
        <div v-for="(item, index) in matches" :key="index" class="match-item">
          <h3>{{ item.name }}</h3>
          <p>Category: {{ item.category }}</p>
          <p>Color: {{ item.color }}</p>
          <p>Location: {{ item.location }}</p>
          <p>Match Score: {{ item.matchScore }}%</p>
        </div>
      </div>
      <div v-else>
        <p>No matching items found.</p>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    name: "FoundItems",
    components: { Navbar, Footer },
    data() {
      return {
        matches: [],
      };
    },
    created() {
      const matchesQuery = this.$route.query.matches;
      if (matchesQuery) {
        this.matches = JSON.parse(matchesQuery);
      }
    },
  };
  </script>
  
  <style>
  .match-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  