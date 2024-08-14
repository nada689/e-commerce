<template>
  <v-container class="flex justify-center items-center h-full">
    <v-row>
      <v-col>
        <div
          ref="sliderContainer"
          class="relative w-full h-20 bg-gray-200 rounded-full overflow-hidden select-none"
        >
          <div
            class="slider-bg absolute top-0 left-0 h-full bg-green-500 transition-[width] duration-300 ease-linear"
            :style="{ width: bgWidth }"
          ></div>
          <span
            class="slider-icon absolute top-0 w-20 h-full bg-green-500 flex justify-center items-center cursor-pointer transition-[left] duration-300 ease-linear"
            :style="{ left: iconLeft }"
            @mousedown="startDrag"
            :class="{ 'bg-green-400': isVerified }"
          >
            <v-icon v-if="!isVerified">mdi-chevron-double-right</v-icon>
            <span v-if="isVerified" class="text-2xl">
              <i class="mdi mdi-check-circle"></i>
              <!-- Use the desired MDI icon here -->
            </span>
          </span>
          <div
            class="slider-text absolute top-0 left-20 right-0 h-full flex justify-center items-center text-gray-500 text-lg"
            :class="{ 'text-white': isVerified }"
          >
            <span v-if="!isVerified && !loading">Please slide to verify</span>
            <span v-if="loading" class="flex items-center">
              <v-progress-circular
                indeterminate
                color="white"
                class="w-5 h-5 mr-2"
              ></v-progress-circular>
              Loading...
            </span>
            <span v-if="isVerified"><b>Verified</b></span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isVerified: false,
      isDragging: false,
      iconLeft: "0px",
      bgWidth: "0px",
      loading: false,
    };
  },
  methods: {
    startDrag() {
      if (!this.isVerified) {
        this.isDragging = true;
        document.body.style.cursor = "grabbing";
        document.addEventListener("mousemove", this.dragging);
        document.addEventListener("mouseup", this.endDrag);
      }
    },
    dragging(event) {
      if (this.isDragging) {
        const container = this.$refs.sliderContainer;
        if (container) {
          const maxMove = container.clientWidth - 80; // Maximum movement based on container width
          const move = Math.min(
            event.clientX - container.getBoundingClientRect().left,
            maxMove
          );
          this.iconLeft = `${move}px`;
          this.bgWidth = `${move}px`;
        }
      }
    },
    endDrag() {
      if (this.isDragging) {
        const threshold = 250; // Verification threshold
        if (parseInt(this.iconLeft) >= threshold) {
          this.loading = true;
          this.iconLeft = `${this.$refs.sliderContainer.clientWidth - 80}px`;
          this.bgWidth = `${this.$refs.sliderContainer.clientWidth - 80}px`;
          setTimeout(() => {
            this.loading = false;
            this.isVerified = true;
            document.body.style.cursor = "default";
          }, 2000); // Simulate loading time, e.g., 2 seconds
        } else {
          this.iconLeft = "0px";
          this.bgWidth = "0px";
        }
        this.isDragging = false;
        document.body.style.cursor = "default";
        document.removeEventListener("mousemove", this.dragging);
        document.removeEventListener("mouseup", this.endDrag);
      }
    },
  },
};
</script>
