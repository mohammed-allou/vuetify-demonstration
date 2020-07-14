<template>
  <div class="home">
    <h1 class="display-4">Homepage</h1>
    <p
      class="pink lighten-4 red--text text--darken-4"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptas eaque veniam, nam, accusantium quas tempora modi sunt voluptatem autem adipisci, officiis mollitia! Amet, consectetur. Odio iusto iure ipsa commodi.</p>
    <h4 class="display-1 .font-weight-bold">moyenne taille</h4>
    <p class="subheading">c'est un texte de sous-titre</p>
    <p class="caption text-uppercase">c'est un texte de taille petite</p>
    <v-container class="text-center">
      <v-responsive
        class="text-center grey lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3"
        height="64"
        width="128"
      >Pilule</v-responsive>
    </v-container>
    <v-btn class="pink white--text">Botona</v-btn>
    <v-btn dark color="pink">Botona</v-btn>
    <v-btn flat color="pink">Botona</v-btn>
    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>mon email</span>
    </v-btn>
    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>mon email</span>
    </v-btn>
    <v-btn depressed large class="pink white--text">
      <span>mon email</span>
      <v-icon right large>email</v-icon>

    </v-btn>
     <v-btn fab depressed small dark color="purple">
      
      <v-icon>favorite</v-icon>

    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>