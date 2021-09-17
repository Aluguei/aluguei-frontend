<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 9" :key="n" cols="4">
            <v-card height="200">
              <img :src="icon" />
              <h4>{{ name }}</h4>
              <h4>{{ description }}</h4>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      icon: '',
      name: 'Lorem Ipsum',
      description: 'Lorem Ipsum',
    };
  },
};
</script>
