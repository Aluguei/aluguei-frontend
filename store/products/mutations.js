export default {
    setAvailableProducts(state, availableProducts = []) {
      Object.assign(state, { availableProducts });
    },
  
    setOwnedProducts(state, ownedProducts = []) {
      Object.assign(state, { ownedProducts });
    },
  
    setProductsSearch(state, productsSearch = {}) {
      Object.assign(state, { productsSearch });
    },
  
    setIsAvailableProductsLoading(state, isAvailableProductsLoading = false) {
      Object.assign(state, { isAvailableProductsLoading });
    },
  
    setIsOwnedProductsLoading(state, isOwnedProductsLoading = false) {
      Object.assign(state, { isOwnedProductsLoading });
    },
  };
  