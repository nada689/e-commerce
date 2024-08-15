// src/store/SignUp.js
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    verified: 0,
    user: {
      country: "Egypt",
      tradeRole: "",
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      firstName: "",
      lastName: "",
      countryCode: "20",
      areaCode: "",
      phoneNumber: "",
      agree: false,
    },
  }),
  actions: {
    async Verified() {
      this.verified = 1;
      console.log(this.verified);
    },
    async signUp() {
      console.log(this.verified);
      console.log(this.user);
    },
    NotVerified() {
      this.verified = 0;
      console.log(this.verified);
    },
    async registerUser() {
      const data = {
        country: this.user.country,
        role: this.user.tradeRole,
        email: this.user.email,
        password: this.user.password,
        passwordConfirm: this.user.confirmPassword,
        companyName: this.user.companyName,
        phone: this.user.phoneNumber,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        verified: this.verified,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const response = await axios.post("/v1/auth/signup/", data, {
          headers,
        });
        console.log("User registered successfully:", response.data);
        this.$router.push("/LoginPage");
        this.user = {
          country: "",
          tradeRole: "",
          email: "",
          password: "",
          confirmPassword: "",
          companyName: "",
          firstName: "",
          lastName: "",
          countryCode: "20",
          areaCode: "",
          phoneNumber: "",
          agree: false,
        };
      } catch (error) {
        console.error(
          "Error registering user:",
          error.response ? error.response.data : error.message
        );
      }
    },
  },
});
