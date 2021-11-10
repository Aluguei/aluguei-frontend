export const state = () => ({
  userRegister: {
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
    phoneOne: null,
    phoneTwo: null
  }
})

export const mutations = {
  signUpOne(state, data) {
    Object.assign(state.userRegister, data)
  }
}
