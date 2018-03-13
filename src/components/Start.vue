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
                            :label="'Your Email: ' + form.email"
                            description="We'll never share your email with anyone else, except 100 spam emailing lists.">
                            <b-form-input id="email"
                                type="email"
                                v-model="form.email"
                                required
                                placeholder="Enter email">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="nameGroup"
                            :label='"Your Full Name: " + form.name'>
                            <b-form-input id="name"
                                type="text"
                                v-model="form.name"
                                required
                                placeholder="Enter full name">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="nickGroup"
                            :label='"Your Nickname: " + form.nick'>
                            <b-form-input id="nick"
                                type="text"
                                v-model="form.nick"
                                required
                                placeholder="Enter nickname">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="selectGroup"
                            :label='"Country: " + form.country'>
                            <b-form-select id="country"
                                :options="countries"
                                required
                                v-model="form.country">
                            </b-form-select>
                        </b-form-group>
                        <b-form-group id="checkGroup">
                            <b-form-checkbox-group v-model="form.checked" id="checks">
                                <b-form-checkbox value="terms">I hereby acknowledge that I have read and understood the terms and conditions as provided in the 'Hebrew Bible'.</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                        <!-- v-bind:show or :show -->
                        <b-alert variant="warning" v-bind:show="(warningmsg == '') ? false : true">{{warningmsg}}</b-alert>
                        <b-button type="submit">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                    <b-alert :show="!this.showform" variant="danger" v-else id="banned">
                        <h4 class="alert-heading">Account registered on {{this.form.email}} is banned!</h4>
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
    export default {
        name: 'start',
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    nick: '',
                    country: null,
                    checked: []
                },
                countries: [
                    { text: 'Select a country', value: null },
                    'Russian Federation - Российская Федерация', 'North Korea - 조선민주주의인민공화국', 'Other'
                ],
                showform: true,
                warningmsg: ''
            }
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                //console.log(JSON.stringify(this.form));
                if (this.form.checked.length == 0) {
                    this.warningmsg = 'You need to accept the terms and conditions!';
                } else {
                    this.warningmsg = '';
                    this.showform = false;
                }
            },
            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.email = '';
                this.form.name = '';
                this.form.nick = '';
                this.form.country = null;
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
                this.showform = false;
                this.warningmsg = '';
                this.$nextTick(() => { this.showform = true });
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
