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
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <Community/>
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
      }
    },
    components:{Home,Facility,Map,Community},
  }
</script>