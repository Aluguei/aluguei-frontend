export const state = () => ({
    email: "",
    password: "",
});

export const mutations = {
    updateEmail(state, email) {
        state.email = email;
    },
    updatePassword(state, password) {
        state.password = password;
    },
};
