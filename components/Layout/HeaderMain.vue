<template>
  <v-card flat tile class="bg-blue-medium py-4 px-8 d-flex align-center">
    <div class="fb-15">
      <a href="/">
        <img src="~assets/svg/logo-white.svg" class="logo-white" />
      </a>
    </div>
    <div class="fb-60 mt-4 mr-7">
      <Search />
      <Menu />
    </div>

    <div class="fb-25 d-flex align-center">
      <div v-if="$auth.loggedIn" class="d-contents">
        <v-btn icon class="mb-5">
          <v-icon class="color-white">mdi mdi-account</v-icon>
        </v-btn>
        <p class="color-white">{{ $auth.user.firstName }}</p>
        <a class="color-white mb-4 ml-2" @click="logoutUser()"> Sair</a>
      </div>
      <div v-else class="d-flex">
        <nuxt-link to="/login" class="color-white mb-5 text-decoration-none"
          ><h6>Entrar /</h6></nuxt-link
        >
        <nuxt-link to="/cadastrar" class="color-white mb-5 text-decoration-none"
          ><h6>Cadastrar</h6></nuxt-link
        >
      </div>

      <v-btn icon class="mb-5">
        <v-icon class="color-white">mdi-heart-outline</v-icon>
      </v-btn>

      <p class="color-white font-weight-bold">{{ valueCart }}</p>
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      valueCart: 'R$ 0,00'
    }
  },
  methods: {
    logoutUser() {
      this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
