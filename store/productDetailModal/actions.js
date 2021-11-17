export default {
  setIsVisible({ commit }) {
    commit('setIsVisible')
  },

  setProduct({ commit }, product) {
    commit('setProduct', product)
  }
}
