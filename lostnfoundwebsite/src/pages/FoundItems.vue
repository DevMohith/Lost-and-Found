<template>
    <div>
        <Navbar />
        <div class="headnBack"><img class="go-back" src="../assets/icons/back.png" @click="goBack"><h1>Matching Found Items</h1></div>
        <div v-if="matches.length" >
      <MatchedItems v-for="(item, index) in matches"
        :key="index"
        :lostitem="item"        
        :showMatchScore="true"
        :matchScore="item.matchScore"/>
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
import MatchedItems from '../components/MatchedItems.vue';

export default {
    name: "FoundItems",
    components: { Navbar, Footer, MatchedItems },
    data() {
        return {
            matches: [],
        };
    },
    methods: {
    goBack() {
      this.$router.push("/lostItems");
    },
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

.go-back{
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    left: 13rem;
}
.headnBack{
    display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
</style>