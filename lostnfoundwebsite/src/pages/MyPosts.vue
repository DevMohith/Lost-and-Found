<template>
  <Navbar />
  <div class="myposts-page">
    <h1>My Posts</h1>
    <section class="lostSec">
      <h2>Lost Items</h2>
      <div v-if="myPosts.length" class="product-grid">
        <LostItem
          v-for="post in myPosts"
          :key="post.id"
          :lostitem="post"
          mode="manage"
          @edit="handleLostEdit"
          @delete="handleLostDelete"
        />
      </div>
      <div v-else class="no-posts product-grid">
        <p>You have not posted any lost items yet.</p>
      </div>
    </section>
    <section>
      <h2>Found Items</h2>
      <div v-if="myFoundItems.length" class="product-grid">
        <FoundItem
          v-for="post in myFoundItems"
          :key="post.id"
          :founditem="post"
          @edit="handleFoundEdit"
          @delete="handleFoundDelete"
        />
      </div>
      <div v-else class="no-posts product-grid">
        <p>You have not posted any found items yet.</p>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LostItem from "../components/LostItem.vue";
import FoundItem from "../components/FoundItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "MyPosts",
  components: {
    Navbar,
    Footer,
    LostItem,
    FoundItem,
  },
  computed: {
    ...mapState(["myPosts", "myFoundItems"]),
  },
  methods: {
  ...mapActions(["fetchMyPosts", "fetchMyFoundItems", "deleteLostItem", "deleteFoundItem"]),
  handleLostEdit(item) {
    this.$router.push({ name: "ReportLost", query: { edit: true, isLostItem: "true", ...item } });
  },
  async handleLostDelete(id) {
    await this.deleteLostItem(id);
    this.fetchMyPosts();
  },
  handleFoundEdit(item) {
    this.$router.push({ name: "ReportLost", query: { edit: true, isLostItem: "false", ...item } });
  },
  async handleFoundDelete(id) {
    await this.deleteFoundItem(id);
    this.fetchMyFoundItems();
  },
},
  async created() {
    await Promise.all([this.fetchMyPosts(), this.fetchMyFoundItems()]);
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
.lostSec{
  border-bottom: 1px solid #e0e0e0;
}
</style>
