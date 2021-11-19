export default {
  setSnackbar({ commit }, snackbar) {
    snackbar.showing = true
    snackbar.color = snackbar.color || 'success'
    commit('setSnackbar', snackbar)
  },
  setSnackbars({ commit }, snackbars) {
    commit('setSnackbars', snackbars)
  }
}
