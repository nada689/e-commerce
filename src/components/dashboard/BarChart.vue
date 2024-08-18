// components/BarChart.vue
<template>
  <div>
    <Bar :chart-data="data" :options="options"></Bar>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  extends: Bar,
  props: {
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
};
</script>
