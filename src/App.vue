<template>
  <div class="container">
    <header class="header">
      <div class="logo">
        <h1>LogoHere</h1>
      </div>
      <nav class="navbar">
        <ul>
          <li><button class="nav-btn">Home</button></li>
          <li><button class="nav-btn">Lost Items</button></li>
          <li><button class="nav-btn">Found Items</button></li>
        </ul>
        <section class="loginSection">
          <button class="nav-btn">Profile</button>
          <button class="sign-in-btn">Sign In</button>
        </section>
      </nav>
    </header>

    <main class="main">
      <section class="lost-section">
        <h2>
          <span class="highlight">Lost</span> an Item? No worries!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci
          elit, scelerisque fringilla risus non, fringilla imperdiet lectus.
        </p>
        <div class="buttons">
          <button class="btn btn-report-lost">Report Lost Item</button>
          <button class="btn btn-lost-item">Lost Item</button>
        </div>
        <img src=""/>
      </section>

      <section class="found-section">
        <h2>
          <span class="highlight">Found</span> an Item? Good you are!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci
          elit, scelerisque fringilla risus non, fringilla imperdiet lectus.
        </p>
        <div class="buttons">
          <button class="btn btn-report-found">Report Found Item</button>
          <button class="btn btn-found-item">Found Item</button>
        </div>
        <img src=""/>
      </section>
    </main>
  </div>
</template>

<script>

</script>

<style scoped>

.container {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  font-size: 24px;
  margin: 0;
}

.navbar {
  flex-grow: 1;
  display: flex;
  justify-content: center; /* Centering the navigation */
}

.navbar ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar .nav-btn {
  background-color: transparent;
  border: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sign-in-btn {
  background-color: transparent;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.login-section {
  display: flex;
  justify-content: flex-end;
}

.main {
  padding: 20px;
  text-align: center;
}

section {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.lost-section h2,
.found-section h2 {
  font-size: 24px;
  margin: 0 0 10px;
}

.highlight {
  color: #007bff;
}

section p {
  font-size: 16px;
  color: #666;
  margin: 0 0 10px;
}

section .buttons {
  margin-top: 10px;
}

section img {
  max-width: 300px;
  border-radius: 10px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-report-lost {
  background-color: #dc3545;
  color: white;
}

.btn-lost-item {
  background-color: transparent;
  color: #dc3545;
  border: 1px solid #dc3545;
}

.btn-report-found {
  background-color: #28a745;
  color: white;
}

.btn-found-item {
  background-color: transparent;
  color: #28a745;
  border: 1px solid #28a745;
}
</style>
