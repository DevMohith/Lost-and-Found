<template>
  <header class="header">
    <div class="logo"><img src="../assets/images/logo.jpg" alt="Lost and Found Logo"></div>
    <div class="router-links">
        <router-link
          class="nav-link"
          active-class="active"
          exact-active-class="active"
          to="/"
        >
          Home
        </router-link>
        <router-link
          class="nav-link"
          active-class="active"
          exact-active-class="active"
          to="/LostItems"
        >
          Lost Items
        </router-link>
        <router-link
          class="nav-link"
          active-class="active"
          exact-active-class="active"
          to="/ReportLost"
        >
          Report
        </router-link>
      </div>
    <nav class="nav">
      <div class="profile-actions">
        <router-link
          v-if="!isUserLoggedIn"
          class="nav-link"
          active-class="active"
          to="/login"
          style="border: 1px solid #0469ff; color: #0469ff; border-radius: 10px;"
        >
          Sign In
        </router-link>
        <div v-if="isUserLoggedIn" class="profile-dropdown">
          <button class="nav-link dropdown-toggle" @click="toggleDropdown">
            Profile
          </button>
          <div v-if="isDropdownVisible" class="dropdown-menu">
            <router-link class="dropdown-item" to="/myposts">My Posts</router-link>
            <router-link
              class="dropdown-item"
              to="#"
              @click.prevent="signOut"
            >
              Sign Out
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavbarComponent",
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  computed: {
    ...mapState(["user"]),
    isUserLoggedIn() {
      return this.user !== null || localStorage.getItem("loggedInUserEmail") !== null;
    },
  },
  mounted() {
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    if (loggedInUserEmail && !this.user) {
      this.$store.commit("userAuthenticated", loggedInUserEmail);
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    signOut() {
      this.$store.commit("userAuthenticated", null);
      //Mohith added code to remove Local storage after user sign out
      localStorage.removeItem("loggedInUserEmail");
      localStorage.removeItem("loggedInUserMatriculationId"); //till here
      sessionStorage.removeItem("email");
      this.isDropdownVisible = false;
      this.$router.push("/login");
    },
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
  gap: 200px;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #0469ff;
  border-radius: 50px;
}

.profile-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #5B5966;
  padding: 5px 10px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
}

.nav-link.active {
  color: #0469ff;
}

.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
}

.dropdown-menu {
  position: absolute;
  width: 100px;
  top: 40px;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-item {
  display: block;
  padding: 10px 15px;
  text-align: left;
  text-decoration: none;
  color: #000;
  background: #fff;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
