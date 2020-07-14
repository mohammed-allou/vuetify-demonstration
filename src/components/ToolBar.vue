<template>
  <nav>
    
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#fcb69f"
          dark
          shrink-on-scroll
          src="https://picsum.photos/1920/1080?random"
          scroll-target="#scrolling-techniques-2"
        >
          <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
          </template>

          <v-app-bar-nav-icon color="pink" dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <router-link to="/Connexion">
            <v-btn flat>Connexion</v-btn>
          </router-link>
          <router-link to="/Contact">
            <v-btn flat>Contact</v-btn>
          </router-link>

          <v-spacer></v-spacer>

          <v-btn>A propo</v-btn>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-tab>
            <v-btn icon>
              <v-badge right color="deep-purple accent-4" icon="mdi-vuetify">
                <v-icon>mdi-heart</v-icon>
              </v-badge>
            </v-btn>
          </v-tab>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600">
          <v-container style="height: 1000px;"></v-container>
        </v-sheet>
        <div class="hidden-md-and-up">
          <template>
            <v-sheet height="400" class="overflow-hidden" style="position: relative;">
              <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-sheet>
          </template>
        </div>
      </v-card>
    
  </nav>
</template>


    
<script>
export default {
  name: "ToolBar",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  }
};
</script>