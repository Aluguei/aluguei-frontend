<template>
  <v-card flat height="150px" tile class="bg-blue-medium py-4 px-8 d-flex">
    <div class="fb-15">
      <img src="~assets/svg/logo-white.svg" class="w-65" />
    </div>
    <div class="fb-60 mt-4 mr-7">
      <Search />
      <Menu />
    </div>
    <div class="fb-25 d-flex align-center">
      <nuxt-link to="/login" class="color-white mb-5 text-decoration-none"><h6>Entrar / </h6></nuxt-link>
      <nuxt-link to="/cadastrar" class="color-white mb-5 text-decoration-none"><h6> Cadastrar</h6></nuxt-link>

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
      valueCart: 'R$ 0,00',
    };
  },
};
</script>
