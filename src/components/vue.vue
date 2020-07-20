 <!--// <template>
  //
  <v-card class="mx-auto overflow-hidden" height="400">
    //
    <v-app-bar color="deep-purple" dark>
      //
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>//
      <v-toolbar-title>Title</v-toolbar-title>//
    </v-app-bar>//
    <v-navigation-drawer v-model="drawer" absolute temporary>
      //
      <v-list nav dense>
        //
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          //
          <v-list-item>
            //
            <v-list-item-icon>
              //
              <v-icon>mdi-home</v-icon>//
            </v-list-item-icon>//
            <v-list-item-title>Home</v-list-item-title>//
          </v-list-item>//
          <v-list-item>
            //
            <v-list-item-icon>
              //
              <v-icon>mdi-account</v-icon>//
            </v-list-item-icon>//
            <v-list-item-title>Account</v-list-item-title>//
          </v-list-item>//
        </v-list-item-group>//
      </v-list>//
    </v-navigation-drawer>//
  </v-card>//
</template>

// <script>
// export default {
//   data: () => ({
//     drawer: false
//   })
// };
//
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">Click Me</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  // </template> 
  <template>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Regular" disabled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Regular" readonly></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Solo" solo disabled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Solo" solo readonly></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Filled" filled disabled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Filled" filled readonly></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Outlined" outlined disabled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field value="John Doe" label="Outlined" outlined readonly></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </template>
</template>

<template>
  <div class="text-center">
    <v-btn
      color="blue"
      dark
      @click="sheet = !sheet"
    >
      Open v-model
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >close</v-btn>
        <div class="py-3">This is a bottom sheet using the controlled by v-model instead of activator</div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    }),
  }
</script>-->



<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open In
        </v-btn>
      </template>
      <v-list>
        <v-subheader>Open in</v-subheader>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-item-avatar>
            <v-avatar size="32px" tile>
              <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    }),
  }
</script>