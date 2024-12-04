<template>
    <div class="register-page">
        <!-- Left Section -->
        <div class="illustration">
            <img src="@/assets/illustration.jpg" alt="Illustration" />
        </div>

        <!-- Right Section -->
        <div class="register-form">
            <div class="form-container">
                <div class="back-button">
                    <router-link to="/">
                        <button class="btn-back">
                            <span>&larr;</span>
                        </button>
                    </router-link>
                </div>
                <h2 :style="{ color: headerColor }">Sign Up</h2>
                <form @submit.prevent="handleRegister">
                    <!-- Email Input -->
                    <FormInput v-model="email" label="Email Address" type="email" placeholder="Enter your email address"
                        labelColor="#700a00" />
                    <!-- Username Input -->
                    <FormInput v-model="username" label="Username" type="text" placeholder="Enter your username"
                        labelColor="#700a00" />
                    <!-- Password Input -->
                    <FormInput v-model="password" label="Password" type="password" placeholder="Enter your password"
                        labelColor="#700a00" />
                    <button type="submit" class="btn-register">Sign Up</button>
                </form>
                <p :style="{ color: text1Color }">
                    Already have an account?
                    <router-link to="/login" class="login-link" :style="{ color: textColor }">Login Here!</router-link>
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
            email: "",
            password: "",
            headerColor: "#700a00",
            textColor: "#002246 ",
            text1Color: "#700a00"
        };
    },
    methods: {
        handleRegister() {
            console.log("Registering with:", {
                username: this.username,
                email: this.email,
                password: this.password,
            });
            alert("Registration Successful!");
        },
    },
};
</script>

<style>
/* General Layout */
.register-page {
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

.register-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FBB7B1;
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
    color: #700a00;
    cursor: pointer;
}

.btn-back:hover {
    text-decoration: underline;
}

.btn-register {
    width: 80%;
    padding: 10px;
    background-color: #700a00;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
}

.btn-register:hover {
    background-color: #c23d31;
}

/* Links */
.login-link {
    color: #002246;
    text-decoration: none;
    font-weight: 600;
}

.login-link:hover {
    text-decoration: underline;
}

p {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
}
</style>