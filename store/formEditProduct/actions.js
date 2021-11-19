export default {
  setIsVisible({ commit }) {
    commit('setIsVisible')
  },
  async updateProduct({ dispatch }, productId) {
    await api.rentProduct(productId)

    const snackbar = {
      timeout: 3000,
      color: 'green',
      text: 'Produto Editado com sucesso!'
    }

    dispatch('snackbars/setSnackbar', snackbar, { root: true })

    await dispatch('getAvailableProducts')

    dispatch('formEditProduct/setIsVisible', null, { root: true })
  }
}
