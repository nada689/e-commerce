<template>
  <v-container
    class="parent"
    fluid
    style="
      padding: 0;
      margin: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
    "
  >
    <div class="login-container">
      <div class="nav">
        <ProductHeader />
      </div>
      <div class="login-banner">
        <div class="mb-3">
          <h1 style="font-size: 100px; letter-spacing: 10px">
            E<span style="color: #4834d4">L</span>I<span style="color: #eb4d4b"
              >T</span
            >E
          </h1>
          <h6 style="font-size: 37px; margin-top: -27px">PARTNER EVENT</h6>
        </div>
        <div>
          <div>
            <h1 style="font-size: 45px">TOP 100</h1>
            <h5 style="font-size: 40px; margin-top: -20px">INDUSTRY BRANDS</h5>
            <v-btn
              class="mt-5"
              style="
                border-radius: 30px;
                background-color: #fff;
                color: #000;
                font-size: 20px;
                font-weight: bold;
              "
            >
              Source now
            </v-btn>
          </div>
        </div>
      </div>

      <div class="login-form">
        <h3 class="mt-12" style="font-weight: bold; font-size: 20px">
          Account:
        </h3>
        <input
          type="text"
          placeholder="Enter your email or member ID"
          v-model="account"
        />
        <v-row class="d-flex align-center justify-space-between mt-4 w-100">
          <v-col cols="auto">
            <h3 style="font-weight: bold; font-size: 20px">Password:</h3>
          </v-col>
          <v-col cols="auto" style="margin-top: -28px">
            <a href="#">Forgot password?</a>
          </v-col>
        </v-row>
        <input
          type="password"
          placeholder="Enter password"
          v-model="password"
        />
        <button class="mt-3" @click="signIn">Sign in</button>
        <v-row class="d-flex align-center justify-space-between mt-4 w-100">
          <v-col cols="auto" style="color: #22a6b3">
            <h4>Mobile Number Sign in</h4>
          </v-col>
          <v-col cols="auto" style="margin-top: -15px">
            <a href="#" style="color: #22a6b3; font-weight: bold"
              >Create Account</a
            >
          </v-col>
        </v-row>

        <div class="social-login mt-6 mb-5">
          <p style="font-size: 20px; font-weight: bold; margin-right: 5px">
            Sign in with:
          </p>
          <div style="font-size: 20px">
            <v-icon class="mr-2" style="color: #fbbc05">mdi-google</v-icon>
            <v-icon class="mr-2" style="color: #1877f2">mdi-facebook</v-icon>
            <v-icon class="mr-2" style="color: #004182">mdi-linkedin</v-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" style="flex: 0 0 auto">
      <PageFooter />
    </div>
  </v-container>
</template>

<script>
import PageFooter from "@/components/products/PageFooter.vue";
import ProductHeader from "@/components/products/ProductHeader.vue";
import axios from "axios";

export default {
  components: {
    ProductHeader,
    PageFooter,
  },
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      try {
        const response = await axios.post(
          "https://gcc-eosin.vercel.app/api/v1/auth/login/",
          {
            username: this.account,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response object:", response);

        if (response && response.data) {
          console.log("Login successful:", response.data);
          localStorage.setItem("token", response.data["JWT Token"]);
          this.$router.push("/");
        } else {
          console.error("Response data is missing.");
        }
      } catch (error) {
        console.error(
          "Login failed:",
          error.response ? error.response.data : error.message
        );
        alert(
          "Login failed: " +
            (error.response ? error.response.data.message : error.message)
        );
      }
    },
    signInWith(provider) {
      alert(`Sign in with ${provider} is currently not implemented.`);
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}
.login-container {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url("../assets/6.jpg") no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

.login-banner {
  color: white;
  text-align: left;
}

.login-form {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.login-form h3 {
  margin-bottom: 10px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #ff8c00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-form a {
  display: block;
  text-align: right;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.social-login {
  display: flex;
  justify-content: space-between;
}

.social-login button {
  background: #f1f1f1;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
