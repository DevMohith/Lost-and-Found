<template>
    <div>
        <Navbar />
        <h1>Matching Found Items</h1>
        <div v-if="matches.length" class="card-container">
      <LostItem
        v-for="(item, index) in matches"
        :key="index"
        :lostitem="item"
        mode="view"
        :showMatchScore="true"
        :matchScore="item.matchScore"
      />
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
import LostItem from "@/components/LostItem.vue";

export default {
    name: "FoundItems",
    components: { Navbar, Footer, LostItem },
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

.card-container {
  display: flex;
  flex-wrap: wrap; /* Allows cards to wrap into the next row */
  justify-content: center; /* Center the cards horizontally */
  gap: 20px; /* Space between cards */
  margin: 0 auto;
}
</style>