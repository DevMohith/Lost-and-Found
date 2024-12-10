<template>
    <div class="product-card">
        <img :src="lostitem.image" :alt="lostitem.name" class="product-image" />
        <h3 class="product-name">{{ lostitem.name }}</h3>
        <p class="product-description">{{ lostitem.location }}</p>
        <p class="product-description">{{ lostitem.description }}</p>
        <div class="buttonDiv"><button class="view-more-btn">View More</button></div>        
      </div>
</template>

<script>
export default {
  name: "LostItem",
  props: {
    lostitem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

/* Individual product card */
.product-card {
  width: 20rem;
  border: 1px solid #6889FF;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 14px;
  background-color: #fff;
  /* text-align: center; */
  height: 100%;
}

/* Product image */
.product-image {
  width: 100%;
  max-width: 20rem;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

/* Product name */
.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 4px 0;
  color: #333;
}

/* Product description */
.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
}

/* View more button */
.buttonDiv{
    text-align: center;
}
.view-more-btn {
  background-color: #0469FF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.view-more-btn:hover {
  background-color: #0056b3;
}

</style>