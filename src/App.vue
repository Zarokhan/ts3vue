<template>
  <div id="app">
    <div id="header">
      <h1>Hyllstofta Country Club <b-badge>ts3.leetdeveloper.se</b-badge> <img src="./assets/ts3.png"></h1>
    </div>

    <b-navbar toggleable="md" type="dark" variant="info" id="mynav">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">HCC</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Start</b-nav-item>
          <b-nav-item to="/rules">Rules</b-nav-item>
          <b-nav-item to="/admins">Admins</b-nav-item>
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
  name: 'App'
}
</script>

<style lang="scss">
$darkgray: #303030;
$white: #fff;

#app {
  font-family: 'Spinnaker', sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  color: $darkgray;
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

nav {
  font-family: 'Permanent Marker', cursive;
}

body {
  
}

h1, h2 {
  font-family: 'Permanent Marker', cursive;
}

h3, h4 {
  font-family: 'Kalam', cursive;
}

#header {
  background: url('./assets/hyllstofta-bg.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding: 20em 0;
  text-align: center;

  .badge {
    font-family: 'Spinnaker', sans-serif !important;
  }

  h1 {
    font-size: 2em;
  }

  img {
    width: 2em;
  }
}
</style>
