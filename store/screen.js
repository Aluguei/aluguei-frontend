export const state = () => ({
    signin: true,
    signup1: false,
    signup2: false,
    signup3: false,
    signup4: false,
});

export const mutations = {
    updateSignin(state, signin) {
        state.signin = signin;
    },
    updateSignup1(state, signup1) {
        state.signup1 = signup1;
    },
    updateSignup2(state, signup2) {
        state.signup2 = signup2;
    },
    updateSignup3(state, signup3) {
        state.signup3 = signup3;
    },
    updateSignup4(state, signup4) {
        state.signup4 = signup4;
    },
};
