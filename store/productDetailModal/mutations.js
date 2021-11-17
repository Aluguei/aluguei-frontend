export default {
  setIsVisible(state) {
    Object.assign(state, { isVisible: !state.isVisible })
  },

  setProduct(state, product) {
    Object.assign(state, { product })
  }
}
