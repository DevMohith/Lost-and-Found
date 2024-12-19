<template>
    <Navbar/>
    <div class="register-page">
        <!-- Left Section -->
        <div class="illustration">
            <img src="@/assets/images/illustration.jpg" alt="Illustration" />
        </div>

        <!-- Right Section -->
        <div class="register-form">
            <div class="form-container">
                
                <h2 :style="{ color: headerColor }">Sign Up</h2>
                <form @submit.prevent="onSubmit">
                    <FormInput v-model="matriculationNumber" label="Matriculation Number" type="number"
                        placeholder="Enter your matriculation number" labelColor="#700a00" />
                    <FormInput v-model="email" label="Email Address" type="email" placeholder="Enter your email address"
                        labelColor="#700a00" />
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
    <Footer/>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

import { baseURL } from "../url.js";
import bcrypt from "bcryptjs";

export default {
    components: {
        FormInput,
        Navbar,
        Footer,
    },
    data() {
        return {
            matriculationNumber: "",
            email: "",
            password: "",
            headerColor: "#700a00",
            textColor: "#002246 ",
            text1Color: "#700a00"
        };
    },
    methods: {
    async onSubmit() {
        if (this.matriculationNumber.length === 6 && this.email && this.password.length > 5) {
            try {
                const response = await fetch(`${baseURL}/users?matriculationNumber=${this.matriculationNumber}`);
                const data = await response.json();
                console.log("Matriculation check response:", data);

                if (data.length > 0) {
                    alert("Matriculation number already exists! Please log in.");
                } else {
                    const newUser = {
                        matriculationNumber: this.matriculationNumber,
                        email: this.email,
                        password: bcrypt.hashSync(this.password, 10),
                    };

                    const registerResponse = await fetch(`${baseURL}/users`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newUser),
                    });

                    if (registerResponse.ok) {
                        alert("Registration successful! Please log in.");
                        this.$router.push("/login");
                    } else {
                        alert("Registration failed. Please try again.");
                    }
                }
            } catch (error) {
                console.error("Registration error:", error);
                alert("Something went wrong. Please try again.");
            }
        } else {
            alert("Please ensure your matriculation number is 6 digits and the password is at least 6 characters.");
        }
    },
}
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

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>
