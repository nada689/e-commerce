<template>
  <v-card height="100%">
    <v-card-title class="d-flex">
      <span>Traffic</span>
      <v-spacer></v-spacer>
      <span>more<v-icon>mdi-arrow-right</v-icon></span>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <div class="traffic-data">
            <div class="traffic-item">
              <span>Store Visits</span>
              <v-spacer></v-spacer>
              <span class="value">{{ storeVisits }}</span>
              <span
                class="percentage"
                :class="storeVisitsChange > 0 ? 'text-success' : 'text-danger'"
              >
                {{ storeVisitsChange }}%
              </span>
            </div>
            <div class="traffic-item">
              <span>Visitors</span>
              <v-spacer></v-spacer>
              <span class="value">{{ visitors }}</span>
              <span
                class="percentage"
                :class="visitorsChange > 0 ? 'text-success' : 'text-danger'"
              >
                {{ visitorsChange }}%
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <canvas id="trafficChart"></canvas>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

export default {
  data() {
    return {
      storeVisits: 8950,
      storeVisitsChange: 22,
      visitors: 1520,
      visitorsChange: -24,
      trafficData: [12, 19, 3, 5, 2, 3, 9],
    };
  },
  mounted() {
    const ctx = document.getElementById("trafficChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["16", "18", "20", "22", "24", "26", "28"],
        datasets: [
          {
            label: "Store visits chart",
            data: this.trafficData,
            fill: false,
            borderColor: "#ff6600",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.traffic-data {
  display: flex;
  flex-direction: column;
}
.traffic-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.traffic-item .value {
  font-weight: bold;
  margin-right: 8px;
}
.traffic-item .percentage {
  font-size: 0.875rem;
}
.text-success {
  color: #4caf50;
}
.text-danger {
  color: #f44336;
}
</style>
