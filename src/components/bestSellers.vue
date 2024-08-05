<template>
  <v-card class="mt-2">
    <div class="d-flex px-5 pt-2">
      <p style="font-size: 20px !important">Bestsellers</p>
      <v-spacer></v-spacer>
      <v-btn variant="text" append-icon="mdi-arrow-right-thin">more</v-btn>
    </div>
    <v-card-text>
      <v-table>
        <thead>
          <tr style="background-color: var(--secound-color); color: grey">
            <th>Product</th>
            <th>Price <v-icon>mdi-menu-down</v-icon></th>
            <th>Sold <v-icon>mdi-menu-down</v-icon></th>
            <th>Profit <v-icon>mdi-menu-down</v-icon></th>
          </tr>
        </thead>
        <tbody style="text-align: start !important">
          <tr v-for="item in bestsellers" :key="item.product">
            <td>{{ item.product }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.sold }}</td>
            <td>{{ formatCurrency(item.profit) }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    bestsellers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatCurrency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    },
  },
};
</script>
