<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box">
      <div class="d-flex">
        <img
          src="@/assets/img/icons/back-arrow.png"
          class="arrow cursor-pointer float-left"
          @click="goBack"
        />
      </div>
      <h3 class="color-gray mb-4">Cadastro</h3>
      <p class="text-left">4. Dados de Contato</p>
      <v-form v-model="valid">
        <v-text-field
          v-model="phoneOne"
          v-mask="'(##) # ####-####'"
          :rules="phoneOneRules"
          label="Telefone primário"
          required
        />
        <v-text-field
          v-show="phoneOne"
          v-model="phoneTwo"
          v-mask="'(##) # ####-####'"
          label="Telefone secundário (opcional)"
        />
        <v-btn
          class="mr-4 btn mt-10 color-white"
          color="success"
          type="submit"
          :loading="loading"
          :disabled="!valid && loading"
          @click.stop.prevent="registerUser()"
        >
          Cadastrar
        </v-btn>
      </v-form>
    </div>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <NuxtLink to="/login">Página inicial</NuxtLink>
      <template #action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"
          >Fechar</v-btn
        >
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data: () => ({
    snackbar: false,
    text: null,
    loading: false,
    valid: false,
    phoneOne: null,
    phoneTwo: null,
    phoneOneRules: [(v) => !!v || 'Telefone primário é obrigatório']
  }),
  mounted() {
    this.phoneOne = this.$store.state.signupStore.userRegister.phoneOne || ''
    this.phoneTwo = this.$store.state.signupStore.userRegister.phoneTwo || ''
  },
  beforeDestroy() {
    this.$store.commit('screen/updateSignup4', false)
    this.$store.commit('screen/updateSignup1', true)
  },
  methods: {
    registerUser() {
      this.$store.commit('signupStore/signUpOne', {
        phoneOne: this.phoneOne,
        phoneTwo: this.phoneTwo
      })
      this.loading = true
      this.valid = true
      this.$axios
        .$post('/api/auth/register', this.$store.state.signupStore.userRegister)
        .then(async (response) => {
          await this.$auth.loginWith('local', {
            data: {
              email: this.$store.state.signupStore.userRegister.email,
              password: this.$store.state.signupStore.userRegister.password
            }
          })

          this.$axios.setToken(response.accessToken, 'Bearer')
          this.$axios.setHeader('device', 'mobile')
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
          this.snackbar = true
          this.text =
            'Erro ao tentar se registar, por favor tente novamente. Se o erro persistir entre em contato com nossa equipe de suporte.'
        })
    },
    goBack() {
      this.$store.commit('screen/updateSignup3', true)
      this.$store.commit('screen/updateSignup4', false)
    }
  }
}
</script>
