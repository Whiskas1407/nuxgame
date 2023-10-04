<template>
  <div id="app">
    <Header :user="user" />
    <Login v-if="!user.id" />
    <div class="app__body" v-else>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login
  },
  beforeMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    let favorite = JSON.parse(localStorage.getItem('favoriteItems'))
    user ? this.$store.commit('getUser') : false
    favorite ? this.$store.commit('getFavoriteItems') : false
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style>
body,html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #545454;
}
h1,h2,h3,h4,h5,p,a {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.app__body {
  align-self: flex-start;
  padding: 20px;
  width: 100%;
}
</style>
