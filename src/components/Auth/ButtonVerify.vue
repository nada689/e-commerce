<template>
  <div class="flex justify-center items-center h-full w-10/12">
    <v-row>
      <v-col>
        <div
          ref="sliderContainer"
          class="relative w-full h-16 bg-gray-200 rounded overflow-hidden select-none"
        >
          <div
            class="slider-bg absolute top-0 left-0 h-full bg-green-500 transition-[width] duration-300 ease-linear"
            :style="{ width: bgWidth }"
          ></div>
          <span
            class="slider-icon absolute top-0 w-20 h-full bg-white rounded border z-50 border-black flex justify-center items-center cursor-move transition-[left] duration-300 ease-linear"
            :style="{ left: iconLeft }"
            @mousedown="startDrag"
            @touchstart="startTouch"
            :class="{ 'bg-green-400': isVerified }"
          >
            <v-icon v-if="!isVerified">mdi-chevron-double-right</v-icon>
            <span v-if="isVerified" class="text-2xl">
              <i class="mdi mdi-check-circle"></i>
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
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "@/store/Auth/SignUp.js";

export default {
  data() {
    return {
      isVerified: false,
      isDragging: false,
      iconLeft: "0px",
      bgWidth: "0px",
      loading: false,
      startX: 0,
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["Verified"]),
    startDrag() {
      if (!this.isVerified) {
        this.isDragging = true;
        document.body.style.cursor = "grabbing";
        document.addEventListener("mousemove", this.dragging);
        document.addEventListener("mouseup", this.endDrag);
      }
    },
    startTouch(event) {
      if (!this.isVerified) {
        this.isDragging = true;
        document.body.style.cursor = "grabbing";
        this.startX = event.touches[0].clientX;
        document.addEventListener("touchmove", this.draggingTouch);
        document.addEventListener("touchend", this.endDragTouch);
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
    draggingTouch(event) {
      if (this.isDragging) {
        const container = this.$refs.sliderContainer;
        if (container) {
          const maxMove = container.clientWidth - 80; // Maximum movement based on container width
          const touch = event.touches[0];
          const move = Math.min(
            touch.clientX - container.getBoundingClientRect().left,
            maxMove
          );
          this.iconLeft = `${move}px`;
          this.bgWidth = `${move}px`;
        }
      }
    },
    endDrag() {
      if (this.isDragging) {
        const containerWidth = this.$refs.sliderContainer.clientWidth;
        const threshold = containerWidth - 100; // Set a threshold for verification
        if (parseInt(this.iconLeft) >= threshold) {
          this.loading = true;
          this.iconLeft = `${containerWidth - 80}px`;
          this.bgWidth = `${containerWidth}px`;
          setTimeout(() => {
            this.loading = false;
            this.isVerified = true;
            this.Verified();
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
    endDragTouch() {
      if (this.isDragging) {
        this.endDrag();
        document.removeEventListener("touchmove", this.draggingTouch);
        document.removeEventListener("touchend", this.endDragTouch);
      }
    },
  },
};
</script>
