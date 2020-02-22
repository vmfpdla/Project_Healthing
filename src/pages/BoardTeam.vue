<template>
    <v-app>
        <SearchBar/>
        <Sort/>
        <v-row
        class="mb-6"
        no-gutters
        >
            <v-col
                v-for="n in 4"
                :key="n"
            >
                <TeamCard/>
            </v-col>
        </v-row>
   </v-app>
</template>

<script>
import TeamCard from '../components/TeamCard'
import SearchBar from '../components/SearchBar'
import Sort from '../components/Sort'
    export default {
        name: "BoardTeam",
        components:{TeamCard,SearchBar,Sort},
        data(){
            return{
                
            }
        }
    }
</script>