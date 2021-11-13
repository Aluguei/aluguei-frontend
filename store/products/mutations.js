export default {
  setAvailableProducts(state, products = []) {
    Object.assign(state, { products })
  },

  setIsAvailableProductsLoading(state, isAvailableProductsLoading = false) {
    Object.assign(state, { isAvailableProductsLoading })
  }
}
