<template>
    <v-container>
        <SearchBar/>
        <v-row class="mb-6">
            <v-spacer/>
            <v-col cols="12" md="3">
                <Sort/>
            </v-col>
        </v-row>
        <v-row 
            v-for="n in this.Teams.length"
            :key="n"       
            class="mb-6"
            no-gutters    
        >
            <v-col
                v-for="k in temp"
                :key="k"
            >   
                <TeamCard 
                    v-if="loading==true" 
                    v-bind:senddata="Teams[(n-1)*4+k-1]"
                />     
            </v-col>
        </v-row>
        <!-- dialog 출력 -->
        <v-row justify="end">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">글쓰기</v-btn>
                </template>
                <MakeTeam @child="parents"/>
            </v-dialog>
        </v-row>  
    </v-container>
</template>

<script>
import TeamCard from '../components/TeamCard';
import SearchBar from '../components/SearchBar';
import Sort from '../components/Sort';
import MakeTeam from '../components/WritePost/MakeTeam';
import axios from 'axios';
    export default {
        name: "BoardTeam",
        components:{TeamCard,SearchBar,Sort,MakeTeam},
        data(){
            return{
                loading:false,
                Teams:[],
                temp: 1,
                dialog:false,
            }
        },
        mounted () {
            axios.get('/api/print_PostTeamList')
            .then((response) => {
                if(response.data.length<4) this.temp = response.data.length;
                else this.temp = 4;
                for (let i = 0; i < response.data.length; i++) {
                    this.Teams.push(response.data[i]);
                    this.loading = true;
                }
                console.log(this.Teams);
            })
        },
        methods:{
            parents(message){
                this.dialog = message;
            }
        }
        
    }
</script>