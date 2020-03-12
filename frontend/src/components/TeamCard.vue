<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>{{senddata.team_name}}</v-card-title>
    <v-card-subtitle>위치 {{senddata.team_map}}</v-card-subtitle>
    <v-row
      :class="`d-flex align-center mb-6`"
    >
      <v-col>
        <v-row 
        >
          <v-chip
            class = "ma-2"
            v-if = "this.day.mon!=null"
            color="orange"
            text-color="white"
          >
            월
          </v-chip>
          <v-card-subtitle  class="text-center">{{senddata.mon}}</v-card-subtitle>
        </v-row>
      </v-col>
        <v-col>
        <v-row>
          <v-chip
            class="ma-2"
            v-if = "this.day.tue!=null"
            color="orange"
            text-color="white"
          >
            화
          </v-chip>
        </v-row>
        <v-row>
          <v-card-subtitle>{{senddata.tue}}</v-card-subtitle>
        </v-row>
      </v-col>
        <v-col>
        <v-row>
          <v-chip
            class="ma-2"
            v-if = "this.day.wed!=null"
            color="orange"
            text-color="white"
          >
            수
          </v-chip>
        </v-row>
        <v-row>
          <v-card-subtitle>{{senddata.wed}}</v-card-subtitle>
        </v-row>
      </v-col>
        <v-col>
        <v-row>
          <v-chip
            class="ma-2"
            v-if = "this.day.thr!=null"
            color="orange"
            text-color="white"
          >
            목
          </v-chip>
        </v-row>
        <v-row>
          <v-card-subtitle>{{senddata.thr}}</v-card-subtitle>
        </v-row>
      </v-col>
        <v-col>
        <v-row>
          <v-chip
            class="ma-2"
            v-if = "this.day.fri!=null"
            color="orange"
            text-color="white"
          >
            금
          </v-chip>
        </v-row>
        <v-row>
          <v-card-subtitle>{{senddata.fri}}</v-card-subtitle>
        </v-row>
      </v-col>
        <v-col>
        <v-row>
          <v-chip
            class="ma-2"
            v-if = "this.day.sat!=null"
            color="orange"
            text-color="white"
          >
            토
          </v-chip>
        </v-row>
        <v-row>
          <v-card-subtitle>{{senddata.sat}}</v-card-subtitle>
        </v-row>
      </v-col>
        <v-col>
        <v-row>
          <v-chip
            class="ma-2"
            v-if = "this.day.sun!=null"
            color="orange"
            text-color="white"
          >
            일
          </v-chip>
        </v-row>
        <v-row>
          <v-card-subtitle>{{senddata.sun}}</v-card-subtitle>
        </v-row>
      </v-col>
    </v-row>
    <v-card-subtitle>인원 {{senddata.team_count}}</v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="red"
        text
      >JOIN
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      ><v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{senddata.team_text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
</template>

<script>
  export default {
    props:['senddata'],
    data: () => ({
      show: false,
      day:[]
    }),
    created(){
      this.day=this.senddata;
      
    }
  }
</script>