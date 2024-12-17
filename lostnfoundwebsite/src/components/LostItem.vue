<template>
  <div class="product-card">
    <img :src="lostitem.image" :alt="lostitem.name" class="product-image" />
    <h3 class="product-name">{{ lostitem.name }}</h3>
    <p class="product-description">{{ lostitem.category }}</p>
    <p class="product-description">{{ lostitem.location }}</p>
    <p class="product-description">{{ lostitem.brand }}</p>
    <p class="product-description">{{ lostitem.color }}</p>
    <div class="buttonDiv">
     <router-link v-if="mode === 'view'" :to="`/lostitems/${lostitem.id}`">
        <button class="view-more-btn">View More</button>
      </router-link>
      <div v-else-if="mode === 'manage'">
        <button class="edit-btn" @click="$emit('edit', lostitem)">Edit</button>
  <button class="delete-btn" @click="$emit('delete', lostitem.id)">Delete</button>
      </div>      
    </div>
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
     mode: {
      type: String,
      default: "view",
    },
      },
 
};
</script>

<style>
.product-card {
  width: 18rem;
  border: 1px solid #6889FF;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 14px;
  background-color: #fff;
  /* text-align: center; */
  height: 100%;
}

.product-image {
  width: 100%;  
  max-width: 18rem;
  max-height: 19rem;
  height: 100%;
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
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;
}
.edit-btn{
  background-color: #ffa500;
}
.delete-btn{
  background-color: #e80000;
}

.edit-btn:hover {
  background-color: #e5a125;
}

.delete-btn:hover {
  background-color: #ca0000;
}

</style>