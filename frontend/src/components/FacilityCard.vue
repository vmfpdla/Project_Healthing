<template>
 <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-card
        class="mx-auto my-12"
        max-width="374"
        v-on="on"
      >
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        >
        </v-img>
          <v-card-title>{{senddata.CENTER_NAME}}</v-card-title>
          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1 black--text">
              {{senddata.ADDRESS}}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <v-row align="center" class="ma-0">
              <v-row align="center" class="ma-0">
                <v-chip
                  
                  color="success"
                  outlined
                >종목명
                </v-chip>
                <v-card-subtitle>{{senddata.SUBJECT_NAME}}</v-card-subtitle>
              </v-row>
              <v-row align="center" class="ma-0">
                <v-chip
                 
                  color="success"
                  outlined
                >프로그램명
                </v-chip>
                <v-card-subtitle>{{senddata.CLASS_NAME}}</v-card-subtitle>
              </v-row>
            </v-row>
            <v-row align="center" class="ma-0">
              <v-chip
  
                  color="primary"
                  outlined
                >대상
              </v-chip>
              <v-card-subtitle>{{senddata.TARGET}}</v-card-subtitle>
            </v-row>
            <v-row align="center" class="ma-0">
              <v-chip
                  color="deep-purple accent-4"
                  outlined
                >요일
              </v-chip>
              <v-card-subtitle>{{senddata.WEEK}}</v-card-subtitle>
            </v-row>
            <v-row align="center" class="mx-0">
              <v-btn text icon color="primary"><v-icon>mdi-clock</v-icon></v-btn>
              <v-card-subtitle>{{senddata.CLASS_TIME}}</v-card-subtitle>
            </v-row>
            <v-row align="center" class="mx-0">
              <v-btn text icon color="primary"><v-icon>mdi-cash</v-icon></v-btn>
              <v-card-subtitle>{{senddata.FEE}}원</v-card-subtitle>
            </v-row>
          </v-card-text>
      </v-card>
    </template>
    <DetailCard v-bind:senddata2="this.senddata"/>
  </v-dialog>
</template>

<script>
import DetailCard from './DetailCard'
  export default {
    name: "FacilityCard",
    components:{DetailCard},
    props:['senddata'],
    data: () => ({
     dialog: false,
     
    }),
    created(){
     
    }
   
   
  }
</script>