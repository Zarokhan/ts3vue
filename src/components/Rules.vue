<template>
    <div class="rules">
        <b-container>
            <b-row>
                <b-col md="6">
                    <h2>Rules</h2>
                    <ol>
                        <li v-for="rule in rules" :key="rule.Id">
                            {{rule.Rule}} <b-button @click="deleteRule(rule.Id)" size="sm" variant="danger" v-b-popover.hover="'Delete: ' + rule.Rule" title="Delete Rule">X</b-button>
                        </li>
                    </ol>
                    <p v-show="(this.$store.getters.getRulesLength == 0) ? true : false">Wow, living on the "edge"...</p>
                </b-col>
                <b-col md="6">
                    <h2>To hell with it!</h2><p>Add your own rules, I don't care!</p>
                    <b-form @submit="addRule">
                        <b-form-group id="ruleGroup">
                            <b-form-input id="rule"
                                type="text"
                                placeholder="Enter a rule"
                                v-model="form.rule"
                                required></b-form-input>
                        </b-form-group>
                        <b-button type="submit">Add Rule</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
import apikey from '../apikey'
    export default {
        name: 'rules',
        data() {
            return {
                form: {
                    rule: ''
                },
                connection: null,
                client: null
            }
        },
        methods: {
            addRule: function(e) {
                e.preventDefault();
                //this.$store.dispatch('addRule', [this.form.rule]);
                axios.post('https://systembolagetwebapi.azurewebsites.net/api/ts3rules?token=' + apikey,{
                //axios.post('http://localhost:53573/api/ts3rules?token=' + apikey,{
                    Id: 0,
                    Rule: this.form.rule
                })
                .then(function(response){

                })
                .catch(function(error) {
                    console.log(error);
                })
                this.form.rule = '';
            },
            deleteRule: function(Id) {
                axios.delete('https://systembolagetwebapi.azurewebsites.net/api/ts3rules/' + Id + '?token=' + apikey)
                //axios.delete('http://localhost:53573/api/ts3rules/' + Id + '?token=' + apikey)
                .then(function(response){
                    //console.log(response);
                    // if (response.status == 200) {
                    //     dispatch('fetchRules');
                    // }
                })
                .catch(function(error){
                    console.log(error);
                });
            }
        },
        computed: {
            rules: {
                get () {
                    return this.$store.state.rules;
                }
            }
        },
        created: function() {
            this.$store.dispatch('fetchRules');
            // https://www.npmjs.com/package/signalr-no-jquery
        },
        mounted: function() {
        }
    }
</script>

<style lang="scss">
.rules {
    h1, h2 {
        padding: 20px 0;
    }
}
</style>
