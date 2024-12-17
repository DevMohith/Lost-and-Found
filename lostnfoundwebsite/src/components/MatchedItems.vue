<template>
  <div>    
    <div class="item-details" v-if="lostitem">
      <h2>Matching Score - {{ lostitem.matchScore }}%</h2>
      <div class="details-container">
        <img :src="lostitem.image" :alt="lostitem.name" class="item-image" />
        <div class="details-content">
          <p class="detailText">Item Name</p>
          <strong
            ><p>{{ lostitem.name }}</p></strong
          >
          <p class="detailText">Lost Date</p>
          <strong
            ><p>{{ lostitem.date }}</p></strong
          >
          <p class="detailText">Lost Location</p>
          <strong
            ><p>{{ lostitem.location }}</p></strong
          >
          <p class="detailText">Item Category</p>
          <strong
            ><p>{{ lostitem.category }}</p></strong
          >
          <p class="detailText">Brand</p>
          <strong
            ><p>{{ lostitem.brand }}</p></strong
          >
          <p class="detailText">Color</p>
          <strong
            ><p>{{ lostitem.color }}</p></strong
          >
          <!-- <button class="back-btn" @click="goBack">Back</button> -->
        </div>
        <div class="details-content">
          <p class="detailText">Description</p>
          <strong
            ><p>{{ lostitem.description }}</p></strong
          >
          <p class="detailText">Contact Information</p>
          <strong><p>{{ lostitem.contact }}</p></strong>          
        </div>
      </div>
    </div>    
  </div>
</template>


<script>
export default {
  name: "MatchedItems",
  props: {
    lostitem: {
        type:Object,
        required:true,
    },
    showMatchScore: {
        type:Boolean,
        default:false,
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