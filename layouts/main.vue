<template>
  <v-app>
    <Loading />

    <v-main class="bg-gray">
      <TopBar />
      <HeaderMain />
      <Categories />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import TopBar from '../components/Layout/TopBar.vue'
import HeaderMain from '../components/Layout/HeaderMain.vue'
import Loading from '~/components/Loading'

export default {
  components: { HeaderMain, TopBar, Loading },
  middleware: 'auth'
}
</script>
