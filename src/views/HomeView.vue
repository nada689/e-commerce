<template>
  <ProductHeader />
  <v-layout>
    <v-container fluid>
      <v-row>
        <!-- Sidebar Filter for larger screens -->
        <v-col cols="12" md="3" class="hidden-sm-and-down">
          <SidebarFilter />
        </v-col>
        <v-col cols="12" md="9">
          <v-row>
            <!-- Sidebar Filter as a drawer for smaller screens -->
            <v-col cols="12" class="d-flex d-md-none">
              <v-btn icon @click="drawer = true">
                <v-icon>mdi-filter-variant</v-icon>
              </v-btn>
              <v-navigation-drawer v-model="drawer" temporary absolute>
                <SidebarFilter />
              </v-navigation-drawer>
            </v-col>
            <!-- Product Cards -->
            <v-col cols="12">
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </v-col>
          </v-row>
          <ProductPagination />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
  <PageFooter />
</template>

<script>
import ProductHeader from "../components/products/ProductHeader.vue";
import SidebarFilter from "../components/products/SidebarFilter.vue";
import ProductCard from "../components/products/ProductCard.vue";
import ProductPagination from "../components/products/ProductPagination.vue";
import PageFooter from "../components/products/PageFooter.vue";

export default {
  name: "ProductsView",
  components: {
    ProductHeader,
    SidebarFilter,
    ProductCard,
    ProductPagination,
    PageFooter,
  },
  data() {
    return {
      drawer: false,
      products: [
        { id: 1, image: "path/to/image1.jpg", title: "Product 1", price: 20 },
        { id: 2, image: "path/to/image2.jpg", title: "Product 2", price: 30 },
        // Add all product details here
      ],
    };
  },
};
</script>
<style scoped>
body {
  font-family: "Arial", sans-serif;
}
</style>
