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
      <p class='text-left'>3. Dados de Endereço</p>
      <v-form v-model='valid'>
        <v-text-field
          v-model='CEP'
          v-mask="'#####-###'"
          label='CEP'
          required
          @blur='searchCEP'
        ></v-text-field>
        <v-select v-model='state' :value='state' :items='states' item-text='nome' return-object label='Estado'
                  @blur='searchCities' />
        <v-select v-model='city' :value='city' :items='cities' item-text='nome' return-object label='Cidade' />
        <v-text-field v-model='address' label='Rua' required />
        <v-text-field v-model='neighborhood' label='Bairro' required />
        <v-text-field v-model='number' label='Nº' required />
        <v-text-field v-model='complement' label='Complemento' required />
        <v-btn class='mr-4 btn mt-10 color-white' type='submit' @click.stop.prevent='registerUser()'>Avançar</v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data: () => ({
    CEP: null,
    state: null,
    city: null,
    address: null,
    neighborhood: null,
    number: null,
    complement: null,
    valid: null,
    states: [],
    cities: []
  }),
  async fetch() {
    const response = await this.$axios.$get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const stateOrderedList = response
    this.states = stateOrderedList.sort()
  },
  methods: {
    async registerUser() {
      try {
        this.$store.commit('signupStore/signUpOne', {
          CEP: this.CEP.trim(),
          state: this.state.nome,
          city: this.city.nome,
          address: this.address,
          neighborhood: this.neighborhood,
          number: this.number,
          complement: this.complement
        })
        console.log(this.$store.state.signupStore)
        const response = await this.$axios.$post('/api/auth/register', this.$store.state.signupStore)
        console.log(response)
        // await this.$router.push('/')
      } catch (err) {
        console.error(err)
        this.snackbar = true
      }
    },
    async searchCities() {
      const response = await this.$axios.$get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.state.id}/municipios`)
      const citiesOrderedList = response
      this.cities = citiesOrderedList.sort()
    },
    clearFormCEP() {
      this.state = ''
      this.city = ''
      this.address = ''
      this.neighborhood = ''
      this.complement = ''
      this.number = ''
    },
    async searchCEP() {
      const valueCEP = this.CEP.replace(/\D/g, '')
      if (valueCEP !== '') {
        const validacep = /^[0-9]{8}$/
        if (validacep.test(valueCEP)) {
          try {
            const response = await this.$axios.$get(`https://viacep.com.br/ws/${valueCEP}/json`)
            console.log(response)
            const { bairro, complemento, localidade, logradouro, uf } = response
            this.state = uf
            this.city = localidade
            this.address = logradouro
            this.neighborhood = bairro
            this.complement = complemento
            return { response }
          } catch (error) {
            console.log(error)
          }
        } else {
          this.clearFormCEP()
          alert('Formato de CEP inválido.')
        }
      }
    },
    goBack() {
      this.$store.commit('screen/updateSignup2', true)
      this.$store.commit('screen/updateSignup3', false)
    },
    goForward() {
      this.$store.commit('screen/updateSignup3', false)
      this.$store.commit('screen/updateSignup4', true)
    }
  }
}
</script>
