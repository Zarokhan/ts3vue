import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

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
    rules: []
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
    setRules (state, value) {
        state.rules = value;
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
    },
    deleteRule(state, Id) {
        for (let index = 0; index < state.rules.length; index++) {
            if (state.rules[index].Id == Id) {
                state.rules.splice(index, 1);
                return;
            }
        }
    },
    addRule(state, [Id, rule]) {
        state.rules.push({Id: Id, Rule: rule});
    }
  },
  actions: {
    fetchRules({ commit }) {
        axios.get('http://systembolagetwebapi.azurewebsites.net/api/ts3rules?token=RUFMm3XVnKmFk4aLYELj7tJpN5RbAhWg')
        //axios.get('http://localhost:53573/api/ts3rules?token=RUFMm3XVnKmFk4aLYELj7tJpN5RbAhWg')
        .then(response => {
            let rules = response.data;
            //console.log(rules);
            commit("setRules", rules);
        })
        .catch(e => {
            console.log("Error rules api");
        });
    }
  }
})