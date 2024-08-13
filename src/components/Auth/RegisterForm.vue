<template>
  <v-form ref="form">
    <!-- Country/Region -->
    <v-select
      v-model="user.country"
      :items="countries"
      placeholder="Select a country"
      :rules="[(v) => !!v || 'Country / Region is required']"
      required
      variant="outlined"
    >
      <template v-slot:prepend>
        <span>Country / Region <span style="color: red">*</span> :</span>
      </template>
    </v-select>

    <!-- Trade Role -->
    <v-row>
      <v-radio-group
        v-model="user.tradeRole"
        required
        :rules="[(v) => !!v || 'Please select a trade role']"
      >
        <template v-slot:prepend>
          <span
            >Please select trade role <span style="color: red">*</span> :</span
          >
        </template>
        <div class="radio">
          <v-radio label="Buyer" value="Buyer"></v-radio>
          <v-radio label="Seller" value="Seller"></v-radio>
          <v-radio label="Both" value="Both"></v-radio>
        </div>
      </v-radio-group>
    </v-row>

    <!-- Email -->
    <v-text-field
      v-model="user.email"
      variant="outlined"
      type="email"
      placeholder="Please set the email as the login name"
      :rules="[
        (v) => !!v || 'Email is required',
        (v) => /.+@.+/.test(v) || 'Email must be valid',
      ]"
      required
    >
      <template v-slot:prepend>
        <span>Email <span style="color: red">*</span> :</span>
      </template>
    </v-text-field>

    <!-- Password -->

    <v-tooltip :text="text" location="bottom">
      <template v-slot:activator="{ props }">
        <v-text-field
          v-model="user.password"
          type="password"
          variant="outlined"
          placeholder="Set the login password"
          :rules="passwordRules"
          v-bind="props"
          required
        >
          <template v-slot:prepend>
            <span>Login Password <span style="color: red">*</span> :</span>
          </template>
        </v-text-field>
      </template>
    </v-tooltip>
    <!-- Confirm Password -->
    <v-text-field
      v-model="user.confirmPassword"
      variant="outlined"
      type="password"
      placeholder="Enter the login password again"
      :rules="[
        (v) => !!v || 'Confirm Password is required',
        (v) => v === user.password || 'Passwords must match',
      ]"
      required
    >
      <template v-slot:prepend>
        <span>Confirm Password <span style="color: red">*</span> :</span>
      </template>
    </v-text-field>

    <!-- Company Name -->
    <v-text-field
      v-model="user.companyName"
      variant="outlined"
      placeholder="Please enter your company name"
      :rules="[(v) => !!v || 'Company Name is required']"
      required
    >
      <template v-slot:prepend>
        <span>Company Name <span style="color: red">*</span> :</span>
      </template>
    </v-text-field>

    <!-- Full Name -->
    <v-row>
      <v-col cols="7">
        <v-text-field
          v-model="user.firstName"
          variant="outlined"
          placeholder="Please enter your first name"
          :rules="[(v) => !!v || 'First Name is required']"
          required
        >
          <template v-slot:prepend>
            <span>Full name <span style="color: red">*</span> :</span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field
          v-model="user.lastName"
          variant="outlined"
          placeholder="Please enter your last name"
          :rules="[(v) => !!v || 'Last Name is required']"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Phone Number -->
    <v-row>
      <v-col cols="5">
        <v-text-field
          variant="outlined"
          v-model="user.countryCode"
          placeholder="country code"
          :rules="[(v) => !!v || 'Country Code is required']"
          required
        >
          <template v-slot:prepend>
            <span>Phone Number <span style="color: red">*</span> :</span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="user.areaCode"
          variant="outlined"
          placeholder="area"
          :rules="[(v) => !!v || 'Area Code is required']"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="user.phoneNumber"
          variant="outlined"
          placeholder="phone number"
          :rules="[
            (v) => !!v || 'Phone Number is required',
            (v) => /^\d{1,14}$/.test(v) || 'Please enter less than 14 digits',
          ]"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Agreement Checkbox -->
    <v-checkbox
      v-model="user.agree"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      required
    >
      <template v-slot:label>
        <span
          >I agree to (a)<span
            style="color: var(--main-color); font-weight: bold"
            >Free Membership Agreement</span
          >, (b)
          <span style="color: var(--main-color); font-weight: bold"
            >Terms of Use</span
          >, and (c)
          <span style="color: var(--main-color); font-weight: bold"
            >Privacy Policy</span
          >. I agree to receive more information from Alibaba.com about its
          products and services.</span
        >
      </template></v-checkbox
    >

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
  data() {
    return {
      password: "",
      text: "",
      passwordRules: [
        (v) => {
          if (!v) {
            this.text = "Password is required";
            return this.text;
          }
          return true;
        },
        (v) => {
          if (v.length < 6) {
            this.text = "Password must be at least 6 characters";
            return this.text;
          }
          return true;
        },
      ],
      roles: ["Password is required", "Password must be at least 6 characters"],
    };
  },
  computed: {
    ...mapState(useAuthStore, ["user", "countries"]),
  },
  methods: {
    async submit() {
      let valid = await this.$refs.form.validate();
      console.log(valid);
      if (valid.valid === true) {
        console.log("Form submitted successfully!");
        // Add your form submission logic here
      } else {
        console.log("Form validation failed.");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  margin: 0 auto 40px;
  min-height: 500px;
  width: 635px;
  padding: 20px;
}

.radio {
  display: flex !important;
  flex-direction: row !important;
}
</style>
