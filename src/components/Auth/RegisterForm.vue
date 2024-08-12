<template>
  <v-form ref="form">
    <!-- Country/Region -->
    <div class="flex">
      <label for="country"
        >Country / Region <span style="color: red">*</span> :
      </label>

      <v-select
        v-model="user.country"
        :items="countries"
        variant="outlined"
        placeholder="Select a country"
        required
      >
      </v-select>
    </div>
    <!-- Trade Role -->
    <div class="flex">
      <label for="radio"
        >Please select trade role <span style="color: red">*</span> :
      </label>
      <v-radio-group v-model="user.tradeRole" required id="radio">
        <div class="radio">
          <v-radio label="Buyer" value="Buyer"></v-radio>
          <v-radio label="Seller" value="Seller"></v-radio>
          <v-radio label="Both" value="Both"></v-radio>
        </div>
      </v-radio-group>
    </div>
    <!-- Email -->
    <div class="flex">
      <label for="Email">Email <span style="color: red">*</span> : </label>
      <v-text-field
        v-model="user.email"
        id="Email"
        variant="outlined"
        required
        placeholder="Please set the email as the login name"
        type="email"
      ></v-text-field>
    </div>
    <!-- Password -->
    <div class="flex">
      <label for="Password"
        >Login Password <span style="color: red">*</span> :
      </label>
      <v-text-field
        variant="outlined"
        v-model="user.password"
        id="Password"
        required
        placeholder="Set the login password"
        type="password"
      ></v-text-field>
    </div>
    <!-- Confirm Password -->
    <div class="flex">
      <label for="Confirm"
        >Confirm Password <span style="color: red">*</span> :
      </label>
      <v-text-field
        variant="outlined"
        v-model="user.confirmPassword"
        id="Confirm"
        required
        placeholder="Enter the login password again"
        type="password"
      ></v-text-field>
    </div>
    <!-- Company Name -->
    <div class="flex">
      <label for="Company"
        >Company Name <span style="color: red">*</span> :
      </label>
      <v-text-field
        v-model="user.companyName"
        id="Company"
        variant="outlined"
        placeholder="Please enter your company name"
        required
      ></v-text-field>
    </div>
    <!-- Full Name -->
    <div class="flex">
      <label for="Full">Full name <span style="color: red">*</span> : </label>
      <v-text-field
        v-model="user.firstName"
        id="Full"
        placeholder="Please enter your first name"
        variant="outlined"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.lastName"
        variant="outlined"
        placeholder="Please enter your last name"
        required
      ></v-text-field>
    </div>
    <!-- Phone Number -->
    <div class="flex">
      <label for="Phone"
        >Phone Number <span style="color: red">*</span> :
      </label>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="user.countryCode"
            id="Phone"
            placeholder="country code"
            variant="outlined"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="user.areaCode"
            placeholder="area"
            variant="outlined"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="user.phoneNumber"
            placeholder="phone number"
            variant="outlined"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <!-- Agreement Checkbox -->
    <v-checkbox
      v-model="user.agree"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="I agree to the Free Membership Agreement, Terms of Use, and Privacy Policy."
      required
    ></v-checkbox>

    <!-- Register Button -->
    <v-btn @click="submit" style="color: white; background-color: black">
      Agree and Register
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/store/SignUp.js";
export default {
  computed: {
    ...mapState(useAuthStore, ["user", "valid", "countries"]),
  },
  methods: {
    submit() {
      console.log("Form submitted successfully!");
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  padding: 20px;
  width: 50%;
  margin: 0 auto;
}
.flex {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  gap: 10px !important;
}
.radio {
  display: flex !important;
  flex-direction: row !important;
}
</style>
