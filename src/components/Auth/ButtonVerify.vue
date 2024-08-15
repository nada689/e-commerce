<template>
  <div class="flex justify-center items-center h-full">
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
            class="slider-icon absolute top-0 h-full bg-white rounded border z-50 border-black flex justify-center items-center cursor-move transition-[left] duration-300 ease-linear"
            :style="{ left: iconLeft, width: iconWidth }"
            @mousedown="startDrag"
            :class="{ 'bg-green-400': isVerified }"
          >
            <v-icon v-if="!isVerified">mdi-chevron-double-right</v-icon>
            <span v-if="isVerified" class="text-2xl">
              <i class="mdi mdi-check-circle"></i>
            </span>
          </span>
          <div
            class="slider-text absolute top-0 left-0 right-0 h-full flex justify-center items-center text-gray-500 text-lg"
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
export default {
  data() {
    return {
      isVerified: false,
      isDragging: false,
      iconLeft: "0%",
      bgWidth: "0%",
      iconWidth: "15%", // نسبة العرض للأيقونة لتكون متجاوبة
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
          const maxMove = container.clientWidth - container.clientWidth * 0.15; // تقليل حسب نسبة عرض الأيقونة
          const move = Math.min(
            event.clientX - container.getBoundingClientRect().left,
            maxMove
          );
          this.iconLeft = `${(move / container.clientWidth) * 100}%`;
          this.bgWidth = `${(move / container.clientWidth) * 100}%`;
        }
      }
    },
    endDrag() {
      if (this.isDragging) {
        const container = this.$refs.sliderContainer;
        const threshold = container.clientWidth * 0.7; // اجعل الحد حسب نسبة من العرض الكلي
        if (parseInt(this.iconLeft) >= threshold) {
          this.loading = true;
          this.iconLeft = `${100 - parseInt(this.iconWidth)}%`;
          this.bgWidth = `${100}%`;
          setTimeout(() => {
            this.loading = false;
            this.isVerified = true;
            document.body.style.cursor = "default";
          }, 2000); // محاكاة وقت التحميل
        } else {
          this.iconLeft = "0%";
          this.bgWidth = "0%";
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
