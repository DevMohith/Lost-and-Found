<template>
  <div class="homepage">
    <h1>Welcome to Our Website</h1>
    <p>Click below to log in and access your account.</p>
    <router-link to="/login">
      <button class="btn-login">Go to Login Page</button>
    </router-link>
    <router-link to="/lostitems">
      <button class="btn-login">Go to Lost Items</button>
    </router-link>
    <router-link to="/reportlost">
      <button class="btn-login">Go to Report Lost</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f7fa;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

router-link {
  padding-top: 20px;
}

.btn-login {
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #0d47a1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #1565c0;
}
</style>
