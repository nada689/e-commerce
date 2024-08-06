<template>
  <!-- navigation-drawer  -->
  <router-link to="/products"> home </router-link>
  <v-layout>
    <v-navigation-drawer
      expand-on-hover
      rail
      style="background-color: var(--main-color); color: white"
    >
      <v-list density="compact" nav>
        <v-list-item
          link
          @click="$router.push('/')"
          prepend-icon="mdi-home-outline"
          >Dashbourd
        </v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-invoice-list-outline"
          @click="$router.push('/produtsView')"
          >Produts
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {};
</script>
