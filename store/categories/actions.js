export default {
  setCurrentCategory({ commit }, category = '') {
    commit('setCategoryActive', category)
  }
}
