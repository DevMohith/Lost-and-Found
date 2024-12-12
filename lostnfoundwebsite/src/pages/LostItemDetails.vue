<template>
  <div>
    <Navbar />
    <div class="item-details" v-if="item">
      <h2>{{ item.name }}</h2>
      <div class="details-container">
        <img :src="item.image" :alt="item.name" class="item-image" />
        <div class="details-content">
          <p class="detailText">Lost Date</p>
          <strong
            ><p>{{ item.lostDate }}</p></strong
          >
          <p class="detailText">Lost Location</p>
          <strong
            ><p>{{ item.location }}</p></strong
          >
          <p class="detailText">Brand</p>
          <strong
            ><p>{{ item.brand }}</p></strong
          >
          <p class="detailText">Color</p>
          <strong
            ><p>{{ item.color }}</p></strong
          >
          <!-- <button class="back-btn" @click="goBack">Back</button> -->
        </div>
        <div class="details-content">
          <p class="detailText">Description</p>
          <strong
            ><p>{{ item.description }}</p></strong
          >
          <p class="detailText">Contact Information</p>
          <strong><p>abc@anymail.com</p></strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "LostItemDetails",
  components: { Navbar },
  data() {
    return {
      item: null,
    };
  },
  methods: {
    async fetchItemDetails() {
      try {
        const id = this.$route.params.id;
        const response = await fetch(`http://localhost:5001/lostItems/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item details.");
        }
        this.item = await response.json();
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    },
    goBack() {
      this.$router.push({ name: "LostItems" });
    },
  },
  mounted() {
    this.fetchItemDetails();
  },
};
</script>
<style>
.item-details {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.details-container {
  display: flex;
  gap: 2rem;
  max-width: 900px;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #6889ff;
}

.item-image {
  width: 300px;
  height: auto;
  border-radius: 8px;
}

.details-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 95px;
}
.details-content p {
  margin-top: 5px;
  margin-bottom: 5px;
}
.detailText {
  color: #5b5966;
}

.back-btn {
  color: #0469ff;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  display: inline-block;
}
</style>