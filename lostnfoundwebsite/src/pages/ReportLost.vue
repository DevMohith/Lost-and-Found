<template>
  <div id="app" class="app">
    <Navbar />

    <div class="header">
      <h1 class="title">{{ isReportLost ? "Report Lost" : "Report Found" }}</h1>
      <div class="toggle-wrapper">
        <label class="switch">
          <input type="checkbox" v-model="isReportLost" />
          <span class="slider round"></span>
        </label>
        <span class="toggle-text">{{ isReportLost ? "Lost" : "Found" }}</span>
      </div>
    </div>

    <main class="main">
      <form
        @submit.prevent="isReportLost ? submitLostItem() : submitFoundItem()"
        class="form"
      >
        <div class="left-section">
          <div class="form-group">
            <label for="matriculation-id">Matriculation ID</label>
            <input
              class="box"
              type="text"
              id="matriculation-id"
              v-model="user.matriculationId"
              readonly
              placeholder="Fetching your Matriculation ID..."
            />
          </div>

          <div class="form-group">
            <label for="item-name">Item Name</label>
            <input
              class="box"
              type="text"
              id="item-name"
              v-model="lostItem.name"
              placeholder="Add your lost item"
            />
          </div>

          <div class="form-group">
            <label for="item-category">Item Category</label>
            <select v-model="lostItem.category" id="item-category">
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
              <option class="box">Orange</option>
              <option class="box">Peach</option>
              <option class="box">Green</option>
              <option class="box">Gold</option>
              <option class="box">others</option>
            </select>
          </div>

          <div class="form-group">
            <label for="lost-location">{{
              isReportLost ? "Lost Location" : "Found Location"
            }}</label>
            <select v-model="lostItem.location" id="lost-location">
              <option>Blue Tower</option>
              <option>Cafeteria</option>
              <option>Library</option>
              <option>Bonhoefferstraße 13</option>
              <option>SRH Campus Tram station</option>
              <option>Ochsenkof Tram Station</option>
              <Option>Bonhoefferstraße 9</Option>
              <Option>SRH Parkplatz</Option>
              <option>SRH Gym</option>
              <option>MPS 3</option>
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
              placeholder="Nothing"
            />
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
            <label for="contact-information">Contact </label>
            <input
              type="email"
              id="contact-information"
              placeholder="lostandfoInformationund@anymail.com "
              v-model="lostItem.contact"
            />
          </div>

          <div class="form-group">
            <label for="item-image">Item Image</label>
            <div class="file-input-wrapper">
              <input
                type="file"
                id="item-image"
                accept="image/*"
                @change="handleFileChange"
              />
              <!--Unable to bind the image into V-model-->
              <!---we dont have lost date-->
            </div>
            <div v-if="lostItem.image" class="image-preview">
              <img :src="lostItem.image" alt="Preview of Lost Item" />
            </div>
          </div>

          <div class="form-group">
            <label for="lost-date">{{
              isReportLost ? "Lost Date" : "Found Date"
            }}</label>
            <input
              type="date"
              id="lost-date"
              class="box"
              v-model="lostItem.date"
              required
            />
          </div>

          <div class="button-wrapper">
            <button type="submit" class="submit-button">
              Submit {{ isReportLost ? "Lost" : "Found" }} Item
            </button>
          </div>
        </div>
      </form>
    </main>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "@/components/Footer.vue";
// import { reportFoundItem } from "../util.js";

