<template>
  <v-card>
    <v-app-bar
      color="#3F51B5"
      
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      
      <v-toolbar-title>Healthing</v-toolbar-title>
      
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      
      <template v-slot:extension>
        <v-tabs v-model='tabs' align-with-title grow>
          <v-tab>홈</v-tab>
          <v-tab>시설</v-tab>
          <v-tab>지도검색</v-tab>
          <v-tab>커뮤니티</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>

    <!-- <v-content>
        <router-view/>
    </v-content> -->

    <v-tabs-items v-model="tabs">

      <v-tab-item>
        <v-card flat>
          <Home/>
        </v-card>
        
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <Facility/>
        </v-card>
        
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <Map/>
          <v-card-title class="headline">An awesome title</v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <Community/>
          <v-card-title class="headline">An even better title</v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>



<script>
import Home from './components/Home.vue'
import Facility from './components/Facility.vue'
import Map from './components/Map.vue'
import Community from './components/Community.vue'


  export default {
    data () {
      return {
        drawer: false,
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       
      }
    },
    components:{Home,Facility,Map,Community}
  }
</script>