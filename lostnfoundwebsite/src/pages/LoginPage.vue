<template>
    <Navbar/>
    <div class="login-page">
      <!-- Left Section -->
      <div class="illustration">
        <img src="@/assets/images/illustration.jpg" alt="Illustration" />
      </div>
  
      <!-- Right Section -->
      <div class="login-form">
        <div class="form-container">
          <h2 :style="{ color: headerColor }">Sign In</h2>
            <form @submit.prevent="onSubmit">
            <FormInput v-model="email" label="Email" type="text" placeholder="Enter your email" labelColor="#002246" />
            <FormInput v-model="password" label="Password" type="password" placeholder="Enter your password" labelColor="#002246" />
            <button type="submit" class="btn-sign-in">Sign In</button>
          </form>
          <p :style="{color: text1Color}">
            Don't have an account yet?
            <router-link to="/register" class="register-link" :style="{color: textColor}">Register Now!</router-link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
  </template>
  
  
  <script>
  import FormInput from "@/components/FormInput.vue";
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";

  import { baseURL } from "../url";
  import bcrypt from "bcryptjs";
  
  export default {
    components: {
      FormInput,
      Navbar,
      Footer,
    },
    data() {
      return {
        email: "",
        password: "",
        headerColor: "#002246",
        textColor: "#D14B3F",
        text1Color: "#002246",
        isLoggedIn: false
      };
    },
    mounted() {
    // Check if user is already logged in
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    if (loggedInUserEmail) {
      this.isLoggedIn = true;
      this.email = loggedInUserEmail; // Optional: Pre-fill the email
    }
  },
    methods: {
      async onSubmit() {
      if (this.email && this.password) {
        try {
          const response = await fetch(`${baseURL}/users?email=${this.email}`);
          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }

          const data = await response.json();

          if (data.length > 0) {
            const user = data[0];
            const isPasswordValid = bcrypt.compareSync(this.password, user.password);

            if (isPasswordValid) {
              alert("Login successful!");

              // Store user data in localStorage
              localStorage.setItem("loggedInUserEmail", user.email);
              localStorage.setItem("loggedInUserMatriculationId", user.matriculationNumber);

              console.log("Logged in user:", user);

              this.isLoggedIn = true;
              this.$store.commit("userAuthenticated", user.email);
              this.$router.push("/");
            } else {
              alert("Invalid credentials. Please try again.");
            }
          } else {
            alert("No account found with this email. Please register first.");
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("Something went wrong. Please try again.");
        }
      } else {
        alert("Please fill in all fields.");
      }
    },
    logout() {
      // Clear localStorage and Vuex state
      localStorage.removeItem("loggedInUserEmail");
      localStorage.removeItem("loggedInUserMatriculationId");
      this.$store.commit("userAuthenticated", null);

      // Redirect to login page
      this.isLoggedIn = false;
      this.$router.push("/login");
    },
  },
  };
  </script>
  
  <style>
  /* General Layout */
  .login-page {
    display: flex;
    height: 100vh;
    background-color: #f5f7fa;
  }
  
  .illustration {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  
  .illustration img {
    max-width: 80%;
  }
  
  .login-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #C2E0FF;
  }
  
  /* Form Container */
  .form-container {
    width: 90%;
    max-width: 400px;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Buttons */
  .btn-sign-in {
    width: 80%;
    padding: 10px;
    background-color: #002246;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .btn-sign-in:hover {
    background-color: #1565c0;
  }
  
  /* Links */
  .register-link {
    color: #D14B3F;
    text-decoration: none;
    font-weight: 600;
  }
  
  .register-link:hover {
    text-decoration: underline;
  }
  
  p {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
  }
  </style>
  