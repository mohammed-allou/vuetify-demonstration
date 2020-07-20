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
          <span class="hidden-md-and-down">Connexion</span>
        </v-btn>
      </router-link>
      <router-link to="/Contact">
        <v-btn flat>
          <v-icon>contacts</v-icon>
          <span class="hidden-md-and-down">Contact</span>
        </v-btn>
      </router-link>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey-lighten" flat v-bind="attrs" v-on="on" class="hidden-md-and-down">
              <v-icon left>expand_more</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn flat @click="sheet = !sheet">
        <v-icon right>exit_to_app</v-icon>
        <v-bottom-sheet v-model="sheet">
          <v-sheet class="text-center" height="200px">
            <v-btn class="mt-6" text color="red" @click="sheet = !sheet">Fermer</v-btn>
            <div class="py-3">N'oubliez pas d'enregistrer votre travail</div>
          </v-sheet>
        </v-bottom-sheet>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" absolute temporary class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="ciné.jpg" />
          </v-avatar>
          <p class="grey--text subheading align-center">MoMo web</p>
           <div class="body-1">medjoweplus@gmail.com</div>

        </v-flex>
        <v-flex class="mt-4 mb-3">
          <popup />
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
import popup from "./popup";
export default {
  components: { popup },
  data() {
    return {
      drawer: false,
      sheet: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "group", text: "partenaire", route: "/partenaire" }
      ]
    };
  }
};
</script> 

