<template>
  <v-card>
    <v-carousel
      :cycle="cycle"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        
      ></v-carousel-item>
    </v-carousel>   
    <SearchBar/>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="n in 4"
        :key="n"
      >
        <FacilityCard/>
      </v-col>
    </v-row>
    
  </v-card>
</template>

<script>
import FacilityCard from './FacilityCard'
import SearchBar from './SearchBar'
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
      }
    },
    components:{FacilityCard,SearchBar},
    
  }
</script>