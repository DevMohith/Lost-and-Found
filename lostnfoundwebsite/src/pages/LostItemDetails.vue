<template>
  <div>
    <Navbar />    
    <div class="item-details" v-if="lostItem">
      <div class="heading">
        <img class="go-back" src="../assets/icons/back.png" @click="goBack">
        <h2>{{ lostItem.name }}</h2>
      </div>
      <div class="details-container">
        <img :src="lostItem.image" :alt="lostItem.name" class="item-image" />
        <div class="details-content">
          <p class="detailText">Lost Date</p>
          <strong
            ><p>{{ lostItem.date }}</p></strong
          >
          <p class="detailText">Lost Location</p>
          <strong
            ><p>{{ lostItem.location }}</p></strong
          >
          <p class="detailText">Item Category</p>
          <strong
            ><p>{{ lostItem.category }}</p></strong
          >
          <p class="detailText">Brand</p>
          <strong
            ><p>{{ lostItem.brand }}</p></strong
          >
          <p class="detailText">Color</p>
          <strong
            ><p>{{ lostItem.color }}</p></strong
          >
          <!-- <button class="back-btn" @click="goBack">Back</button> -->
        </div>
        <div class="details-content">
          <p class="detailText">Description</p>
          <strong
            ><p>{{ lostItem.description }}</p></strong
          >
          <p class="detailText">Contact Information</p>
          <strong><p>{{ lostItem.contact }}</p></strong>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import Navbar from "../components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LostItemDetails",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapState(["selectedLostItem"]),
    lostItem() {
      return this.selectedLostItem;
    },
  },
  async created() {
    const id = this.$route.params.id;
    await this.fetchLostItemById(id);
  },
  methods: {
    ...mapActions(["fetchLostItemById"]),
    goBack() {
      this.$router.push("/lostItems");
    },
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

.heading {
  display: flex;
  align-items: center;
  gap: 10px;
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
.go-back{
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    left: 13rem;
}
</style>