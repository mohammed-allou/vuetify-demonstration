
<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Aujourd'hui</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="ciné.jpg"
                  />
                  <v-icon v-else :color="message.color" v-text="message.icon"></v-icon>
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="message.name"></strong>
                <span v-if="message.total" class="grey--text">&nbsp;({{ message.total }})</span>
              </v-col>

              <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >{{ message.new }} nouveau</v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col v-if="message.excerpt" class="grey--text text-truncate hidden-sm-and-down">
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>



<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "Momo All",
        title: "Bienvenue sur Vuetify.js!",
        excerpt: "Merci d'avoir rejoint notre communauté..."
      },
      {
        color: "red",
        icon: "people",
        name: "Sociale",
        new: 1,
        total: 3,
        title: "Twitter"
      },
      {
        color: "teal",
        icon: "local_offer",
        name: "Promos",
        new: 2,
        total: 4,
        title: "Magasinez à votre façon",
        exceprt: "Nouvelles offres disponibles, inscrivez-vous dès aujourd'hui"
      }
    ],
    lorem:"Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."


  })
};
</script>