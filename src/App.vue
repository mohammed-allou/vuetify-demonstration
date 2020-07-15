<template>
  <div id="app">
    <v-app>
      <!-- <tool-bar /> -->
      <Navbar></Navbar>
      <v-content class="mx-4 mb-4">
        <router-view></router-view>

        <HelloWorld />
        <Footer style="position:absolut"></Footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    HelloWorld,
    // ToolBar,
    Footer,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
