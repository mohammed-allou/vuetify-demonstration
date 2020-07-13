<template>
  <div id="app">
<v-app>
    <v-spacer></v-spacer>

    <v-content>
      <tool-bar></tool-bar>
      <router-view/>
      <Footer style="position:absolut;z-index:-1"></Footer>
      <HelloWorld />
    </v-content>
  </v-app>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    ToolBar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
