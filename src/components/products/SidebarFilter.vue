<template>
  <v-container>
    <v-card w-100>
      <v-card-title
        class="expansion-panel-header"
        @click="togglePanel('categoryOpen')"
      >
        <v-icon>{{
          categoryOpen ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
        <span>Categories</span>
      </v-card-title>
      <v-expand-transition>
        <div v-if="categoryOpen">
          <v-checkbox
            v-for="(option, index) in options"
            :key="index"
            v-model="selectedCategoryOptions"
            :label="option"
            :value="option"
            class="price-range"
          ></v-checkbox>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card>
      <v-card-title
        class="expansion-panel-header"
        @click="togglePanel('colorOpen')"
      >
        <v-icon>{{ colorOpen ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        <span>Color Filter</span>
      </v-card-title>
      <v-expand-transition>
        <div v-if="colorOpen">
          <v-checkbox
            v-for="(color, index) in colors"
            :key="index"
            v-model="selectedColorOptions"
            :label="color.name"
            :value="color.name"
            class="color-checkbox"
            :style="{ color: color.hex }"
          >
            <span
              class="color-box"
              :style="{ backgroundColor: color.hex }"
            ></span>
          </v-checkbox>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card>
      <v-card-title
        class="expansion-panel-header"
        @click="togglePanel('sizeOpen')"
      >
        <v-icon>{{ sizeOpen ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        <span>Size Filter</span>
      </v-card-title>
      <v-expand-transition>
        <div v-if="sizeOpen">
          <v-checkbox
            v-for="(option, index) in sizes"
            :key="index"
            v-model="selectedSizeOptions"
            :label="option"
            :value="option"
            class="price-range"
          ></v-checkbox>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card>
      <v-card-title
        class="expansion-panel-header"
        @click="togglePanel('priceOpen')"
      >
        <v-icon>{{ priceOpen ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        <span>Price Filter</span>
      </v-card-title>
      <v-expand-transition>
        <div v-if="priceOpen">
          <v-range-slider
            v-model="priceRange"
            :min="0"
            :max="500"
            class="price-range"
          ></v-range-slider>
          <div>Price: {{ priceRange[0] }} - {{ priceRange[1] }}</div>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categoryOpen: false,
      colorOpen: false,
      sizeOpen: false,
      priceOpen: false,
      options: ["Men", "Women", "Children"],
      colors: [
        { name: "Red", hex: "#f44336" },
        { name: "Blue", hex: "#2196f3" },
        { name: "Green", hex: "#4caf50" },
      ],
      sizes: ["S", "M", "L", "XL"],
      selectedCategoryOptions: [],
      selectedColorOptions: [],
      selectedSizeOptions: [],
      priceRange: [0, 500],
    };
  },
  methods: {
    togglePanel(panel) {
      this[panel] = !this[panel];
      console.log("Panel state:", this[panel]);
    },
  },
};
</script>

<style scoped>
.expansion-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.price-range {
  margin-top: 10px;
}

.head {
  font-weight: bold;
  margin-top: 10px;
}

.v-card {
  margin-bottom: 10px;
}

.color-checkbox .v-input--selection-controls__ripple {
  background-color: transparent; /* Make checkbox background transparent */
}

.color-checkbox .v-checkbox__input:checked ~ .v-checkbox__control {
  border-color: currentColor; /* Change border color to match text color */
}

.color-checkbox .color-box {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 3px;
}
.v-card-title span {
  font-size: 22px;
  float: left;
}
.v-card-title .v-icon {
  font-size: 22px;
  float: right;
}
.v-container {
  margin-top: 150px;
}
</style>
