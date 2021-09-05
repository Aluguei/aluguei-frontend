<template>
  <v-app>
    <Header />
<!--    <v-carousel hide-delimiters cycle>-->
<!--      <v-carousel-item-->

<!--        v-for='(item,i) in items'-->
<!--        :key='i'-->
<!--        :src='item.src'-->
<!--      ></v-carousel-item>-->
<!--    </v-carousel>-->
    <v-container>

      <!--      <v-main>-->
      <v-row justify-md='center'>
        <v-col
          cols='8'
          md='2'
        >
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
        </v-col>
        <v-col
          cols='8'
          md='2'
        >
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
        </v-col>
        <v-col
          cols='8'
          md='2'
        >
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar , actions'
          ></v-skeleton-loader>
        </v-col>
        <v-col
          cols='8'
          md='2'
        >
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
          <v-skeleton-loader
            v-bind='attrs'
            type='card-avatar, actions'
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <!--      </v-main>-->
    </v-container>
    <Footer />
  </v-app>

</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ],
    drawer: false,
    group: null,
    attrs: {
      class: 'mb-6',
      boilerplate: false,
      elevation: 2
    },
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete'
    ],

    padless: false,
    variant: 'default'
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>

