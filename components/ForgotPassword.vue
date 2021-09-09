<template>
  <div class="flex-box container-box">
    <div class="content-box">
      <div class="flex">
        <img src="@/assets/img/backArrow.png" class="left-arrow" @click="goBack" />
      </div>
      <h2 class="h2">Esqueci a Senha</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="cpf"
          label="CPF"
          required
          :rules="{
            required: true,
            digits: 11,
            regex: '[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}',
          }"
        ></v-text-field>
        <v-btn class="mr-4 btn" type="submit" :disabled="invalid"> Enviar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    cpf: null,
  }),
  methods: {
    goBack() {
      this.$store.commit('screen/updateSignin', true);
      this.$store.commit('screen/updateSignup1', false);
    },
    goForward() {
      this.$store.commit('screen/updateSignup1', false);
      this.$store.commit('screen/updateSignup2', true);
    },
  },
};
</script>
