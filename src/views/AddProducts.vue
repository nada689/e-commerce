<template>
  <v-container fluid>
    <v-row>
      <!--ProductsTable Section -->
      <v-col cols="12" class="mt-16">
        <ProductsTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsTable from "../components/AddProducts/ProductsTable.vue";
export default {
  components: { ProductsTable },
};
</script>

<style lang="scss" scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
