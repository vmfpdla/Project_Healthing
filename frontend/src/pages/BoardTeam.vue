<template>
    <v-app>
        <div class="ma-5 pa-5">
        <SearchBar/>
        <v-row class="mb-6">
            <v-col cols="12" md="3">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                label="카테고리"
                item-value="text"
                ></v-overflow-btn>
            </v-col>
            <v-spacer/>
            <v-col cols="12" md="3">
                <Sort/>
            </v-col>
        </v-row>
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
        </div>
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
                dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
            }
        }
    }
</script>