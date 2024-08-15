<template>
  <v-form ref="form" class="w-1/2 m-auto py-5">
    <div class="text-center" justify="end">
      <!-- Country/Region -->
      <v-tooltip :text="user.country" location="top">
        <template v-slot:activator="{ props }">
          <v-select
            v-model="user.country"
            :items="CountryName"
            item-title="name"
            item-value="name"
            v-bind="props"
            placeholder="Select a country"
            :rules="[(v) => !!v || 'Country / Region is required']"
            required
            variant="outlined"
          >
            <template v-slot:prepend>
              <span>Country / Region <span class="text-third">*</span> :</span>
            </template>
          </v-select>
        </template>
      </v-tooltip>

      <!-- Trade Role -->
      <v-row>
        <v-radio-group
          class="radio"
          v-model="user.tradeRole"
          required
          :rules="[(v) => !!v || 'Please select a trade role']"
        >
          <template v-slot:prepend>
            <span
              >Please select trade role
              <span class="text-third">*</span> :</span
            >
          </template>
          <div class="flex space-x-4">
            <v-radio label="Buyer" value="Buyer"></v-radio>
            <v-radio label="Seller" value="Seller"></v-radio>
            <v-radio label="Both" value="Both"></v-radio>
          </div>
        </v-radio-group>
      </v-row>

      <!-- Email -->
      <v-tooltip text="Please set the email as the login name" location="top">
        <template v-slot:activator="{ props }">
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
            v-bind="props"
          >
            <template v-slot:prepend>
              <span>Email <span class="text-third">*</span> :</span>
            </template>
          </v-text-field>
        </template>
      </v-tooltip>

      <!-- Password -->
      <v-menu open-on-hover location="right" offset-x>
        <template v-slot:activator="{ props: menu }">
          <v-tooltip :text="text" location="top">
            <template v-slot:activator="{ props: tooltip }">
              <v-text-field
                v-model="user.password"
                type="password"
                variant="outlined"
                placeholder="Set the login password"
                :rules="passwordRules"
                v-bind="mergeProps(menu, tooltip)"
                required
              >
                <template v-slot:prepend>
                  <span
                    >Login Password <span class="text-third">*</span> :</span
                  >
                </template>
              </v-text-field>
            </template>
          </v-tooltip>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-icon v-if="this.PassRule" color="green"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              <v-icon v-if="!this.PassRule" color="red"
                >mdi-alpha-x-circle-outline</v-icon
              >
              Password is required
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon v-if="this.PassRule5" color="green"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              <v-icon v-if="!this.PassRule5" color="red"
                >mdi-alpha-x-circle-outline</v-icon
              >
              Password must be at least 8 characters long
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon v-if="this.PassRule1" color="green"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              <v-icon v-if="!this.PassRule1" color="red"
                >mdi-alpha-x-circle-outline</v-icon
              >
              Password must contain at least one uppercase letter
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon v-if="this.PassRule2" color="green"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              <v-icon v-if="!this.PassRule2" color="red"
                >mdi-alpha-x-circle-outline</v-icon
              >
              Password must contain at least one lowercase letter
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon v-if="this.PassRule3" color="green"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              <v-icon v-if="!this.PassRule3" color="red"
                >mdi-alpha-x-circle-outline</v-icon
              >
              Password must contain at least one number
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon v-if="this.PassRule4" color="green"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              <v-icon v-if="!this.PassRule4" color="red"
                >mdi-alpha-x-circle-outline</v-icon
              >
              Password must contain at least one special character
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Confirm Password -->
      <v-tooltip text="Enter the login password again" location="top">
        <template v-slot:activator="{ props }">
          <v-text-field
            v-model="user.confirmPassword"
            variant="outlined"
            type="password"
            v-bind="props"
            placeholder="Enter the login password again"
            :rules="[
              (v) => !!v || 'Confirm Password is required',
              (v) => v === user.password || 'Passwords must match',
            ]"
            required
          >
            <template v-slot:prepend>
              <span>Confirm Password <span class="text-third">*</span> :</span>
            </template>
          </v-text-field>
        </template>
      </v-tooltip>

      <!-- Company Name -->
      <v-tooltip text="Please enter your company name" location="top">
        <template v-slot:activator="{ props }">
          <v-text-field
            v-model="user.companyName"
            variant="outlined"
            placeholder="Please enter your company name"
            :rules="[(v) => !!v || 'Company Name is required']"
            required
            v-bind="props"
          >
            <template v-slot:prepend>
              <span>Company Name <span class="text-third">*</span> :</span>
            </template>
          </v-text-field>
        </template>
      </v-tooltip>

      <!-- Full Name -->
      <v-row>
        <v-col cols="7">
          <v-tooltip text="Please enter your first name" location="top">
            <template v-slot:activator="{ props }">
              <v-text-field
                v-model="user.firstName"
                variant="outlined"
                placeholder="Please enter your first name"
                :rules="[
                  (v) => !!v || 'First Name is required',
                  (v) =>
                    /^[A-Za-z\s]+$/.test(v) ||
                    'First Name must contain only alphabetic characters',
                ]"
                required
                v-bind="props"
              >
                <template v-slot:prepend>
                  <span>Full name <span class="text-third">*</span> :</span>
                </template>
              </v-text-field>
            </template>
          </v-tooltip>
        </v-col>
        <v-col cols="5">
          <v-tooltip text="Please enter your last name" location="top">
            <template v-slot:activator="{ props }">
              <v-text-field
                v-model="user.lastName"
                variant="outlined"
                v-bind="props"
                placeholder="Please enter your last name"
                :rules="[
                  (v) => !!v || 'Last Name is required',
                  (v) =>
                    /^[A-Za-z\s]+$/.test(v) ||
                    'Last Name must contain only alphabetic characters',
                ]"
                required
              ></v-text-field>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>

      <!-- Phone Number -->
      <v-row>
        <v-col cols="12" sm="5" md="5" lg="5" xs="12">
          <v-text-field
            variant="outlined"
            v-model="user.countryCode"
            placeholder="Country Code"
            required
            :rules="[
              (v) => !!v || 'Country Code is required',
              (v) => /^\d{1,4}$/.test(v) || 'Please enter a valid Country Code',
            ]"
          >
            <template v-slot:prepend>
              <span>Phone Number <span class="text-third">*</span> :</span>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="7" md="7" lg="7" xs="12">
          <v-tooltip text="Phone Number is required" location="top">
            <template v-slot:activator="{ props }">
              <v-text-field
                v-model="user.phoneNumber"
                variant="outlined"
                placeholder="Phone Number"
                v-bind="props"
                :rules="[
                  (v) => !!v || 'Phone Number is required',
                  (v) => /^\d{1,10}$/.test(v) || 'Please enter up to 10 digits',
                ]"
                required
              ></v-text-field>
            </template>
          </v-tooltip>
        </v-col>
      </v-row>

      <button-verify />

      <!-- Agreement Checkbox -->
      <v-checkbox
        class="mt-4"
        v-model="user.agree"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        required
      >
        <template v-slot:label>
          <span>
            I agree to (a)<span class="text-main font-bold"
              >Free Membership Agreement</span
            >, (b) <span class="text-main font-bold">Terms of Use</span>, and
            (c) <span class="text-main font-bold">Privacy Policy</span>. I agree
            to receive more information from Alibaba.com about its products and
            services.
          </span>
        </template>
      </v-checkbox>

      <!-- Register Button -->
      <v-btn @click="submit" class="text-white bg-black hover:bg-gray-800">
        Agree and Register
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import { mergeProps } from "vue";
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/store/Auth/SignUp.js";
import { useCountryStore } from "@/store/useCountryStore.js";
import ButtonVerify from "@/components/Auth/ButtonVerify.vue";

