import vuex from "vuex"
import vue from "vue"
vue.use(vuex)
const state = {
    login: false,
    account: "",
    userinfo: {},
}
const mutations = {
    changeLogin() {
        state.login = !state.login;
    },
    defineUser(user) {
        state.account = user;
    },
    outUser() {
        state.account = "";
    },
}
export default new vuex.Store({
    state,
    mutations,
})