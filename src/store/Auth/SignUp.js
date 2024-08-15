// src/store/SignUp.js
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
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
      random: 0,
      agree: false,
    },
    countries: [
      "Egypt \uD83C\uDDEA\uD83C\uDDEC",
      "USA  \uD83C\uDDFA\uD83C\uDDF8",
      "Canada  \uD83C\uDDE8\uD83C\uDDE6",
      "France  \uD83C\uDDEB\uD83C\uDDF7",
      "Germany  \uD83C\uDDE9\uD83C\uDDEA",
    ],
  }),
  actions: {
    async registerUser() {
      const data = {
        country: "Egypt",
        role: this.user.tradeRole,
        email: this.user.email,
        password: this.user.password,
        passwordConfirm: this.user.confirmPassword,
        companyName: this.user.companyName,
        phone: this.user.phoneNumber,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        const response = await axios.post("/v1/auth/signup/", data, {
          headers,
        });
        if (response.status === 200) this.$router.push("/LoginPage");
        console.log("User registered successfully:", response.data);
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
