<template>
  <div class="login-container">
    <div class="content-container">
      <v-card class="login-card" elevation="10">
        <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="email"
              label="Email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="passwordRules"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" :disabled="!valid">Login</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <div class="login-links">
          <v-row justify="space-between">
            <v-col>
              <a href="#">Create Account</a>
            </v-col>
            <v-col class="text-right">
              <a href="#">Mobile Number Sign In</a>
            </v-col>
          </v-row>
        </div>
        <v-card-text class="social-login">
          <div class="sign-in-with">Sign in with</div>
          <v-btn icon>
            <v-icon color="blue darken-3">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="red">mdi-google</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="blue darken-1">mdi-linkedin</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
      <div class="side-text">
        <h2>Welcome Back!</h2>
        <p>Sign in to continue to your account.</p>
      </div>
    </div>
    <div class="animation-container">
      <div class="circle"></div>
      <div class="triangle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be at least 6 characters",
      ],
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  position: relative;
}

.content-container {
  display: flex;
  align-items: center;
}

.login-card {
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
}

.side-text {
  margin-left: 40px;
  color: white;
}

.headline {
  text-align: center;
  color: #4a4a4a;
  font-weight: bold;
}

.v-text-field {
  margin-bottom: 20px;
}

.login-links {
  margin-top: 20px;
}

.social-login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.sign-in-with {
  margin-right: 10px;
}

.v-btn {
  color: white;
}

.animation-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.circle {
  width: 100px;
  height: 100px;
  background-color: #ff6b6b;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: 10%;
  animation: moveCircle 4s infinite ease-in-out;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 100px solid #6a0572;
  position: absolute;
  bottom: 20%;
  right: 10%;
  animation: moveTriangle 5s infinite ease-in-out;
}

@keyframes moveCircle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes moveTriangle {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}
</style>
