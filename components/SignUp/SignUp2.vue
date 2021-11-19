<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box">
      <div class="d-flex">
        <img
          src="@/assets/img/icons/back-arrow.png"
          class="arrow cursor-pointer"
          @click="goBack"
        />
      </div>
      <h3 class="color-gray mb-4">Cadastro</h3>
      <p class="text-left">2. Dados pessoais</p>
      <v-form v-model="valid">
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="Primeiro nome"
          required
        />
        <v-text-field
          v-model="lastName"
          :rules="lastNameRules"
          label="Sobrenome"
          required
        />
        <v-text-field
          v-model="RG"
          v-mask="'##.###.###-#'"
          :rules="RGRules"
          label="RG"
          required
        />
        <v-text-field
          v-model="CPF"
          v-mask="'###.###.###-##'"
          :rules="RGRules"
          label="CPF"
          required
        />
        <v-select
          v-model="gender"
          :rules="genderRules"
          label="Sexo"
          :items="genders"
          item-text="label"
          item-value="value"
        />
        <v-btn
          class="mr-4 btn mt-10 color-white"
          type="button"
          :disabled="!valid"
          @click="goForward"
          >Avançar</v-btn
        >
      </v-form>
    </div>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data: () => ({
    firstName: '',
    lastName: '',
    RG: '',
    CPF: '',
    gender: '',
    genders: [
      { label: 'Masculino', value: 'male' },
      { label: 'Feminino', value: 'female' },
      { label: 'Outro', value: 'other' }
    ],
    valid: false,
    firstNameRules: [(v) => !!v || 'Primeiro nome é obrigatório'],
    lastNameRules: [(v) => !!v || 'Sobrenome é obrigatório'],
    RGRules: [(v) => !!v || 'RG é obrigatório'],
    CPFRules: [(v) => !!v || 'CPF é obrigatório'],
    genderRules: [(v) => !!v || 'Genero é obrigatório']
  }),
  mounted() {
    this.firstName = this.$store.state.signupStore.userRegister.firstName || ''
    this.lastName = this.$store.state.signupStore.userRegister.lastName || ''
    this.RG = this.$store.state.signupStore.userRegister.RG || ''
    this.CPF = this.$store.state.signupStore.userRegister.CPF || ''
    this.gender = this.$store.state.signupStore.userRegister.gender || ''
  },
  methods: {
    goBack() {
      this.$store.commit('screen/updateSignup1', true)
      this.$store.commit('screen/updateSignup2', false)
    },
    goForward() {
      this.$store.commit('signupStore/signUpOne', {
        firstName: this.firstName.trim(),
        lastName: this.lastName.trim(),
        RG: this.RG,
        CPF: this.CPF,
        gender: this.gender
      })
      this.$store.commit('screen/updateSignup2', false)
      this.$store.commit('screen/updateSignup3', true)
    }
  }
}
</script>
