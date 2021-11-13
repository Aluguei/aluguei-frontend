import api from '~/plugins/api'

export default {
  async getAvailableProducts({ commit }) {
    commit('setIsAvailableProductsLoading', true)
    const products = await api.getAvailableProducts()
    commit('setAvailableProducts', products.data)
    commit('setIsAvailableProductsLoading', false)
    return products.data
  }
}
