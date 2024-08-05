<template>
  <!-- navigation-drawer  -->
  <v-layout>
    <v-navigation-drawer rail permanent>
      <v-list nav class="pt-16 pa-5 px-2">
        <v-list-item
          link
          @click="$router.push('/')"
          prepend-icon="mdi-home-outline"
        >
        </v-list-item>

        <v-list-item link prepend-icon="mdi-chart-pie-outline"> </v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-cog-outline"
          @click="$router.push('/Settings_Admin')"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {};
</script>
