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
        <v-overflow-btn
          class="my-2"
          :items="dropdown_icon"
          label="시설선택"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="2">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_edit"
          label="카테고리"
          item-value="text"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="2">
        <v-text-field
          label="이름검색"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="2">
        <v-btn>검색</v-btn>
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