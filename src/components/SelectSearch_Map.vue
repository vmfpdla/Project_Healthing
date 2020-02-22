<template>
  <v-container id="dropdown-example">
    <v-row>
      <v-col cols="12" sm="2">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          label="지역선택"
          item-value="text"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_font"
          label="지역선택2"
          item-value="text"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <v-checkbox v-model="success" class="mx-2" label="시설"></v-checkbox>
      </v-col>

      <v-col cols="12" sm="2">
        <v-checkbox v-model="success" class="mx-2" label="모임"></v-checkbox>
      </v-col>

      <v-col cols="12" sm="2">
        <v-btn class="ma-2" outlined color="indigo">Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list',},
        { text: 'favorite', },
        { text: 'delete',  },
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },
      ],
    }),
  }
</script>