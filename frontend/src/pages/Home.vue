<template>
  <v-app>
    <v-carousel
      :cycle="cycle"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        
      ></v-carousel-item>
    </v-carousel>
    <div class="ma-4">
      <SearchBar/>
    </div>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="n in 4"
        :key="n"
      >
        <!-- <FacilityCard/> -->
      </v-col>
    </v-row>
    
  </v-app>
</template>

<script>
//import FacilityCard from '../components/FacilityCard';
import SearchBar from '../components/SearchBar';

  export default {
    name:'Home',
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ], 
        CNETERS : {},
      }
    },
    components:{SearchBar},
  }
</script>