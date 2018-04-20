<template>
    <div class="start">
        <b-container>
            <b-row>
                <b-col md="6">
                    <h2>Welcome to HCC</h2>
                    <p>I would highly recommend reading the rules and admins page for more information.</p>
                </b-col>
                <b-col md="6">
                    <b-form @submit="onSubmit" @reset="onReset" v-if="showform">
                        <h2>Apply</h2>
                        <b-form-group id="emailGroup"
                            :label="'Your Email: ' + email"
                            description="We'll never share your email with anyone else, except 100 spam emailing lists.">
                            <b-form-input id="email"
                                type="email"
                                v-model="email"
                                required
                                placeholder="Enter email">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="nameGroup"
                            :label='"Your Full Name: " + name'>
                            <b-form-input id="name"
                                type="text"
                                v-model="name"
                                required
                                placeholder="Enter full name">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="nickGroup"
                            :label='"Your Nickname: " + nick'>
                            <b-form-input id="nick"
                                type="text"
                                v-model="nick"
                                required
                                placeholder="Enter nickname">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="selectGroup"
                            :label='"Country: " + country'>
                            <b-form-select id="country"
                                :options="countries"
                                required
                                v-model="country">
                            </b-form-select>
                        </b-form-group>
                        <b-form-group id="checkGroup">
                            <b-form-checkbox-group v-model="checked" id="checks">
                                <b-form-checkbox value="terms">I hereby acknowledge that I have read and understood the terms and conditions as provided in the 'Hebrew Bible'.</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                        <!-- v-bind:show or :show -->
                        <b-alert variant="warning" v-bind:show="(warningmsg == '') ? false : true">{{warningmsg}}</b-alert>
                        <b-button type="submit">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                    <b-alert :show="!showform" variant="danger" v-else id="banned">
                        <h4 class="alert-heading">Account registered on {{email}} is banned!</h4>
                        <p>You have been banned because of fraud, identity thef, cyber bullying and drug manufacturing and cultivation.</p>
                        <hr>
                        <p class="mb-0">Try to apply when the charges have been dissmissed.</p>
                    </b-alert>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'start',
        data() {
            return {
                countries: [
                    { text: 'Select a country', value: "" },
                    'Russian Federation - Российская Федерация', 'North Korea - 조선민주주의인민공화국', 'Other'
                ]
            }
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                //console.log(JSON.stringify(this.form));
                if (this.$store.getters.getCheckedLength == 0) {
                    this.$store.commit('updateWarningmsg', 'You need to accept the terms and conditions!');
                } else {
                    axios.post('https://systembolagetwebapi.azurewebsites.net/api/Applicants',{
                        Id: 0,
                        Email: this.$store.state.form.email,
                        FullName: this.$store.state.form.name,
                        Alias: this.$store.state.form.nick,
                        Country: this.$store.state.form.country
                    });
                    this.$store.commit('updateWarningmsg', '');
                    this.$store.commit('updateShowform', false);
                }
            },
            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.$store.commit('updateEmail', '');
                this.$store.commit('updateName', '');
                this.$store.commit('updateNick', '');
                this.$store.commit('updateCountry', '');
                this.$store.commit('updateChecked', []);
                /* Trick to reset/clear native browser form validation state */
                this.$store.commit('updateWarningmsg', '');
                this.$store.commit('updateShowform', false);
                this.$nextTick(() => { this.$store.commit('updateShowform', true) });
            }
        },
        computed: {
            warningmsg: {
                get () {
                    return this.$store.state.warningmsg;
                },
                set (value) {
                    this.$store.commit('updateWarningmsg', value);
                }
            },
            showform: {
                get () {
                    return this.$store.state.showform;
                },
                set (value) {
                    this.$store.commit('updateShowform', value);
                }
            },
            email: {
                get () {
                    return this.$store.state.form.email;
                },
                set (value) {
                    this.$store.commit('updateEmail', value);
                }
            },
            name: {
                get () {
                    return this.$store.state.form.name;
                },
                set (value) {
                    this.$store.commit('updateName', value);
                }
            },
            nick: {
                get () {
                    return this.$store.state.form.nick;
                },
                set (value) {
                    this.$store.commit('updateNick', value);
                }
            },
            country: {
                get () {
                    return this.$store.state.form.country;
                },
                set (value) {
                    this.$store.commit('updateCountry', value);
                }
            },
            checked: {
                get () {
                    return this.$store.state.form.checked;
                },
                set (value) {
                    this.$store.commit('updateChecked', value);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.start {
    h1, h2 {
        padding: 20px 0;
    }
}

#banned {
    margin: 20px 0;
}
</style>
