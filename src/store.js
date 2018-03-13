import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
        email: '',
        name: '',
        nick: '',
        country: '',
        checked: []
    },
    showform: true,
    warningmsg: '',
    rules: [
        "Don't spam",
        "Follow the supreme leaders",
        "Respect woman"
    ]
  },
  getters: {
    getCheckedLength: state => {
        return state.form.checked.length;
    },
    getRules: state => {
        return state.rules;
    },
    getRulesLength: state => {
        return state.rules.length;
    }
  },
  mutations: {
    deleteRule (state, value) {
        state.rules.splice(state.rules.indexOf(value), 1);
    },
    addRule (state, value) {
        state.rules.push(value);
    },
    updateEmail (state, value) {
        state.form.email = value;
    },
    updateName (state, value) {
        state.form.name = value;
    },
    updateNick (state, value) {
        state.form.nick = value;
    },
    updateCountry (state, value) {
        state.form.country = value;
    },
    updateChecked (state, value) {
        state.form.checked = value;
    },
    updateShowform (state, value) {
        state.showform = value;
    },
    updateWarningmsg (state, value) {
        state.warningmsg = value;
    }
  },
  actions: {

  }
})