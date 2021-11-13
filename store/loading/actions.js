export default {
  setIsVisible({ commit }, isVisible = false) {
    document.getElementById('app').style.overflow = isVisible
      ? 'hidden'
      : 'auto'

    commit('setIsVisible', isVisible)
  }
}
