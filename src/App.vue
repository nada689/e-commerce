<template>
  <router-view v-if="this.$route.path === '/'" />

  <v-app v-else>
    <!--Menu icon  -->
    <v-app-bar app color="white" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ selectedItem }}</v-toolbar-title>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isMobile"
      app
      color="white"
      dark
    >
      <v-list dense>
        <!-- Bind the selected item to the list items -->
        <v-list-item
          link
          @click="$router.push('/')"
          prepend-icon="mdi-home-outline"
          >Home
        </v-list-item>
        <v-list-item
          link
          @click="$router.push('/dashboard')"
          prepend-icon="mdi-view-dashboard-outline"
          >Dashboard
        </v-list-item>
        <v-list-item
          link
          value="Add Products"
          @click="
            $router.push('/add-products'), (selectedItem = 'Add Products')
          "
          prepend-icon="mdi-invoice-list-outline"
        >
          Add Products
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <!-- Main Contetnt -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { useDisplay } from "vuetify";

export default {
  setup() {
    const { smAndDown } = useDisplay();
    return {
      smAndDown,
    };
  },
  data() {
    return {
      drawer: false,
      selectedItem: "Dashboard", // v-model to store the selected item name
    };
  },
  computed: {
    isMobile() {
      return this.smAndDown;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  --main-color: #131118;
  --secound-color: #eee;
}

.v-navigation-drawer {
  transition: width 0.3s ease;
}

.v-navigation-drawer:hover {
  width: 250px !important;
}
</style>
