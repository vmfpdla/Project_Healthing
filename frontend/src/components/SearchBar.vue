<template>
  <div>
    <v-row class="ma-auto">
      <v-col cols="12" sm="10">
        <v-text-field
          solo
          label="Search"
          prepend-inner-icon="mdi-magnify"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="2">
       <v-btn class="ml-2" outlined color="indigo">Search</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "search-bar",
    data: () => ({
      
    }),
  }
</script>