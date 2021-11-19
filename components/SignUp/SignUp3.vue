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
      <p class="text-left">3. Dados de Endereço</p>
      <v-form v-model="valid">
        <v-text-field
          v-model="CEP"
          v-mask="'#####-###'"
          label="CEP"
          :rules="CEPRules"
          required
          @blur="searchCEP"
        ></v-text-field>
        <v-text-field
          v-model="state"
          :rules="stateRules"
          label="Estado"
          disabled
        />
        <v-text-field
          v-model="city"
          :rules="cityRules"
          label="Cidade"
          disabled
        />
        <v-text-field
          v-model="address"
          :rules="addressRules"
          label="Rua"
          required
        />
        <v-text-field
          v-model="neighborhood"
          :rules="neighborhoodRules"
          label="Bairro"
          required
        />
        <v-text-field
          v-model="number"
          :rules="numberRules"
          label="Nº"
          required
        />
        <v-text-field v-model="complement" label="Complemento" />
        <v-btn
          class="mr-4 btn mt-10 color-white"
          type="submit"
          :disabled="!valid"
          @click="goForward"
        >
          Avançar
        </v-btn>
      </v-form>
    </div>
    <v-snackbar v-model="snackbar">
      {{ text }}
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
    CEP: '',
    state: '',
    city: '',
    address: '',
    neighborhood: '',
    number: '',
    complement: '',
    valid: false,
    CEPRules: [(v) => !!v || 'CEP é obrigatório'],
    stateRules: [(v) => !!v || 'Estado é obrigatório'],
    cityRules: [(v) => !!v || 'Cidade é obrigatório'],
    addressRules: [(v) => !!v || 'Rua é obrigatório'],
    neighborhoodRules: [(v) => !!v || 'Bairro é obrigatório'],
    numberRules: [(v) => !!v || 'Número é obrigatório']
  }),
  mounted() {
    this.CEP = this.$store.state.signupStore.userRegister.CEP || ''
    this.state = this.$store.state.signupStore.userRegister.state || ''
    this.city = this.$store.state.signupStore.userRegister.city || ''
    this.address = this.$store.state.signupStore.userRegister.address || ''
    this.neighborhood =
      this.$store.state.signupStore.userRegister.neighborhood || ''
    this.number = this.$store.state.signupStore.userRegister.number || ''
    this.complement =
      this.$store.state.signupStore.userRegister.complement || ''
  },
  methods: {
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
            const response = await this.$axios.$get(
              `https://viacep.com.br/ws/${valueCEP}/json`
            )
            const { bairro, complemento, localidade, logradouro, uf } = response
            this.state = uf
            this.city = localidade
            this.address = logradouro
            this.neighborhood = bairro
            this.complement = complemento
            return { response }
          } catch (error) {
            console.log(error)
            this.snackbar = true
            this.text = 'CEP inválido, por favor digite um CEP válido.'
          }
        } else {
          this.clearFormCEP()
          this.snackbar = true
          this.text = 'CEP inválido, por favor digite um CEP válido.'
        }
      }
    },
    goBack() {
      this.$store.commit('screen/updateSignup2', true)
      this.$store.commit('screen/updateSignup3', false)
    },
    goForward() {
      this.$store.commit('signupStore/signUpOne', {
        CEP: this.CEP.trim(),
        state: this.state,
        city: this.city,
        address: this.address,
        neighborhood: this.neighborhood,
        number: this.number,
        complement: this.complement
      })
      this.$store.commit('screen/updateSignup3', false)
      this.$store.commit('screen/updateSignup4', true)
    }
  }
}
</script>
