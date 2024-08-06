<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar -->
      <v-col cols="12" md="3" lg="2">
        <sideBar />
      </v-col>

      <!-- addProductsTable Section -->
      <v-col cols="12" class="mt-16">
        <addProductsTable />
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
