<template>
  <v-pagination v-model="page" :length="pages"></v-pagination>
</template>

<script>
export default {
  name: "productPagination",
  data() {
    return {
      page: 1,
      pages: 5,
    };
  },
};
</script>
