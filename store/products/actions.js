import api from '~/plugins/api'

export default {
  async getAvailableProducts({ commit, state }) {
    commit('setIsAvailableProductsLoading', true)
    const products = await api.getAvailableProducts(state.productsSearch)
    commit('setAvailableProducts', products.data)
    commit('setIsAvailableProductsLoading', false)

    return products.data
  },

  setProductsSearch({ commit }, query = {}) {
    commit('setProductsSearch', query)
  }
}
