<template>
  <div class="login-page">
    <!-- Left Section -->
    <div class="illustration">
      <img src="@/assets/illustration.jpg" alt="Illustration" />
    </div>

    <!-- Right Section -->
    <div class="login-form">
      <div class="form-container">
        <div class="back-button">
          <router-link to="/">
            <button class="btn-back">
              <span>&larr;</span>
            </button>
          </router-link>
        </div>
        <h2 :style="{ color: headerColor }">Sign In</h2>
          <form @submit.prevent="handleLogin">
          <FormInput v-model="username" label="Username" type="text" placeholder="Enter your username" labelColor="#002246" />
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
</template>

<script>
import FormInput from "@/components/FormInput.vue";

export default {
  components: {
    FormInput,
  },
  data() {
    return {
      username: "",
      password: "",
      headerColor: "#002246",
      textColor: "#D14B3F",
      text1Color: "#002246"
    };
  },
  methods: {
    handleLogin() {
      this.log("Logging in with:", { username: this.username, password: this.password });
      alert("Logged In!");
    },
    log(message, data = null) {
      console.log(message, data);
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
.btn-back {
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #002246;
  cursor: pointer;
}

.btn-back:hover {
  text-decoration: underline;
}

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
