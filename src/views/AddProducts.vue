<template>
  <v-container fluid>
    <v-row>
      <!-- Sidebar -->
      <v-col cols="12" md="3" lg="2">
        <SideBar />
      </v-col>

      <!--ProductsTable Section -->
      <v-col cols="12" class="mt-16">
        <ProductsTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsTable from "../components/AddProducts/ProductsTable.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: { ProductsTable, SideBar },
};
</script>

<style lang="scss" scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
