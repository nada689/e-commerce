// src/store/SignUp.js
import { defineStore } from "pinia";

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
      verification: 0,
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
  actions: {},
});
