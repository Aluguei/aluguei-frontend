<template>
  <div class="flex-box container-box">
    <div class="content-box">
      <div class="flex">
        <NuxtLink to="/">
          <img src="@/assets/img/backArrow.png" class="left-arrow" />
        </NuxtLink>
      </div>
      <h2 class="h2">Esqueci a Senha</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="cpf"
          v-mask="'###.###.###-##'"
          label="CPF"
          required
        ></v-text-field>
        <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" />
        <v-btn class="mr-4 btn" type="submit" :disabled="invalid"> Enviar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import {mask} from 'vue-the-mask'
export default {
  directives: {mask},
  data: () => ({
    cpf: null,
  }),
};
</script>
