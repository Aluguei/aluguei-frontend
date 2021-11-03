<template>
  <v-carousel class="content-layout" hide-delimiter-background>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="require(`~/assets/img/banner/${item.src}.jpg`)"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'banner-1',
        },
      ],
    };
  },
};
</script>
