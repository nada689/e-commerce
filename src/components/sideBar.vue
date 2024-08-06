<template>
  <v-layout>
    <!-- زر التبديل في الأجهزة المحمولة -->
    <v-app-bar app style="background-color: white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- الشريط الجانبي -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isMobile"
      app
      style="background-color: var(--main-color); color: white"
    >
      <v-list density="compact" nav>
        <v-list-item
          link
          @click="$router.push('/dashboard')"
          prepend-icon="mdi-home-outline"
          >Dashboard
        </v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-invoice-list-outline"
          @click="$router.push('/add-products')"
          >Add Produts
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
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
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Orders", icon: "mdi-receipt" },
        { title: "Products", icon: "mdi-package-variant" },
        { title: "Customers", icon: "mdi-account-group" },
        { title: "Reports", icon: "mdi-chart-line" },
        { title: "Integrations", icon: "mdi-puzzle" },
      ],
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
/* تخصيص الشريط الجانبي ليتوسع عند مرور الماوس */
.v-navigation-drawer {
  transition: width 0.3s ease;
}

.v-navigation-drawer:hover {
  width: 250px !important;
}
</style>
