export default {
  setSnackbar(state, snackbar) {
    const snackbars = state.snackbars.concat(snackbar)

    Object.assign(state, { snackbars })
  },

  setSnackbars(state, snackbars) {
    Object.assign(state, { snackbars })
  }
}
