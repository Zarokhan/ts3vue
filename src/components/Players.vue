<template>
    <div class="players">
        <b-container>
            <b-row>
                <b-col>
                    <h2>Supreme leaders</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4">
                    <b-card title="Zarokhan"
                        :img-src="putin"
                        img-alt="Putin"
                        img-top
                        tag="article"
                        class="mb-2">
                        <p class="card-text">
                            Tha best, mby dies first
                        </p>
                    </b-card>
                </b-col>
                <b-col md="4">
                    <b-card title="Occiduss"
                        :img-src="trump"
                        img-alt="Trump"
                        img-top
                        tag="article"
                        class="mb-2">
                        <p class="card-text">
                            MLG HoN Player
                        </p>
                    </b-card>
                </b-col>
                <b-col md="4">
                    <b-card title="Holm"
                        :img-src="jimmy"
                        img-alt="Jimmy"
                        img-top
                        tag="article"
                        class="mb-2">
                        <p class="card-text">
                            HartBreaker, Loves beer
                        </p>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h3>Preachers</h3>
                    <ul>
                        <li>NoName - Pussy Destroyer - Also don't know how to change name on ts3.</li>
                        <li>Hätta - Bob the Builder</li>
                        <li>Germans and Brits</li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'players',
        data() {
            return {
                putin: require('../assets/putin.jpg'),
                trump: require('../assets/trump.jpg'),
                jimmy: require('../assets/jimmy.jpg')
            }
        }
    }
</script>

<style lang="scss" scoped>
.players {
    h1, h2, h3 {
        padding: 20px 0;
    }
}
</style>
