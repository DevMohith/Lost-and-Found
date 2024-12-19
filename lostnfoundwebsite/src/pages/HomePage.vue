<template>
  <div class="homepage">
    <Navbar/>
    <section class="section lost">
      <div class="text-content">
        <h2><span class="highlight">Lost</span> an Item? No worries!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci
          elit, scelerisque fringilla risus non, fringilla imperdiet lectus.
        </p>
        <div class="buttons">
          <router-link to="/reportLost"><button class="btn-danger">Report Lost Item</button></router-link>
          <router-link to="/lostItems"><button class="btn-outline-danger">Lost Item</button></router-link>
        </div>
      </div>
      <div class="image-content">
        <img src="../assets/images/lostLogo.png" alt="Lost Logo" />
      </div>
    </section>

    <section class="section found">
      <div class="image-content">
        <img src="../assets/images/foundLogo.png" alt="Found Logo" />
      </div>
      <div class="text-content">
        <h2><span class="highlight">Found</span> an Item? Good you are!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci
          elit, scelerisque fringilla risus non, fringilla imperdiet lectus.
        </p>
        <div class="buttons">
          <router-link to="/reportLost"><button class="btn-success">Report Found Item</button></router-link>
          <router-link to="/foundItems"><button class="btn-outline-success">Found Item</button></router-link>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Footer,
  }
};
</script>

<style scoped>

* {
  background-color: #F5F5F6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 100px;
  padding: 20px;
}

.section .text-content {
  max-width: 50%;
}

.section h2 {
  font-size: 1.8rem;
}

.section .highlight {
  color: #007bff;
}

.section p {
  color: #666;
  margin: 20px 0;
}

.section .buttons button {
  margin-right: 15px;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.btn-danger {
  background: #dc3545;
  color: white;
  border: none;
}

.btn-outline-danger {
  background: transparent;
  border: 2px solid #dc3545;
  color: #dc3545;
}

.btn-success {
  background: #28a745;
  color: white;
  border: none;
}

.btn-outline-success {
  background: transparent;
  border: 2px solid #28a745;
  color: #28a745;
}

.image-content img {
  max-width: 300px;
  height: auto;
  border-radius: 8px;
}  
</style>
