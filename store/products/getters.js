export default {
    getAvailableProducts({ availableProducts = [] }) {
      return availableProducts;
    },
  
    getOwnedProducts({ ownedProducts = [] }) {
      return ownedProducts;
    },
  
    getProductsSearch({ productsSearch = {} }) {
      return productsSearch;
    },
  
    getIsAvailableProductsLoading({ isAvailableProductsLoading = false }) {
      return isAvailableProductsLoading;
    },
  
    getIsOwnedProductsLoading({ isOwnedProductsLoading = false }) {
      return isOwnedProductsLoading;
    },
  };
  