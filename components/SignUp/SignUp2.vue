<template>
  <div class='d-flex align-center justify-center'>
    <div class='content-box'>
      <div class='d-flex'>
        <img
          src='@/assets/img/icons/back-arrow.png'
          class='arrow cursor-pointer float-left'
          @click='goBack'
        />
      </div>
      <h3 class='color-gray mb-4'>Cadastro</h3>
      <p class='text-left'>2. Dados pessoais</p>
      <v-form v-model='valid'>
        <v-text-field v-model='firstName' label='Primeiro nome' required />
        <v-text-field v-model='lastName' label='Sobrenome' required />
        <v-text-field v-model='RG' v-mask="'##.###.###-#'" label='RG' required />
        <v-text-field v-model='CPF' v-mask="'###.###.###-##'" label='CPF' required />
        <v-select v-model='gender' label='Sexo' :items='genders' item-text='label' item-value='value' />
        <v-btn class='mr-4 btn mt-10 color-white' type='button' :disabled='!valid' @click='goForward'>Avançar</v-btn>
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
      { label: 'Outro', value: 'other' }],
    valid: false
  }),
  mounted() {
    this.firstName = this.$store.state.signupStore.firstName || '';
    this.lastName = this.$store.state.signupStore.lastName || '';
    this.RG = this.$store.state.signupStore.RG || '';
    this.CPF = this.$store.state.signupStore.CPF || '';
    this.gender = this.$store.state.signupStore.gender || '';
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
