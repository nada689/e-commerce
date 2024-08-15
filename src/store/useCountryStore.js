// src/store/useCountryStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useCountryStore = defineStore("countryStore", {
  state: () => ({
    countries: [],
    CountryName: [],
  }),
  actions: {
    async fetchCountry() {
      try {
        const countryResult = await axios.get(
          "https://gcc-eosin.vercel.app/api/countries"
        );
        if (countryResult.status === 200) {
          this.CountryName = []; // Initialize the CountryName array

          // Assuming countryResult.data is an array of country objects
          countryResult.data.forEach((data) => {
            const countryData = {
              name: data.name,
              phone: data.phonecode,
            };
            this.CountryName.push(countryData);
          });

          console.log("Formatted Country Data:", this.CountryName);
          return this.CountryName; // Returning the formatted data
        } else {
          console.error("Failed to get country data.");
        }
      } catch (error) {
        console.error(
          "Error fetching countries:",
          error.response ? error.response.data : error.message
        );
      }
    },
  },
});
