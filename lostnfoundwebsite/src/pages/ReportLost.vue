<template>
  <div id="app" class="app">
    <Navbar/>
    <h1 class="title">Report Lost</h1>

    <main class="main">
      
      <form @submit.prevent="submitLostItem" class="form">

          <div class="left-section">
        
          <div class="form-group">
            <label for="matriculation-id">Matriculation ID</label>
            <input
              class="box"
              type="text"
              id="matriculation-id"
              v-model="user.matriculationId"
              readonly
              placeholder="Fetching your Matriculation ID"
            />
          </div>

          <div class="form-group">
            <label for="item-name">Item Name</label>
            <input 
            class="box" 
            type="text" 
            id="item-name" 
            v-model="lostItem.name"  
            placeholder="Add your lost item" />
          </div>

          <div class="form-group">
            <label for="item-category">Item Category</label>
            <select id="item-category">
              <option>Electronics</option>
              <option>Bags</option>
              <option>Clothing</option>
              <option>Money</option>
              <option>Cards</option>
              <option>Others</option>
            </select>
          </div>

          <div class="form-group">
            <label for="item-color">Item Color</label>
            <select v-model="lostItem.color" id="item-color">
              <option class="box">Blue</option>
              <option class="box">Black</option>
              <option class="box">White</option>
              <option class="box">Pink</option>
              <option class="box">Yellow</option>
              <option class="box">Red</option>
            </select>
          </div>

          <div class="form-group">
            <label for="lost-location">Lost Location</label>
            <select v-model="lostItem.location" id="lost-location">
              <option>Blue Tower</option>
              <option>Cafeteria</option>
              <option>Library</option>
              <option>bonhoefferstraße 13</option>
              <option>SRH Campus Tram station</option>
              <option>SRH Gym</option>
              <option>Others</option>
              
            </select>
          </div>

          <div class="form-group">
            <label for="item-brand">Item Brand</label>
            <input 
            class="box" 
            type="text" 
            id="item-brand"
            v-model="lostItem.brand" 
            placeholder="Nothing" />
          </div>
        </div>

         
        <div class="right-section">
          <div class="form-group">
            <label for="item-description">Item Description</label>
            <textarea 
            id="item-description" 
            v-model="lostItem.description"
            placeholder="Describe the item in detail..."
            ></textarea>
          </div>

          <div class="form-group">
            <label for="contact-information">Contact Information</label>
            <input type="email" id="contact-information" placeholder="lostandfound@anymail.com " />
          </div>

          <div class="form-group">
            <label for="item-image">Item Image</label>
            <div class="file-input-wrapper">
              <input 
              type="file" 
              id="item-image" 
              accept="image/*" 
              @change="handleFileChange"/> <!--Unable to bind the image into V-model--> <!---we dont have lost date-->
            </div>
            <div v-if="lostItem.image" class="image-preview">
              <img :src="lostItem.image" alt="Preview of Lost Item" />
          </div>
        </div>
         
        <div class="button-wrapper">
        <button type="submit" class="submit-button">Submit Lost Item</button>
      </div>
      </div>
      </form>

     
      
    </main>
  </div>
<Footer/>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from '@/components/Footer.vue';

export default {
  name: "ReportLostPage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        matriculationId: "",
      },
      lostItem: {
        id: null,
        name: "",
        color: "",
        location: "",
        brand: "",
        description: "",
        image: null,
      },
    };
  },
  methods: {
    async fetchUserDetails() {
      try {
        const storedMatriculationId = localStorage.getItem("loggedInUserMatriculationId");

        if (storedMatriculationId) {
          this.user.matriculationId = storedMatriculationId;
          console.log("Matriculation ID from localStorage:", storedMatriculationId);
          return;
        }

        const email = localStorage.getItem("loggedInUserEmail");

        if (!email) {
          alert("User is not logged in. Please sign in.");
          this.$router.push("/login");
          return;
        }

      
        const response = await fetch(`http://localhost:5001/users?email=${email}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }



        const data = await response.json(); // Correctly parse response JSON

        if (data.length > 0) {
          this.user.matriculationId = data[0].matriculationNumber; // Assign matriculation number
          localStorage.setItem("loggedInUserMatriculationId", this.user.matriculationId);
          console.log("Matriculation ID from API:", this.user.matriculationId);
        } else {
          alert("User not found. Please log in again.");
          this.$router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("Could not fetch user details.");
      }
    },
  
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.lostItem.image = e.target.result; // Save Base64 image data
        };
        reader.readAsDataURL(file);
      }
    },

    

  async submitLostItem() {
    if (
      !this.lostItem.name ||
      !this.lostItem.color ||
      !this.lostItem.location ||
      !this.lostItem.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    this.lostItem.id = Date.now().toString(); // Generate a unique ID

    try {
      const response = await fetch("http://localhost:5001/lostItems", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.lostItem),
      });

      if (response.ok) {
        alert("Lost item reported successfully!");
        this.$router.push("/LostItems");
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to report lost item:", error);
      alert("Could not submit the form. Please try again.");
    }
  },
},

  created() {
    this.fetchUserDetails();
  },
};
 
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
  justify-content: space-between;
  gap: 40px;
  position: relative;
 
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

.button-wrapper {
  position: absolute;
  bottom: 0px;
  left: 650px;
}
.submit-button {
  background-color: #0469ff;
  color: #fff;
  padding: 20px 20px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
}

.submit-button:hover{
  background-color: #0c4c8f;
  transform: scale(1.05);
}

.submit-button:active {
  background-color: #033a6b;
  transform: scale(1);
}

</style>

