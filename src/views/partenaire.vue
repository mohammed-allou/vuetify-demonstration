<template>
  <div class="partenaire">
    <h2 class="subheading grey--text">Partenaire</h2>
    <v-container fluid class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in partenaire" :key="person.nom">
          <v-carte flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-3">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.nom}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <div class="text-center">
                <v-bottom-sheet v-model="sheet">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn flat v-bind="attrs" v-on="on">
                      <v-icon small left>message</v-icon>
                      <span>Message</span>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-subheader>Ouvrir dans :</v-subheader>
                    <v-list-item v-for="tile in tiles" :key="tile.title" @click="sheet = false">
                      <v-list-item-avatar>
                        <v-avatar size="32px" tile>
                          <img
                            :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                            :alt="tile.title"
                          />
                        </v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-title>{{ tile.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-bottom-sheet>
              </div>
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
          avatar: "/avatar-1.webp"
        },
        {
          role: "Coder la page d accueil",
          nom: "Abdou ALL",
          avatar: "/avatar-2.jpg"
        },
        {
          role: "Designe et mise en page",
          nom: "Salah",
          avatar: "/avatar-3.webp"
        },
        {
          role: "Création et sondage",
          nom: "Hassen",
          avatar: "/avatar-4.jpg"
        }
      ],
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    };
    
  },
  
};
</script>

<style>
</style>