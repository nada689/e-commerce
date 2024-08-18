<template>
  <v-container>
    <v-row class="contain" no-gutters>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card>
          <v-img :src="item.image" height="200px"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.description }}</v-card-subtitle>
          <v-card-text class="price">{{ item.price }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: require("@/assets/jacet1.jpg"),
          title: "cought",
          description: "Description 1",
          price: "$150",
        },
        {
          image: require("@/assets/jacet2.jpg"),
          title: "Jacet",
          description: "Description 2",
          price: "$200",
        },
        {
          image: require("@/assets/jacet3.jpg"),
          title: "Jacet",
          description: "Description 3",
          price: "$300",
        },
        {
          image: require("@/assets/jacet4.jpg"),
          title: "T-Shirt",
          description: "Description 4",
          price: "$140",
        },
        {
          image: require("@/assets/jacet5.jpg"),
          title: "Jacet",
          description: "Description 5",
          price: "$150",
        },
        {
          image: require("@/assets/jacet6.jpg"),
          title: "Jacet",
          description: "Description 6",
          price: "$160",
        },
        {
          image: require("@/assets/jacet7.jpg"),
          title: "Jacet",
          description: "Description 7",
          price: "$170",
        },
        {
          image: require("@/assets/jacet8.jpg"),
          title: "Jacet",
          description: "Description 8",
          price: "$180",
        },
        {
          image: require("@/assets/jacet9.jpg"),
          title: "Jacet",
          description: "Description 9",
          price: "$190",
        },
        {
          image: require("@/assets/jacet10.jpg"),
          title: "Card 10",
          description: "Description 10",
          price: "$100",
        },
        {
          image: require("@/assets/jacet11.jpg"),
          title: "Jacet",
          description: "Description 11",
          price: "$110",
        },
        {
          image: require("@/assets/jacet12.jpg"),
          title: "Jacet",
          description: "Description 12",
          price: "$120",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
  /* تعديل المسافة السفلية بين البطاقات */
}

.v-img {
  object-fit: cover;
  /* ضبط الصورة لتكون ملائمة للحاوية */
}

.price {
  font-weight: bold;
  color: #000;
}

.contain {
  margin: 0;
}
</style>
