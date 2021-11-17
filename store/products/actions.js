import api from '~/plugins/api';

export default {
  async getAvailableProducts({ commit, state, dispatch }) {
    commit('setIsAvailableProductsLoading', true);

    dispatch('loading/setIsVisible', true, { root: true });

    const products = await api.getAvailableProducts(state.productsSearch);
    commit('setAvailableProducts', products.data);
    commit('setIsAvailableProductsLoading', false);
    dispatch('loading/setIsVisible', false, { root: true });

    return products.data;
  },

  setProductsSearch({ commit, state, dispatch }, query = {}) {
    if ('category' in query)
      dispatch('categories/setCurrentCategory', query.category, { root: true });

    commit('setProductsSearch', { ...state.productsSearch, ...query });
  },

  async getOwnedProducts({ commit, dispatch }) {
    commit('setIsOwnedProductsLoading', true);

    dispatch('loading/setIsVisible', true, { root: true });

    const products = await api.getOwnedProducts();
    commit('setOwnedProducts', products.data);
    commit('setIsOwnedProductsLoading', false);
    dispatch('loading/setIsVisible', false, { root: true });

    return products.data;
  },
};
