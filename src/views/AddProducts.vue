<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar -->
      <v-col cols="12" md="3" lg="2">
        <sideBar />
      </v-col>

      <!-- Main Content -->
      <v-col cols="12" md="7" lg="10">
        <v-row>
          <!-- addProductsTable Section -->
          <v-col cols="12">
            <addProductsTable />
          </v-col>

          <!-- Sales Forecast Section 
          <v-col cols="12" md="6">
            <salesForecast :salesForecast="salesForecast" />
          </v-col>-->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import addProductsTable from "@/components/addProductsTable.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  components: { addProductsTable, sideBar },
};
</script>

<style lang="scss" scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
