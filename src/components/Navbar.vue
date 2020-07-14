<template>
  <nav>
    <v-toolbar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span>momo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Connexion">
            <v-btn flat>Connexion</v-btn>
          </router-link>
          <router-link to="/Contact">
            <v-btn flat>Contact</v-btn>
          </router-link>
      <v-btn flat color="grey">
        <span>Déconnexion</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="indigo">
     <v-list>
         <v-list-tile>
             <v-list-tile-action>
                 <v-icon class="white--text">dashboard</v-icon>
             </v-list-tile-action>
             <v-list-tile-content>
                 <v-list-tile-title class="white--text">Dashboard</v-list-tile-title>
             </v-list-tile-content>
         </v-list-tile>
     </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return{
        drawer: false
    }
  }
};
</script>

<style>
</style>