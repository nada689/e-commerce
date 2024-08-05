<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in stats" :key="index" xs="5" md="3">
        <v-card class="pa-4">
          <div class="d-flex justify-space-between align-center">
            <div>
              <div class="text-h6 font-weight-medium">{{ item.title }}</div>
              <div class="text-h4 font-weight-bold">{{ item.value }}</div>
            </div>
            <div>
              <div
                :style="{ color: item.changeColor }"
                class="flex align-center"
              >
                <span class="text-subtitle-1 font-weight-medium">{{
                  item.change
                }}</span>
              </div>
              <canvas :id="'chart-' + index" class="mt-2"></canvas>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
// تأكد من تسجيل المكونات المطلوبة لإنشاء الرسم البياني
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

export default {
  data() {
    return {
      stats: [
        {
          title: "Revenue",
          value: "$7,825",
          change: "+22%",
          changeColor: "orange",
          chartData: [10, 20, 30, 40, 50, 60],
          borderColor: "orange",
        },
        {
          title: "Orders",
          value: "920",
          change: "-25%",
          changeColor: "red",
          chartData: [60, 50, 40, 30, 20, 10],
          borderColor: "red",
        },
        {
          title: "Visitors",
          value: "15.5K",
          change: "+49%",
          changeColor: "green",
          chartData: [20, 40, 30, 50, 70, 60],
          borderColor: "green",
        },
        {
          title: "Conversion",
          value: "28%",
          change: "+1.9%",
          changeColor: "orange",
          chartData: [10, 15, 25, 20, 30, 35],
          borderColor: "orange",
        },
      ],
    };
  },
  mounted() {
    this.stats.forEach((stat, index) => {
      this.renderChart(stat.chartData, `chart-${index}`, stat.borderColor);
    });
  },
  methods: {
    renderChart(data, chartId, borderColor) {
      new ChartJS(document.getElementById(chartId), {
        type: "line",
        data: {
          labels: ["", "", "", "", "", ""],
          datasets: [
            {
              data: data,
              borderColor: borderColor,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
canvas {
  height: 50px !important;
}
.v-card {
  border-radius: 10px;
}
.text-h6 {
  font-size: 16px;
}
.text-h4 {
  font-size: 24px;
}
.v-icon {
  font-size: 18px;
}
</style>
