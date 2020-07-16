<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span>momo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Connexion">
        <v-btn flat>
            <v-icon>power_settings_new</v-icon>
            <span>Connexion  </span>
        
        </v-btn>
      </router-link>
      <router-link to="/Contact">
        <v-btn flat>
          <v-icon>contacts</v-icon>
            <span>Contact  </span>
          
          </v-btn>
      </router-link>
      <v-btn flat >
        
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" absolute temporary class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size='100'>
            <img src="ciné.jpg">
          </v-avatar>
          <p class="grey--text subheading align-center">
            MoMo web
          </p>
        </v-flex>
      </v-layout>
  <v-list nav dense>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-spacer></v-spacer>

            <v-icon class="white--text">{{ link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-router-view></v-router-view>
    </v-navigation-drawer>
  </nav>
</template>

 <script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "group", text: "partenaire", route: "/partenaire" }
      ]
    };
  }
};
</script> 

