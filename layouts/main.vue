<template>
  <v-app>
    <Loading />
    <DisplaySnackbars />

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
import DisplaySnackbars from '~/components/DisplaySnackbars'

export default {
  components: { HeaderMain, TopBar, Loading, DisplaySnackbars },
  middleware: 'auth'
}
</script>
