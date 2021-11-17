export default {
  setCategories(state, categories = []) {
    Object.assign(state, { categories })
  },

  setCategoryActive(state, category = '') {
    const { categories } = state

    const filteredCategories = categories.map((e) => {
      e.isActive = e.category === category
      return e
    })

    Object.assign(state, { categories: filteredCategories })
  }
}
