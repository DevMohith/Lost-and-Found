<template>

      <h1 class="title">Report Lost</h1>
  
      
   
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: "ReportLostPage",
    components:{
      Navbar,
      Footer,
    },
  </script>
  
  <style scoped>
  .app {
    font-family: Arial, sans-serif;
    color: #000;
    background-color: #f8f8f8;
    padding: 0;
    margin: 0;
  }
  
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
  
  .nav {
    display: flex;
    
    align-items: center;
    gap: 10px;
  }
  
  #matriculation-id {
    width: 200px;
    padding: 8px;
    font-size: 12px;
    border: 1px solid #ccc; 
    border-radius: 6px; 
    background-color: #f0f0f0;
    color: #333;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
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
  
  
  .nav-link.active {
    border-bottom: 2px solid ;
    color: #0469ff;
  }
  
  .sign-out {
    width: 100px;
    height: 40px;
    border: 1px solid #0469ff;
    background-color: #fff;
    color: #0469ff;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .main {
    max-width: 995px;
    height: 700px;
    margin: 20px auto;
    padding: 32px 40px 32px 40px;
    background-color: #fff;
    border: 1px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 37px;
  }
  
  .title {
  
    font-size: 30px;
    font-weight: 600px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form {
    display: flex;
    border-radius: 15px;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 40px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .left-section, .right-section{
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  
   
  
  label {
    font-size: 14px;
    width: 300px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  
  input,
  select,
  textarea {
    padding: 20px;
    font-size: 14px;
    border: 1px solid #D0DAFF;
    border-radius: 10px;
    width: 400px;
    background-color: #f6f6f6;
  }
  
  select{
    width: 440px;
  }
  
  textarea {
    resize: none;
    width: 400px;
    height: 150px;
  }
  
  .file-input-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    color: #0469ff;
  }
  
  .submit-button {
    background-color: #0469ff;
    color: #fff;
    padding: 15px 30px 15px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    flex: 1 1 100%;
    text-align: center;
    margin-top: 30px;
  }
  
  .submit-button:hover{
    background-color: #0c4c8f;
  }
  </style>
  
  