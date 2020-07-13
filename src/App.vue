<template>
  <v-app>
    <v-spacer></v-spacer>

    <v-content>
      <ToolBar />
      <Footer/>
      <HelloWorld />
    </v-content>
  </v-app>
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
