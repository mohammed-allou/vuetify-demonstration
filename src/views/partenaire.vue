<template>
  <div class="partenaire">
    <h2 class="subheading grey--text">Partenaire</h2>
    <v-container fluid class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in partenaire" :key="person.nom">
          <v-carte flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-3">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.nom}} </div>
              <div class="grey--text">{{person.role}} </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat >
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-carte>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partenaire: [
        {
          role: "Création des sites Web",
          nom: "MoMo med",
          avatar:"/avatar-1.webp"
        },
        {
          role: "Coder la page d accueil",
          nom: "Abdou ALL",
          avatar:"/avatar-2.jpg"
        },
        {
          role: "Designe et mise en page",
          nom: "Salah",
          avatar:"/avatar-3.webp"
        },
        {
          role: "Création et sondage",
          nom: "Hassen",
          avatar:"/avatar-4.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>