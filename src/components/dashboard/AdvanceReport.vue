<template>
  <v-container>
    <v-row class="overflow-hidden">
      <v-col cols="12" md="8">
        <v-card height="100%">
          <div class="d-flex justify-space-between py-4 px-6">
            <h4>Dashboard</h4>
            <span>Advanced Report <v-icon>mdi-arrow-right</v-icon></span>
          </div>

          <v-card-text>
            <v-row>
              <v-col>
                <canvas id="bar-chart"></canvas>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-card-title>Cart</v-card-title>
          <v-card-text class="d-flex flex-column align-center">
            <v-progress-circular
              model-value="38"
              size="100"
              width="10"
              color="#6742ea"
              class="mb-3"
            >
              38%
            </v-progress-circular>
            <div class="flex-1 w-100">
              <div class="flex-1 align-center justify-space-between w-100">
                <p class="flex align-center justify-start">Abandoned Cart:</p>
                <p class="flex align-center justify-end">720</p>
              </div>
              <div class="flex-1 align-center justify-space-between w-100">
                <p class="d-flex align-center justify-start">
                  Abandoned Revenue:
                </p>
                <p class="d-flex align-center justify-end">$5,900</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Chart } from "chart.js";

export default {
  data() {
    return {
      barChartData: {
        labels: [
          "20",
          "22",
          "24",
          "26",
          "28",
          "30",
          "02",
          "04",
          "06",
          "08",
          "10",
          "12",
          "14",
          "16",
        ],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "#FFA500",
            data: [
              2000, 3000, 4000, 2000, 3500, 4500, 2500, 4000, 3500, 6000, 2000,
              4500, 3000, 2500, 4000,
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderBarChart();
  },
  methods: {
    renderBarChart() {
      const ctx = document.getElementById("bar-chart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: this.barChartData,
        options: this.chartOptions,
      });
    },
    goToAdvancedReport() {
      // Handle navigation to advanced report
    },
  },
};
</script>
