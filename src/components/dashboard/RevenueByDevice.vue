<template>
  <v-card height="100%">
    <v-card-title class="d-flex justify-space-between">
      <span> Revenue by device </span>
      <v-spacer></v-spacer>
      <span> more <v-icon>mdi-arrow-right</v-icon> </span>
    </v-card-title>

    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <canvas id="revenueChart"></canvas>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" justify="space-between" align-item="center">
          <ul class="revenue-list">
            <li v-for="(item, index) in revenueData1" :key="index">
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
              <span>{{ item.label }}</span>
              <v-spacer />

              <span class="value">{{ item.value }}</span>
              <v-spacer />
              <span class="percentage">{{ item.percentage }}</span>
              <v-spacer />
            </li>
          </ul>
        </v-col>
        <v-col cols="6">
          <ul class="revenue-list">
            <li v-for="(item, index) in revenueData2" :key="index">
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
              <span>{{ item.label }}</span>
              <v-spacer />

              <span class="value">{{ item.value }}</span>
              <v-spacer />
              <span class="percentage">{{ item.percentage }}</span>
              <v-spacer />
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default {
  data() {
    return {
      revenueData: [
        {
          label: "Desktop",
          value: "$893.03",
          percentage: "64.2%",
          color: "#ff4d4d",
          icon: "mdi-monitor",
        },
        {
          label: "Tablet",
          value: "$550.81",
          percentage: "15.3%",
          color: "#ff8c1a",
          icon: "mdi-tablet",
        },
        {
          label: "Mobile",
          value: "$755.75",
          percentage: "48.6%",
          color: "#0080ff",
          icon: "mdi-cellphone",
        },
        {
          label: "Unknown",
          value: "$150.84",
          percentage: "8.6%",
          color: "#00cc66",
          icon: "mdi-help-circle",
        },
      ],
      revenueData1: [
        {
          label: "Desktop",
          value: "$893.03",
          percentage: "64.2%",
          color: "#ff4d4d",
          icon: "mdi-monitor",
        },
        {
          label: "Tablet",
          value: "$550.81",
          percentage: "15.3%",
          color: "#ff8c1a",
          icon: "mdi-tablet",
        },
      ],
      revenueData2: [
        {
          label: "Mobile",
          value: "$755.75",
          percentage: "48.6%",
          color: "#0080ff",
          icon: "mdi-cellphone",
        },
        {
          label: "Unknown",
          value: "$150.84",
          percentage: "8.6%",
          color: "#00cc66",
          icon: "mdi-help-circle",
        },
      ],
    };
  },
  mounted() {
    const ctx = document.getElementById("revenueChart").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: this.revenueData.map((item) => item.label),
        datasets: [
          {
            data: [64.2, 15.3, 48.6, 8.6],
            backgroundColor: this.revenueData.map((item) => item.color),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const item = this.revenueData[tooltipItem.dataIndex];
                return `${item.label}: ${item.percentage}`;
              },
            },
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.revenue-list {
  list-style: none;
  padding: 0;
}
.revenue-list li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.revenue-list .value {
  margin-left: auto;
  font-weight: bold;
}
.revenue-list .percentage {
  margin-left: 8px;
  color: gray;
}
</style>
