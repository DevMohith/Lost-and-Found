<template>
  <Navbar />
  <div class="myposts-page">
    <h1>My Posts</h1>
    <section>
      <h2>Lost Items</h2>
      <div v-if="myPosts.length" class="product-grid">
        <LostItem
          v-for="post in myPosts"
          :key="post.id"
          :lostitem="post"
          mode="manage"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </div>
      <div v-else class="no-posts product-grid">
        <p>You have not posted any lost items yet.</p>
      </div>
    </section>
    <!-- <section>
      <h2>Found Items</h2>
      <div class="items-grid">
        <div v-for="item in foundItems" :key="item.id" class="item-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p>Location: {{ item.location }}</p>
          <p>Date: {{ item.date }}</p>
        </div>
        <p v-if="foundItems.length === 0">No found items posted.</p>
      </div>
    </section> -->
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LostItem from "../components/LostItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "MyPosts",
  components: {
    Navbar,
    Footer,
    LostItem,
  },
  computed: {
    ...mapState(["myPosts"]),
  },
  methods: {
    ...mapActions(["fetchMyPosts", "deleteLostItem", "updateLostItem"]),
    handleEdit(item) {
      this.$router.push({
        name: "ReportLost",
        query: { edit: true, ...item },
      });
    },
    async handleDelete(id) {
      const confirmed = confirm(
        "Are you sure you want to delete this lost item post?"
      );
      if (confirmed) {
        await this.deleteLostItem(id);
        this.fetchMyPosts();
      }
    },
  },
  async created() {
    await this.fetchMyPosts();
  },
};
</script>

<style scoped>
.myposts-page {
  padding: 20px;
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

.item-card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  background: #fff;
}
</style>
