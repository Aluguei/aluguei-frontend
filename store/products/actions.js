import api from '~/plugins/api'

export default {
  async getAvailableProducts({ commit, state, dispatch }) {
    commit('setIsAvailableProductsLoading', true)

    dispatch('loading/setIsVisible', true, { root: true })

    const products = await api.getAvailableProducts(state.productsSearch)
    commit('setAvailableProducts', products.data)
    commit('setIsAvailableProductsLoading', false)
    dispatch('loading/setIsVisible', false, { root: true })

    return products.data
  },

  setProductsSearch({ commit, state }, query = {}) {
    commit('setProductsSearch', { ...state.productsSearch, ...query })
  },

  async getOwnedProducts({ commit }) {
    commit('setIsOwnedProductsLoading', true)
    const products = await api.getOwnedProducts()
    commit('setOwnedProducts', products.data)
    commit('setIsOwnedProductsLoading', false)
    return products.data
  }
}
