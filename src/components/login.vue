<template>
  <v-container>
    <v-alert type="warning" :value="alert">Attention ! il faut remplir l'email et le mot de passe </v-alert>
    <v-form @submit.prevent="submit">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
        </v-col>
        <v-spacer></v-spacer>

        <v-btn class="success" type="submit">submit</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    password: "",
    nameRules: [
      v => !!v || "Pass is required",
      v => v.length <= 10 || "Pass must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    alert:false
  }),
  methods: {
    submit() {
      if(!this.email && !this.password){
        this.alert = true
      }
      console.log("salut !!");
      console.log(`Email is: ${this.email} and Password is: ${this.password}`);
    }
  }
};
</script>