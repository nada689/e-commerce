<template>
  <div class="home">
    <sideBar />
  </div>
</template>

<script>
// @ is an alias to /src
import sideBar from "@/components/sideBar.vue";

export default {
  name: "HomeView",
  components: {
    sideBar,
  },
};
</script>
