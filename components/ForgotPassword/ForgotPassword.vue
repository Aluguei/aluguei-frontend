<template>
  <div class="d-flex align-center justify-center container-box">
    <div class="content-box">
      <div class="d-flex">
        <NuxtLink to="/">
          <img src="@/assets/img/icons/backArrow.png" class="arrow cursor-pointer float-left" />
        </NuxtLink>
      </div>
      <h2>Esqueci a Senha</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="cpf" v-mask="'###.###.###-##'" label="CPF" required></v-text-field>
        <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" />
        <v-btn class="mr-4 btn" type="submit" :disabled="invalid"> Enviar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';
export default {
  directives: { mask },
  data: () => ({
    cpf: null,
  }),
};
</script>
