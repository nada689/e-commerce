<template>
  <!-- Sidebar -->
  <v-col cols="12" md="3" lg="2">
    <sideBar />
  </v-col>
  <v-row class="ml-5">
    <v-col cols="12">
      <information-web />
    </v-col>
    <v-col cols="12">
      <advance-report />
    </v-col>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <RevenueByDevice />
          </v-col>
          <v-col cols="12" md="6">
            <Traffic />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <!-- Bestsellers Section -->
    <v-col cols="12">
      <bestSellers :bestsellers="bestsellers" />
    </v-col>

    <!-- Latest Orders Section -->
    <v-col cols="12">
      <lastOrders :latestOrders="latestOrders" />
    </v-col>
  </v-row>
</template>

<script>
import AdvanceReport from "../components/AdvanceReport.vue";
import InformationWeb from "../components/InformationWeb.vue";
import RevenueByDevice from "../components/RevenueByDevice.vue";
import Traffic from "../components/TrafficByDevice.vue";
import bestSellers from "@/components/bestSellers.vue";
import lastOrders from "@/components/lastOrders.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  components: {
    AdvanceReport,
    RevenueByDevice,
    Traffic,
    InformationWeb,
    bestSellers,
    lastOrders,
    sideBar,
  },
  data() {
    return {
      bestsellers: [
        {
          product: "Deco accessory",
          price: "$21.19",
          sold: 409,
          profit: 1928.27,
        },
        { product: "Pottery Vase", price: "$14.93", sold: 388, profit: 564.45 },
        { product: "Rose Hobblack", price: "$8.15", sold: 243, profit: 727.87 },
        {
          product: "Flowering Cactus",
          price: "$74.26",
          sold: 563,
          profit: 10325.47,
        },
      ],
      latestOrders: [
        {
          products: "Analog Table Clock",
          qty: 2,
          date: "Feb 5, 2020",
          revenue: "$83.52",
          netProfit: "$90.76",
          status: "Pending",
        },
        {
          products: "Basket with handles",
          qty: 3,
          date: "Sep 8, 2020",
          revenue: "$565.24",
          netProfit: "$56.41",
          status: "Shipping",
        },
        {
          products: "Flower vase",
          qty: 3,
          date: "Dec 18, 2020",
          revenue: "$115.26",
          netProfit: "$85.66",
          status: "Refund",
        },
        {
          products: "Deco accessory",
          qty: 2,
          date: "Aug 13, 2020",
          revenue: "$675.91",
          netProfit: "$88.80",
          status: "Completed",
        },
        {
          products: "Pottery Vase",
          qty: 3,
          date: "May 8, 2020",
          revenue: "$910.71",
          netProfit: "$46.52",
          status: "Shipping",
        },
        {
          products: "Rose Hobblack",
          qty: 4,
          date: "Nov 15, 2020",
          revenue: "$897.90",
          netProfit: "$81.54",
          status: "Completed",
        },
        {
          products: "Table Lamp",
          qty: 3,
          date: "Oct 12, 2020",
          revenue: "$673.19",
          netProfit: "$90.76",
          status: "Pending",
        },
        {
          products: "Wall Clock",
          qty: 4,
          date: "Aug 19, 2020",
          revenue: "$883.56",
          netProfit: "$76.00",
          status: "Refund",
        },
        {
          products: "Flowering Cactus",
          qty: 3,
          date: "Oct 8, 2020",
          revenue: "$135.18",
          netProfit: "$86.65",
          status: "Refund",
        },
        {
          products: "Shell Collection",
          qty: 4,
          date: "Sep 23, 2020",
          revenue: "$375.34",
          netProfit: "$48.28",
          status: "Completed",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
