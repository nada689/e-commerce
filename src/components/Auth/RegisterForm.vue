<template>
  <v-form ref="form" class="w-1/2 m-auto py-5">
    <div class="text-center" justify="end">
      <!-- Country/Region -->
      <div>
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
                <span
                  >Country / Region <span class="text-third">*</span> :</span
                >
              </template>
            </v-select>
          </template>
        </v-tooltip>
      </div>
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
            <v-radio label="Buyer" value="1"></v-radio>
            <v-radio label="Seller" value="2"></v-radio>
            <v-radio label="Both" value="3"></v-radio>
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
      <!-- Password Input Field with Validation Rules -->
      <v-menu open-on-hover location="right" offset-x>
        <template v-slot:activator="{ props: menu }">
          <v-tooltip :text="tooltipText" location="top">
            <template v-slot:activator="{ props: tooltip }">
              <v-text-field
                v-model="user.password"
                type="password"
                variant="outlined"
                placeholder="Set the login password"
                :rules="[validatePassword]"
                v-bind="mergeProps(menu, tooltip)"
                required
              >
                <template v-slot:prepend>
                  <span>
                    Login Password <span class="text-third">*</span> :
                  </span>
                </template>
              </v-text-field>
            </template>
          </v-tooltip>
        </template>

        <!-- Password Validation Rules List -->
        <v-list>
          <v-list-item
            v-for="(rule, index) in passwordValidationRules"
            :key="index"
          >
            <v-list-item-title>
              <v-icon :color="rule.isValid ? 'green' : 'red'">
                {{
                  rule.isValid
                    ? "mdi-checkbox-marked-circle-outline"
                    : "mdi-alpha-x-circle-outline"
                }}
              </v-icon>
              {{ rule.message }}
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
              (v) => /^\+/.test(v) || 'Please enter a valid Country Code',
            ]"
          >
            <template v-slot:prepend>
              <span>Phone Number <span class="text-third">*</span> :</span>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12" sm="7" md="7" lg="7" xs="12">
          <input type="hidden" v-model="user.keyCode" />
          <v-tooltip text="Phone Number is required" location="top">
            <template v-slot:activator="{ props }">
              <v-text-field
                v-model="user.phoneNumber"
                variant="outlined"
                placeholder="Phone Number"
                v-bind="props"
                :rules="[(v) => !!v || 'Phone Number is required']"
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
      tooltipText: "",
      passwordValidationStatus: {
        required: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSpecialChar: false,
        minLength: false,
      },
      passwordValidationRules: [
        {
          message: "Password is required",
          isValid: false,
          validator: this.validateRequired,
        },
        {
          message: "Password must contain at least one uppercase letter",
          isValid: false,
          validator: this.validateUppercase,
        },
        {
          message: "Password must contain at least one lowercase letter",
          isValid: false,
          validator: this.validateLowercase,
        },
        {
          message: "Password must contain at least one number",
          isValid: false,
          validator: this.validateNumber,
        },
        {
          message: "Password must contain at least one special character",
          isValid: false,
          validator: this.validateSpecialChar,
        },
        {
          message: "Password must be at least 8 characters long",
          isValid: false,
          validator: this.validateMinLength,
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
    validatePassword(value) {
      // Run all validation rules and update the status
      this.passwordValidationRules.forEach((rule) => {
        rule.isValid = rule.validator(value);
      });

      // Find the first invalid rule, if any
      const invalidRule = this.passwordValidationRules.find(
        (rule) => !rule.isValid
      );

      // Update the tooltip text and return the appropriate validation message
      if (invalidRule) {
        this.tooltipText = invalidRule.message;
        return invalidRule.message;
      } else {
        this.tooltipText = "Password meets all requirements";
        return true;
      }
    },

    validateRequired(value) {
      return !!value;
    },
    validateUppercase(value) {
      return /[A-Z]/.test(value);
    },
    validateLowercase(value) {
      return /[a-z]/.test(value);
    },
    validateNumber(value) {
      return /[0-9]/.test(value);
    },
    validateSpecialChar(value) {
      return /[@$!%*?&#]/.test(value);
    },
    validateMinLength(value) {
      return value.length >= 8;
    },
  },
  mounted() {
    this.NotVerified();

    this.fetchCountry();
  },
  watch: {
    "user.password"(newPassword) {
      // Update the validation status when the password changes
      this.validatePassword(newPassword);
    },
    "user.country"(newCountry) {
      const selectedCountry = this.CountryName.find(
        (country) => country.name === newCountry
      );
      if (selectedCountry) {
        this.user.countryCode = "+" + selectedCountry.phone;
        this.user.keyCode = selectedCountry.keyCode;
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
