<template>
  <div id="app">
    <b-carousel id="imgcarousel"
                style="text-shadow: 1px 1px 2px #333;"
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="" img-blank img-alt="" class="carosell-inner hyllstofta">
        <h1>Hyllstofta Country Club <b-badge>ts3.leetdeveloper.se</b-badge> <img id="ts3" src="./assets/ts3.png"></h1>
      </b-carousel-slide>
      <b-carousel-slide caption="" img-blank img-alt="" class="carosell-inner bf1">
        <h1>Hyllstofta Country Club <b-badge>ts3.leetdeveloper.se</b-badge> <img id="ts3" src="./assets/ts3.png"></h1>
      </b-carousel-slide>
      <b-carousel-slide caption="" img-blank img-alt="" class="carosell-inner csgo">
        <h1>Hyllstofta Country Club <b-badge>ts3.leetdeveloper.se</b-badge> <img id="ts3" src="./assets/ts3.png"></h1>
      </b-carousel-slide>
      <b-carousel-slide caption="" img-blank img-alt="" class="carosell-inner pubg">
        <h1>Hyllstofta Country Club <b-badge>ts3.leetdeveloper.se</b-badge> <img id="ts3" src="./assets/ts3.png"></h1>
      </b-carousel-slide>
      <b-carousel-slide caption="" img-blank img-alt="" class="carosell-inner bf4">
        <h1>Hyllstofta Country Club <b-badge>ts3.leetdeveloper.se</b-badge> <img id="ts3" src="./assets/ts3.png"></h1>
      </b-carousel-slide>
      <b-carousel-slide caption="" img-blank img-alt="" class="carosell-inner hon">
        <h1>Hyllstofta Country Club <b-badge>ts3.leetdeveloper.se</b-badge> <img id="ts3" src="./assets/ts3.png"></h1>
      </b-carousel-slide>
    </b-carousel>

    <b-navbar toggleable="md" type="dark" variant="info" id="mynav">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">HCC</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Start</b-nav-item>
          <b-nav-item to="/rules">Rules</b-nav-item>
          <b-nav-item to="/players">Players</b-nav-item>
          <b-nav-item href="http://cats.leetdeveloper.se/">Cats</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
    <footer>
      <p>© ts3.leetdeveloper.se</p>
    </footer>
  </div>

</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
$darkgray: #303030;
$white: #fff;

#app {
  font-family: 'Ubuntu', sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  color: $darkgray;
}

.hyllstofta {
  background: url('./assets/hyllstofta-bg.jpg') no-repeat center 100% fixed;
}

.bf1 {
  background: url('./assets/bf1.jpg') no-repeat center 120% fixed;
}

.bf4 {
  background: url('./assets/bf4.jpg') no-repeat center 50% fixed;
}

.csgo {
  background: url('./assets/csgo.jpg') no-repeat center 300% fixed;
}

.hon {
  background: url('./assets/hon.jpg') no-repeat center center fixed;
}

.pubg {
  background: url('./assets/pubg.jpg') no-repeat center 40% fixed;
}

.carosell-inner {
  width: 100%;
  height: 40em;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;

  #ts3 {
    width: 100px;
  }

  h1 {
    font-size: 2em;
  }
}

nav {
  font-family: 'Mina', cursive;

  .nav-item {
    text-align: center;
  }
}

h1, h2, h3, h4 {
  font-family: 'Mina', cursive;
}

#mynav {
  background-color: $darkgray !important;
}

footer {
  text-align: center;
  padding: 20px 0;
  margin-top: 20px;
  font-size: 12px;
  background-color: $darkgray;
  display: block;
  color: $white;

  p {
    padding: 0;
    margin: 0;
  }
}
</style>
