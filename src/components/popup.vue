<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on, attrs}">
      <v-btn flat class="success" v-bind="attrs" v-on="on">nouveau projet</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        <h4>Ajouter un nouveau projet</h4>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Titre :" v-model="titre" prepend-icon="folder"></v-text-field>

          <v-textarea label="Information :" v-model="content" prepend-icon="edit"></v-textarea>
          <v-menu>
            <v-text-field :value="echeance" slot="activator" label="Date d'échéance" prepend-icon="date_range"></v-text-field>
            <v-date-picker
              v-model="echeance"
              year-icon="mdi-calendar-blank"
              prev-icon="mdi-skip-previous"
              next-icon="mdi-skip-next"
            ></v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat class="success mx-0 mt-3" @click="soumettre">Ajouter</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      titre: "",
      content: "",
      echeance: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    soumettre() {
      console.log(this.titre, this.content);
    }
  }
};
</script>

<style>
</style>