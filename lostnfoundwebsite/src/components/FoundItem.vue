<template>
  <div class="product-card">
    <img :src="founditem.image" :alt="founditem.name" class="product-image" />
    <h3 class="product-name">{{ founditem.name }}</h3>
    <p class="product-description">{{ founditem.category }}</p>
    <p class="product-description">{{ founditem.location }}</p>
    <p class="product-description">{{ founditem.brand }}</p>
    <p class="product-description">{{ founditem.color }}</p>
    <div class="buttonDiv">
   <button class="edit-btn" @click="$emit('edit', founditem)">Edit</button>
  <button class="delete-btn" @click="$emit('delete', founditem.id)">Delete</button>     
    </div>
  </div>
</template>

<script>
export default {
  name: "FoundItem",
  props: {
    founditem: {
      type: Object,
      required: true,
    },
     
  },
 
};
</script>

<style scoped>
.product-card {
  width: 20rem;
  border: 1px solid #6889ff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 14px;
  background-color: #fff;
  /* text-align: center; */
  height: 100%;
}

.product-image {
  width: 100%;
  max-width: 20rem;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 4px 0;
  color: #333;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
}

.buttonDiv {
  text-align: center;
}
.view-more-btn {
  background-color: #0469ff;
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
.edit-btn,
.delete-btn {
  background-color: #0469ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;
}

.edit-btn:hover {
  background-color: #ffa500;
}

.delete-btn:hover {
  background-color: #ff4d4d;
}
</style>