export default {
  components: {
    ButtonVerify,
  },
  data() {
    return {
      password: "",
      text: "",
      PassRule: false,
      PassRule5: false,
      PassRule2: false,
      PassRule1: false,
      PassRule3: false,
      PassRule4: false,
      passwordRules: [
        (v) => {
          if (!v) {
            this.text = "Password is required";
            this.PassRule = false;
            return this.text;
          }
          this.PassRule = true;
          
          if (!/[A-Z]/.test(v)) {
            this.text = "Password must contain at least one uppercase letter";
            this.PassRule1 = false;
            return this.text;
          }
          this.PassRule1 = true;
       
          if (!/[a-z]/.test(v)) {
            this.text = "Password must contain at least one lowercase letter";
            this.PassRule2 = false;
            return this.text;
          }
          this.PassRule2 = true;
       
          if (!/[0-9]/.test(v)) {
            this.text = "Password must contain at least one number";
            this.PassRule3 = false;
            return this.text;
          }
          this.PassRule3 = true;

          if (!/[@$!%*?&#]/.test(v)) {
            this.text = "Password must contain at least one special character";
            this.PassRule4 = false;
            return this.text;
          }
          this.PassRule4 = true;

          if (v.length < 8) {
            this.text = "Password must be at least 8 characters";
            this.PassRule5 = false;
            return this.text;
          }
          this.PassRule5 = true;
        },
      ],
    };
  },
  computed: {
    ...mapState(useAuthStore, ["user", "verified"]),
    ...mapState(useCountryStore, ["countries", "CountryName"]),
  },
  methods: {
    mergeProps,
    ...mapActions(useAuthStore, ["registerUser", "signUp", "NotVerified"]),
    ...mapActions(useCountryStore, ["fetchCountry"]),
    async submit() {
      let valid = await this.$refs.form.validate();
      this.signUp();
      if (valid.valid === true) {
        await this.registerUser();
        console.log("Form submitted successfully!");
        // Add your form submission logic here
      } else {
        console.log("Form validation failed.");
      }
    },
  },
  mounted() {
    this.NotVerified();

    this.fetchCountry();
  },
  watch: {
    "user.country"(newCountry) {
      const selectedCountry = this.CountryName.find(
        (country) => country.name === newCountry
      );
      if (selectedCountry) {
        this.user.countryCode = selectedCountry.phone;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 700px) {
  .v-form {
    width: 90% !important;
  }
}
@media (max-width: 500px) {
  .radio {
    display: flex !important;
    flex-direction: column !important;
  }
}
@media (min-width: 700px) and (max-width: 950px) {
  .v-form {
    width: 70% !important;
  }
}
</style>
