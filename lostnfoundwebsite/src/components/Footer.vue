<template>
    <footer class="footer">
      <div class="footer-links">
        <router-link class="footer-link" to="/LostItems">Lost</router-link>
        <router-link class="footer-link" to="/FoundItems">Found</router-link>
        <router-link class="footer-link" to="/ReportLost">Report Lost</router-link>
        <router-link class="footer-link" to="/ReportFound">Report Found</router-link>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 LOST & FOUND. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #002246;
    color: white;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
  }
  
  .footer-link {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
  }
  
  .footer-link:hover {
    color: #0469ff;
  }
  
  .footer-copyright p {
    font-size: 14px;
    margin: 0;
  }
  </style>
  