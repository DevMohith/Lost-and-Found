<template>
    <Navbar />
    <div class="myposts-page">

        <h1>My Posts</h1>
        <section>
            <h2>Lost Items</h2>
            <div class="items-grid">
                <div v-for="item in lostItems" :key="item.id" class="item-card">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <p>Location: {{ item.location }}</p>
                    <p>Date: {{ item.date }}</p>
                </div>
                <p v-if="lostItems.length === 0">No lost items found.</p>
            </div>
        </section>
        <section>
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
        </section>

    </div>
    <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";

export default {
    name: "MyPosts",
    components: {
        Navbar,
        Footer,
    },
    computed: {
        ...mapState(["posts", "user"]),
        lostItems() {
            return (this.posts || []).filter(post => post.type === "lost" && post.userId === this.user.id);
        },
        foundItems() {
            return (this.posts || []).filter(post => post.type === "found" && post.userId === this.user.id);
        },
    },
};
</script>

<style scoped>
.myposts-page {
    padding: 20px;
}

.items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 10px;
}

.item-card {
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 10px;
    background: #fff;
}
</style>