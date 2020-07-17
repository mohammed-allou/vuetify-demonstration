<template>
  <div class="projects">
    <h2 class="subheading grey--text">Projects</h2>

    <!-- <v-expansion-panels>
      <v-expansion-panel v-for="(item,i) in 5" :key="i">
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> -->

    <v-container class="my-5">
    <v-expansion-panels>
      <!-- <v-expansion-panel v-for="project in monProjet" :key="project.titre">  -->
      <v-expansion-panel v-for="project in projects" :key="project.titre"> 
      
        <v-expansion-panel-header  class="font-weight-bold grey--text">{{project.titre}}</v-expansion-panel-header>
           <v-expansion-panel-content>
             <v-card>
               <v-card-text class="px-4 grey--text">
                 <div class="font-weight-bold">
               Realisé par :{{project.personne}}
             </div>
             <div>{{project.content}}</div>
               </v-card-text>
             </v-card>
           </v-expansion-panel-content>
           </v-expansion-panel>
    </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
    }
  },
  computed:{
    monProjet(){
      return this.projects.filter(project=>{
        return project.personne === 'Salah'
      })
    }
  }
};
</script>

<style>
</style>