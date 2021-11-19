export default {
  setIsVisible(state) {
    Object.assign(state, { isVisible: !state.isVisible })
  },
  updateName(state, name) {
    state.name = name;
  },
  updateDescription(state, description) {
    state.description = description;
  },
  updatePrice(state, price) {
    state.price = price;
  },
  updateCategory(state, category) {
    state.category = category;
  },
  updateTimeUnit(state, timeUnit) {
    state.timeUnit = timeUnit;
  },
  updateTimeQuantity(state, timeQuantity) {
    state.timeQuantity = timeQuantity;
  },
}
