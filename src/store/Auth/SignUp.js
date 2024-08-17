// src/store/SignUp.js
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    verified: 0,
    user: {
      country: "Egypt",
      tradeRole: 1,
      email: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      firstName: "",
      lastName: "",
      countryCode: "+" + "20",
      keyCode: "EG",
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
      const data = {
        country: {
          PhoneKey: this.user.countryCode,
          name: this.user.country,
          KeyCode: this.user.keyCode,
        },
        role: Number(this.user.tradeRole),
        email: this.user.email,
        password: this.user.password,
        passwordConfirm: this.user.confirmPassword,
        companyName: this.user.companyName,
        phone: this.user.phoneNumber,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        verified: this.verified,
      };
      console.log(this.verified);
      console.log(data);
    },
    NotVerified() {
      this.verified = 0;
      console.log(this.verified);
    },
    async registerUser() {
      const data = {
        role: Number(this.user.tradeRole),
        email: this.user.email,
        password: this.user.password,
        passwordConfirm: this.user.confirmPassword,
        companyName: this.user.companyName,
        phone: this.user.phoneNumber,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        verified: this.verified,
        country: {
          PhoneKey: this.user.countryCode,
          name: this.user.country,
          KeyCode: this.user.keyCode,
        },
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
