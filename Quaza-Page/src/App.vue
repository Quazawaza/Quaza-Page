<script>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/Home.vue";
import Navbar from "./components/Navbar.vue";
import Footer from './components/Footer.vue';
import Loader from "./components/Loader.vue";
import Error from "./components/Error.vue"

export default {
  components: { RouterLink, RouterView, Home, Navbar, Footer, Loader, Error },
};
</script>

<template>
  <Loader v-if="isLoading" />
  <Error v-if="error" :message="error" />
  <header class="container-fluid">
      <div class="row header_bg_1">
        <div class="title header_bg_1 p-5">Quaza</div>
      </div>
  </header>
  <Navbar />
  <main class="container-fluid">
    <RouterView />
  </main>
  <footer class="container-fluid">
    <Footer />
  </footer>
  
</template>

<style>
html, body {
  font-family: 'Lato', sans-serif;
  background-color: gray;
}
</style>