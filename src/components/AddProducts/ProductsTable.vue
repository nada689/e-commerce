<template>
  <v-card class="mt-2">
    <div
      class="d-flex px-5 pt-2 pb-2"
      style="background-color: var(--secound-color) !important"
    >
      <p style="font-size: 20px !important">Orders</p>
      <v-spacer></v-spacer>
      <v-btn
        variant="text"
        append-icon="mdi-plus"
        @click="dialog = true"
        style="background-color: white !important"
        >add
      </v-btn>
    </div>
    <v-card-text>
      <v-data-table :headers="headers" :items="this.Orders">
        <template v-slot:item="{ item }">
          <tr style="text-align: start !important">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td v-html="item.description"></td>
            <td>
              <v-icon @click="editOrder(order)">mdi-pencil-outline</v-icon>
              <v-icon @click="deleteProduct(item.id)"
                >mdi-delete-outline</v-icon
              >
              <v-icon>mdi-dots-horizontal</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
  <!-- Dialog for Add Products Form -->
  <v-dialog v-model="dialog" width="90%">
    <v-card width="100%" class="popup">
      <div class="d-flex justify-space-between align-center title">
        <div style="color: var(--main-color)">Add Product</div>
        <v-btn icon="mdi-close" @click="CloseDialog"></v-btn>
      </div>
      <!-- Pass the close-dialog event from the form to the parent component -->
      <ProductsForm @CloseDialog="CloseDialog" />
    </v-card>
  </v-dialog>
</template>
<script>
import ProductsForm from "@/components/AddProducts/ProductsForm.vue";
export default {
  components: { ProductsForm },
  data() {
    return {
      Orders: [],
      dialog: false,
      sortBy: ["date", "asc"],
      headers: [
        {
          title: "ID",
          align: "start",
          key: "id",
          sortable: false,
        },
        { title: "Product Name", align: "start", key: "name" }, // Changed from "products" to "name"
        { title: "Price", align: "start", key: "price" },
        {
          title: "Description",
          align: "start",
          key: "description",
          sortable: false,
        },
        { title: "Actions", align: "start", key: "actions", sortable: false }, // Actions typically aren't sortable
      ],
    };
  },
  mounted() {
    this.loadOrdersFromLocalStorage();
  },
  methods: {
    loadOrdersFromLocalStorage() {
      const storedOrders = JSON.parse(localStorage.getItem("products")) || [];
      this.Orders = storedOrders;
    },
    closeDialog() {
      this.dialog = false;
      this.loadOrdersFromLocalStorage();
    },
    deleteProduct(productId) {
      // Get existing products from local storage
      let products = JSON.parse(localStorage.getItem("products")) || [];

      // Filter out the product with the specified ID
      products = products.filter((product) => product.id !== productId);

      // Save back to local storage
      localStorage.setItem("products", JSON.stringify(products));

      // Optionally, you can refresh the list or trigger a method to update the view
      this.loadOrdersFromLocalStorage();
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  width: 96.5%;
  margin: auto;
}
.popup .title {
  padding: 20px 20px 0 !important;
  font-size: 23px;
  font-weight: bold;
  color: var(--main-color);
  position: relative;
  margin-bottom: 15px;
  &::before {
    content: "";
    position: absolute;
    bottom: -15px;
    height: 3px;
    width: calc(100% - 40px);
    background: var(--secound-color);
    left: 50%;
    transform: translateX(-50%);
  }
}
.v-btn--icon.v-btn--density-default {
  color: var(--main-color);
  width: auto;
  height: auto;
  box-shadow: none;
  &:hover {
    background: #fff;
  }
}
</style>
