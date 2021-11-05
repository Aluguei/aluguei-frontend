export const state = () => ({
  email: null,
  password: null,
  passwordConfirmation: null,
  firstName: null,
  lastName: null,
  RG: null,
  CPF: null,
  gender: null,
  CEP: null,
  state: null,
  city: null,
  address: null,
  neighborhood: null,
  number: null,
  complement: null,
  phoneOne: '99999999999',
  phoneTwo: '99999999999',
})

export const mutations = {

  signUpOne(state, data) {
    console.log(state)
    Object.assign(state, data)
  }
}
