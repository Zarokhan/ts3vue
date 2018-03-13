<template>
    <div class="rules">
        <b-container>
            <b-row>
                <b-col md="6">
                    <h2>Rules</h2>
                    <ol>
                        <li v-for="rule in rules">
                            {{rule}} <b-button @click="deleteRule(rule)" size="sm" variant="danger" v-b-popover.hover="'Delete: ' + rule" title="Delete Rule">X</b-button>
                        </li>
                    </ol>
                    <p v-show="(this.rules.length == 0) ? true : false">Wow, living on the "edge"...</p>
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
    export default {
        name: 'rules',
        data() {
            return {
                form: {
                    rule: ''
                },
                rules: [
                    "Don't spam",
                    "Follow the supreme leaders",
                    "Respect woman"
                ]
            }
        },
        methods: {
            addRule: function(e) {
                e.preventDefault();
                this.rules.push(this.form.rule);
            },
            deleteRule: function(rule) {
                this.rules.splice(this.rules.indexOf(rule), 1);
            }
        }
    }
</script>

<style lang="scss" scoped>
.rules {
    h1, h2 {
        padding: 20px 0;
    }
}
</style>
