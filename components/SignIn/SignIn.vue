<template>
  <div class="d-flex align-center justify-center container-box">
    <div class="content-box">
      <img src="@/assets/img/logo/logo-aluguei-140x141.png" class="logo" />
      <v-form v-model="valid" @submit.prevent="submitForm(login)">
        <v-text-field
          v-model="login.email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="login.password"
          :rules="passwordRules"
          type="password"
          label="Senha"
          required
        ></v-text-field>
        <NuxtLink to="/esqueci-a-senha">
          <p class="link cursor-pointer text-decoration-underline float-left">
            Esqueci a senha
          </p>
        </NuxtLink>
        <NuxtLink to="/cadastrar"
          ><p class="link cursor-pointer text-decoration-underline float-right">
            Cadastrar
          </p>
        </NuxtLink>
        <v-btn class="mr-4 btn mt-10 color-white" type="submit" :disabled="!valid">
          {{ buttonText }}
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submitForm: {
      type: Function,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    login: {
      email: "tester@tester.com.br",
      password: "string",
    },
    valid: false,
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+/.test(v) || "E-mail deve ser válido",
    ],
    passwordRules: [
      (v) => !!v || "Senha é obrigatório",
      (v) => v.length >= 3 || "Senha deve ser maior que 10 caracteres",
    ],
  }),
};
</script>
