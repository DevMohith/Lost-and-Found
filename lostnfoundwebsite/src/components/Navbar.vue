<template>
    <header class="header">
      <div class="logo">LOST & FOUND</div>
      <nav class="nav">
        <div class="router-links">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/LostItems">Lost Items</router-link>
          <router-link class="nav-link" to="/ReportLost">Report Lost</router-link>
          <router-link class="nav-link" to="/ReportFound">Report Found</router-link>
        </div>
        <div class="profile-actions">
          <router-link v-if="!isUserLoggedIn" class="nav-link" to="/login" style="border: 1px solid #0469ff; color: #0469ff; border-radius: 10px;">Sign In</router-link>
          <router-link v-if="isUserLoggedIn" class="nav-link" to="/Profile">Profile</router-link>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: "NavbarComponent",
    computed: {
      ...mapState(['user']),
      isUserLoggedIn() {
        return this.user !== null;
      }
    },
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .logo {
    font-size: 20px;
    font-weight: bold;
  }
  
  .nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .router-links {
    display: flex;
    gap: 15px;
    padding: 10px;
    background-color: #fff;
  }
  
  .profile-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .nav-link {
    text-decoration: none;
    color: #000;
    padding: 5px 10px;
  }

  </style>
  