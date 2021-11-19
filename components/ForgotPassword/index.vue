<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box">
      <div class="d-flex">
        <NuxtLink to="/">
          <img :src="backArrow" class="backArrow" />
        </NuxtLink>
      </div>
      <h2 class="mb-4 mt-3">Esqueci a Senha</h2>
      <v-form @submit.prevent="submitForm(cpf)">
        <v-text-field v-model="cpf" v-mask="'###.###.###-##'" label="CPF" required />
        <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" />
        <v-btn class="btn mt-3" type="submit"> Enviar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';
export default {
  directives: { mask },
  props: {
    submitForm: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    cpf: null,
    backArrow: require('@/assets/img/icons/back-arrow.png'),
  }),
};
</script>
