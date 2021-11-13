export default {
  setAvailableProducts(state, availableProducts = []) {
    Object.assign(state, { availableProducts })
  },

  setProductsSearch(state, productsSearch = {}) {
    Object.assign(state, { productsSearch })
  },

  setIsAvailableProductsLoading(state, isAvailableProductsLoading = false) {
    Object.assign(state, { isAvailableProductsLoading })
  },

  setOwnedProducts(state, products = []) {
    Object.assign(state, { products })
  }
}
