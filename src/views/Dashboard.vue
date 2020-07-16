<template>
  <div class="dashboard">
    <h2 class="subheading grey--text">Dashboard</h2>
    <v-container class="my-5">
      <!-- <v-layout row>
        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">4</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">5</v-btn>
      </v-flex>-->

      <!-- </v-flex>
              <v-flex xs12 md6>
                  <v-btn outline block class="primary">3</v-btn>

              </v-flex> 
      -->
      <!-- </v-layout>
      <v-layout row wrap justify-space-around>
          <v-flex xs4 md3>
          <v-btn outline block class="success">6</v-btn>

          </v-flex>
          <v-flex xs4 md3>
          <v-btn outline block class="success">7</v-btn>
          </v-flex>
          
      </v-layout>
       <v-layout row wrap justify-center>
          <v-flex xs4 md3>
          <v-btn outline block class="success">8</v-btn>

          </v-flex>
          <v-flex xs4 md3>
          <v-btn outline block class="success">9</v-btn>
          </v-flex>
          
      </v-layout>
       <v-layout row wrap justify-space-between>
          <v-flex xs4 md3>
          <v-btn outline block class="success">10</v-btn>

          </v-flex>
          <v-flex xs4 md3>
          <v-btn outline block class="success">11</v-btn>
          </v-flex>
          
      </v-layout>-->

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              flat
              color="grey"
              @click="definiPar('titre')"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text--lowercase">par nom de projet</span>
            </v-btn>
          </template>
          <span>Trier par nom de projet</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              flat
              color="grey"
              @click="definiPar('personne')"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>person</v-icon>
              <span class="caption text--lowercase">par nom d'auteur</span>
            </v-btn>
          </template>
          <span>Trier par nom d'auteur</span>
        </v-tooltip>
      </v-layout>
      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.statut}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Nom du project</div>
            <div>{{project.titre}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Auteur</div>
            <div>{{project.personne}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Realiser le</div>
            <div>{{project.date}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Statut</div>
            <div>
              <v-chip :class="`ma-2 ${project.statut}`" outlined>{{project.statut}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          titre: "Création des sites Web",
          personne: "MoMo med",
          date: "15 Jul 2020",
          statut: "en-cours",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          titre: "Coder la page d accueil",
          personne: "Abdou ALL",
          date: "10 Mai 2020",
          statut: "achevé",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          titre: "Designe et mise en page",
          personne: "Salah",
          date: "20 Mar 2020",
          statut: "achevé",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          titre: "Création et sondage",
          personne: "Hassen",
          date: "20 Jun 2020",
          statut: "en-retard",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    definiPar(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style>
.project.achevé {
  border-left: 1rem solid #3cd1c2;
}
.project.en-retard {
  border-left: 1rem solid orange;
}
.project.en-cours {
  border-left: 1rem solid tomato;
}
.v-chip.achevé {
  color: #3cd1c2;
}
.v-chip.en-retard {
  color: orange;
}
.v-chip.en-cours {
  color: tomato;
}
</style>