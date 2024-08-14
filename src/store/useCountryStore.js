// src/store/useCountryStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useCountryStore = defineStore("countryStore", {
  state: () => ({
    countries: [],
  }),
  actions: {
    async fetchCountry() {
      try {
        const countryResult = await axios.get("countries");
        if (countryResult.data.success) {
          this.countries = countryResult.data; // Save to state if needed
          console.log("Country=>>>", countryResult.data);
          return countryResult.data;
        } else {
          console.error("Failed to get country data.");
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    },
  },
});
