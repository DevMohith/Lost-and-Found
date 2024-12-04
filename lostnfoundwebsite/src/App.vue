<template>
<<<<<<< Updated upstream

  <LostItems />
</template>

<script>
import LostItems from "./components/LostItems.vue";


export default {
  name: 'App',
  components: {
    LostItems,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
=======
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Add global styles if needed */
#app {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
>>>>>>> Stashed changes
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");

</style>
