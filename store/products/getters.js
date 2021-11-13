export default {
  getAvailableProducts({ availableProducts = [] }) {
    return availableProducts
  },

  getProductsSearch({ productsSearch = {} }) {
    return productsSearch
  },

  getIsAvailableProductsLoading({ isAvailableProductsLoading = false }) {
    return isAvailableProductsLoading
  },

  getIsOwnedProductsLoading({ isOwnedProductsLoading = false }) {
    return isOwnedProductsLoading
  }
}
