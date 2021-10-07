<template>
  <div class="d-flex align-center justify-center container-box">
    <div class="content-box">
      <div class="d-flex">
        <NuxtLink to="/">
          <img
            src="@/assets/img/icons/back-arrow.png"
            class="arrow cursor-pointer float-left"
          />
        </NuxtLink>
      </div>
      <h3 class="color-gray mb-4">Esqueci a Senha</h3>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submitForm(cpf)"
      >
        <v-text-field
          v-model="cpf"
          v-mask="'###.###.###-##'"
          label="CPF"
          required
        ></v-text-field>
        <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" />
        <v-btn class="mr-4 btn mt-10 color-white" type="submit" :disabled="invalid">
          Enviar
        </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
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
  }),
};
</script>
