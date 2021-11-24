export default {
  setItems(state, items = []) {
    Object.assign(state, { items })
  },

  setCurrentItem(state, item = '') {
    const { items } = state

    const filteredItems = items.map((e) => {
      e.isActive = e.link === item
      return e
    })

    console.log(filteredItems)

    Object.assign(state, { items: filteredItems })
  }
}