export default {
  name: "ReportLostPage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isReportLost: true,
      loading: true,
      user: { matriculationId: "" },
      lostItem: {
        id: null,
        name: "",
        category: "",
        color: "",
        location: "",
        brand: "",
        description: "",
        contact: "",
        image: null,
        date: "",
      },
    };
  },
  methods: {
    //Logic to fetch the Matriculation ID from DB
    async fetchUserDetails() {
      this.loading = true;
      try {
        const storedMatriculationId = localStorage.getItem(
          "loggedInUserMatriculationId"
        );

        if (storedMatriculationId) {
          this.user.matriculationId = storedMatriculationId;
          this.loading = false;
          // console.log("Matriculation ID from localStorage:", storedMatriculationId);
          return;
        }

        const email = localStorage.getItem("loggedInUserEmail");

        if (!email) {
          alert("User is not logged in. Please sign in.");
          this.$router.push("/login");
          return;
        }

        const response = await fetch(
          `http://localhost:5001/users?email=${email}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.length > 0) {
          this.user.matriculationId = data[0].matriculationNumber;
          localStorage.setItem(
            "loggedInUserMatriculationId",
            this.user.matriculationId
          );
          // console.log("Matriculation ID from API:", this.user.matriculationId);
        } else {
          alert("User not found. Please log in again.");
          this.$router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("Could not fetch user details. Please try again.");
        this.$router.push("/login");
      } finally {
        this.loading = false; // Reset loading state
      }
    },
    //Logic to handle the file (image) upload to the db.
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.lostItem.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    //   validateForm() {
    //   const requiredFields = ["name", "category", "color", "location", "contact", "description", "image", "date"];
    //   for (const field of requiredFields) {
    //     if (!this.lostItem[field]) {
    //       alert(`Please fill in the ${field} field.`);
    //       return false;
    //     }
    //   }
    //   return true;
    // },

    //Logic for submitting lost item to db

    async submitLostItem() {
      if (this.$route.query.edit) {
        await this.$store.dispatch("updateLostItem", this.lostItem);
        alert("Item updated successfully!");
        this.$router.push("/myposts");
      }
      else{
        if (!this.user.matriculationId) {
        alert("You must be logged in to report an item.");
        this.$router.push("/login");
        return;
      }
      
      if (
        !this.lostItem.name ||
        !this.lostItem.category ||
        !this.lostItem.color ||
        !this.lostItem.location ||
        !this.lostItem.contact ||
        !this.lostItem.description ||
        !this.lostItem.image ||
        !this.lostItem.date
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      this.lostItem.id = Date.now().toString(); // Generate a unique ID

      try {
        const saveResponse = await fetch("http://localhost:5001/lostItems", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...this.lostItem,
            matriculationId: this.user.matriculationId,
          }),
        });

        if (saveResponse.ok) {
          const foundItemsResponse = await fetch(
            "http://localhost:5001/foundItems"
          );
          const foundItems = await foundItemsResponse.json();
          const matches = this.matchFoundItems(foundItems);

          this.$router.push({
            path: "/foundItems",
            query: { matches: JSON.stringify(matches) },
            name: "FoundItems",
            params: { lostItem: this.lostItem },
          });
        } else {
          throw new Error(`Error: ${saveResponse.statusText}`);
        }
      } catch (error) {
        console.error("Failed to report item:", error);
        alert("Could not submit the form. Please try again.");
      }
      }
      
    },

    // Logic for submitting found item
    async submitFoundItem() {
      if (!this.user.matriculationId) {
        alert("You must be logged in to report an item.");
        this.$router.push("/login");
        return;
      }

      if (
        !this.lostItem.name ||
        !this.lostItem.category ||
        !this.lostItem.color ||
        !this.lostItem.location ||
        !this.lostItem.contact ||
        !this.lostItem.description ||
        !this.lostItem.image ||
        !this.lostItem.date
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      this.lostItem.id = Date.now().toString(); // Generate a unique ID

      try {
        const saveResponse = await fetch("http://localhost:5001/foundItems", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...this.lostItem,
            matriculationId: this.user.matriculationId,
          }),
        });

        if (saveResponse.ok) {
          alert("The found item has been successfully submitted.");
          this.$router.push("/");
        } else {
          throw new Error(`Error: ${saveResponse.statusText}`);
        }
      } catch (error) {
        console.error("Failed to report item:", error);
        alert("Could not submit the form. Please try again.");
      }
    },

    matchFoundItems(foundItems) {
      const matches = [];

      foundItems.forEach((foundItem) => {
        let matchScore = 0;

        // Check if any of the attributes match
        if (
          this.lostItem.name &&
          foundItem.name
            .toLowerCase()
            .includes(this.lostItem.name.toLowerCase())
        ) {
          matchScore += 30; // Higher weight for name match
        }
        if (
          this.lostItem.category &&
          foundItem.category === this.lostItem.category
        ) {
          matchScore += 20; // Medium weight for category match
        }
        if (this.lostItem.color && foundItem.color === this.lostItem.color) {
          matchScore += 20; // Medium weight for color match
        }
        if (
          this.lostItem.location &&
          foundItem.location === this.lostItem.location
        ) {
          matchScore += 10; // Lower weight for location match
        }

        // Add the found item to the matches if it has a non-zero match score
        if (matchScore > 0) {
          matches.push({ ...foundItem, matchScore });
        }
      });

      // Sort matches by matchScore in descending order
      matches.sort((a, b) => b.matchScore - a.matchScore);

      return matches;
    },

    resetForm() {
      this.lostItem = {
        id: null,
        name: "",
        category: "",
        color: "",
        location: "",
        brand: "",
        description: "",
        contact: "",
        image: null,
        date: "",
      };
    },
  },

  created() {
    const matchesQuery = this.$route.query.matches;
    this.matches = matchesQuery ? JSON.parse(matchesQuery) : [];
    this.fetchUserDetails();
    if (this.$route.query.edit) {
      this.lostItem = { ...this.$route.query };
    }
  },
};
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  color: #000;
  background-color: #f8f8f8;
  padding: 0;
  margin: 0;
}

#app .header h1 {
  text-align: center;
}

.header h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

/* .nav {
  display: flex;
  align-items: center;
  gap: 10px;
} */

/* .nav {
  display: flex;
  
  align-items: center;
  gap: 10px;
} */

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
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 995px;
  height: 1000px;
  margin: 20px auto;
  padding: 20px;
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
  margin: 15px;
}

#lost-date {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #d0daff;
  border-radius: 10px;
  width: 400px;
  background-color: #f6f6f6;
}

.left-section,
.right-section {
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
  border: 1px solid #d0daff;
  border-radius: 10px;
  width: 400px;
  background-color: #f6f6f6;
}

select {
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

.submit-button:hover {
  background-color: #0c4c8f;
  transform: scale(1.05);
}

.submit-button:active {
  background-color: #033a6b;
  transform: scale(1);
}

/* Styles for Toggle Button */
.toggle-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 48%; /* Push toggle to the right */
  margin-right: 0; /* Keep it centered */
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: red; /* Green when Found */
}

input:checked + .slider:before {
  transform: translateX(26px); /* Move slider button to the right */
}

/* When the checkbox is unchecked (for Lost) */
input:not(:checked) + .slider {
  background-color: green; /* Red when Lost */
}

input:not(:checked) + .slider:before {
  transform: translateX(0); /* Keep slider button to the left */
}
</style>
