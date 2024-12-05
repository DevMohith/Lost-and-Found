<template>
    <div class="page-container">
    <div class="report-lost-page">
      <h1>Report a Lost Item</h1>
      <form @submit.prevent="handleSubmit">
        <div class="report-form">
          <label for="itemDescription">Item Description</label>
          <textarea v-model="form.itemDescription" id="itemDescription" required></textarea>
        </div>
   
        <div class="report-form">
          <label for="dateLost">Date Lost</label>
          <input type="date" v-model="form.dateLost" id="dateLost" required />
        </div>
   
        <div class="report-form">
          <label for="lostLocation">Lost Location </label>
          <input type="text" v-model="form.lostLocation" id="locationLost" required />
        </div>
   
        <div class="report-form">
          <label for="contactInfo">Contact Information</label>
          <input type="text" v-model="form.contactInfo" id="contactInfo" required />
        </div>
   
        <div class="report-form">
          <label for="fileUpload">Upload an Image (Optional)</label>
          <input type="file" @change="handleFileUpload" id="fileUpload" />
        </div>
   
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  </template>
   
  <script>
  export default {
    data() {
      return {
        form: {
          itemDescription: '',
          dateLost: '',
          locationLost: '',
          contactInfo: '',
          file: null,
        },
      };
    },
    methods: {
      handleFileUpload(event) {
        this.form.file = event.target.files[0];
      },
      handleSubmit() {
        console.log(this.form); 
        alert('Form submitted!');
        this.resetForm();
      },
      resetForm() {
        this.form = {
          itemDescription: '',
          dateLost: '',
          locationLost: '',
          contactInfo: '',
          file: null,
        };
      },
    },
  };
  </script>
   
  <style scoped>
  .page-container {
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   
  .report-lost-page {
    background: rgba(255, 255, 255, 0.9);/* White background with slight transparency */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for better visibility */
    max-width: 500px;
    width: 100%;
  }
   
  .report-lost-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
  }
  .report-form {
    margin-bottom: 15px;
  }
   
  h1 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  textarea,
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background: green;
  }
  </style>