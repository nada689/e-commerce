<template>
  <v-layout>
    <v-app-bar app color="white" flat>
      <v-container>
        <v-row align="center" justify="space-between">
          <!-- Logo -->
          <v-col cols="2">
            <v-toolbar-title class="logo">
              <h2>Robies</h2>
            </v-toolbar-title>
          </v-col>

          <!-- Navigation links for larger screens -->
          <v-col cols="6" class="d-none d-md-flex justify-center">
            <v-btn text>Home</v-btn>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">Shop</v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Category 1</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Category 2</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn text>Our Story</v-btn>
            <v-btn text>Blog</v-btn>
            <v-btn text>Contact Us</v-btn>
            <v-btn @click="$router.push('/dashboard')">Dashboard</v-btn>
          </v-col>

          <!-- Icons and Login button -->
          <v-col cols="4" class="text-right d-none d-md-flex">
            <v-icon>mdi-magnify</v-icon>
            <v-icon>mdi-heart-outline</v-icon>
            <v-icon>mdi-cart-outline</v-icon>
            <v-btn
              v-if="!isLoggedIn"
              id="login-btn"
              color="white"
              @click="$router.push('/LoginPage')"
              outlined
              >Login</v-btn
            >
            <v-btn
              v-else
              id="logout-btn"
              color="white"
              @click="logout"
              outlined
              style="background-color: #000; border-radius: 30px"
              >Logout</v-btn
            >
            <v-btn
              id="login-btn"
              color="white"
              outlined
              @click="$router.push('/sign-up')"
              >SignUp</v-btn
            >
          </v-col>

          <!-- Navigation icon for smaller screens -->
          <v-col cols="2" class="d-flex d-md-none">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <!-- Navigation drawer for smaller screens -->
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list>
        <v-list-item>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Shop</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Our Story</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Blog</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Contact Us</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title @click="$router.push('/dashboard')"
            >Dashboard</v-list-item-title
          >
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-heart-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cart-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item>
          <v-btn
            v-if="!isLoggedIn"
            id="login-btn"
            color="white"
            @click="$router.push('/LoginPage')"
            outlined
            >Login</v-btn
          >
          <v-btn
            v-else
            id="login-btn-drawer"
            color="black"
            outlined
            block
            @click="logout"
            >Logout</v-btn
          >
        </v-list-item>
        <v-list-item>
          <v-btn
            id="login-btn-drawer"
            color="black"
            outlined
            block
            @click="$router.push('/sign-up')"
            >SignUp</v-btn
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer></v-layout
  >
</template>

<script>
export default {
  name: "ProductHeader",
  data() {
    return {
      drawer: false,
      isLoggedIn: !!localStorage.getItem("token"),
    };
  },
  methods: {
    checkLoginStatus() {
      this.isLoggedIn = !!localStorage.getItem("token");
    },
    logout() {
      localStorage.removeItem("token"); // حذف التوكن
      this.isLoggedIn = false;
      this.$router.push("/LoginPage"); // إعادة التوجيه إلى صفحة تسجيل الدخول
    },
  },
  created() {
    this.checkLoginStatus();
  },
  watch: {
    // راقب التغيير في التوكن لتحديث حالة تسجيل الدخول
    $route: "checkLoginStatus",
  },
};
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid #e0e0e0;
}
.v-btn {
  font-weight: bold;
}
.text-right {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#login-btn {
  padding: 10px;
  background-color: black;
  border-radius: 50px;
  color: white;
}
#login-btn-drawer {
  color: white;
}
.logo img {
  height: 40px;
}
@media (max-width: 960px) {
  .d-none {
    display: none !important;
  }
  .d-flex {
    display: flex !important;
  }
}
@media (max-width: 725px) {
  .logo {
    width: 100px !important;
  }
}
</style>
