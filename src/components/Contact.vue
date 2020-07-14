<template>
  <v-layout class="hidden-md-and-down" mt-6>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="300px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>
        <v-avatar :size="100">
          <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" alt="avatar" />
        </v-avatar>
        <v-card-subtitle class="pb-0 text-center">Beau paysage</v-card-subtitle>

        <v-card-text class="text-md-center">
          <div>Whitehaven Beach</div>

          <div class="text--disabled">Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" class="text-center">Partager</v-btn>

          <v-btn color="orange" class="text-center">Explorer</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>