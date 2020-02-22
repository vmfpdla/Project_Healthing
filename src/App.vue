<template>
<v-app>
  <v-card>
    <v-app-bar
      color="indigo"
      
    > 
      <v-toolbar-title>Healthing</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      
      <template v-slot:extension>
        <v-tabs v-model='activeTab' align-with-title grow>
          <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.path" exact>
           {{ tab.name }}
          </v-tab>
          <v-menu
            v-if="more.length"
            bottom
            left
            
          >
            <template v-slot:activator="{ on }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-on="on"
              >
                Community
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item
                v-for="item in more"
                :key="item.id"
                :to="item.path"
              >
                {{ item.name }}
              </v-list-item>
            </v-list>
          </v-menu>
          <v-tab-item
            v-for="tab in tabs"
            :key="tab.id"
            :value="tab.path"
          >
            <router-view></router-view>
          </v-tab-item>
          
        </v-tabs>
      </template>
    </v-app-bar>    
  </v-card>
  </v-app>
</template>

<script>
  export default {
    
    data () {
      return {
        activeTab: "./pages/${this.name}",
        tabs: [
          { id:1,name: "Home", path:'/home'  },
          { id:2,name: "Facility", path:'/facility' },
          { id:3,name: "Map", path:'/map' },
        ],
        more:[
          {id:1,name:"BoardSports", path:'/boardsports'},
          {id:2,name:"BoardDistrict", path:'/boarddistrict'},
          {id:3,name:"BoardFree", path:'/boardfree'},
          {id:4,name:"BoardTeam", path:'/boardteam'},
        ]
      };
    } 
  }
</script>