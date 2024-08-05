<template>
  <v-row>
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
  </v-row>
</template>

<script>
import AdvanceReport from "../components/AdvanceReport.vue";
import InformationWeb from "../components/InformationWeb.vue";
import RevenueByDevice from "../components/RevenueByDevice.vue";
import Traffic from "../components/TrafficByDevice.vue";

export default {
  components: {
    AdvanceReport,
    RevenueByDevice,
    Traffic,
    InformationWeb,
  },
};
</script>
