<template>
  <v-card class="mt-2" style="width: 95%; margin: auto">
    <div class="d-flex px-5 pt-2">
      <p style="font-size: 20px !important">Latest Orders</p>
      <v-spacer></v-spacer>
      <v-btn variant="text" append-icon="mdi-arrow-right-thin">more</v-btn>
    </div>
    <v-card-text>
      <v-table>
        <thead>
          <tr style="background-color: var(--secound-color); color: grey">
            <th>Products</th>
            <th>QTY <v-icon>mdi-menu-down</v-icon></th>
            <th>Date <v-icon>mdi-menu-down</v-icon></th>
            <th>Revenue <v-icon>mdi-menu-down</v-icon></th>
            <th>Net Profit <v-icon>mdi-menu-down</v-icon></th>
            <th>Status <v-icon>mdi-menu-down</v-icon></th>
            <th>Actions <v-icon>mdi-menu-down</v-icon></th>
          </tr>
        </thead>
        <tbody style="text-align: start !important">
          <tr v-for="order in latestOrders" :key="order.products">
            <td>
              <v-avatar color="grey" size="x-small"
                ><v-icon icon="mdi-chair-rolling"></v-icon
              ></v-avatar>
              {{ order.products }}
            </td>
            <td>X{{ order.qty }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.revenue }}</td>
            <td>{{ order.netProfit }}</td>
            <td>{{ order.status }}</td>
            <td>
              <v-icon @click="editOrder(order)">mdi-pencil-outline</v-icon>
              <v-icon @click="deleteOrder(order)">mdi-delete-outline</v-icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    latestOrders: {
      type: Array,
      required: true,
    },
  },
};
</script>
