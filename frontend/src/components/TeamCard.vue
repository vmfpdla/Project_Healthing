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
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
    data: () => ({
      show: false,
    }),
    props:['senddata'],
  }
</script>