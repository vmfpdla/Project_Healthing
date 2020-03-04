<template>
    <v-container class="ma-5 pa-5">
        <SelectSearch/>
        <Sort/>
        <v-row 
            v-for="n in 10"
            :key="n"       
            class="mb-6"
            no-gutters    
        >
            <v-col
                v-for="k in 4"
                :key="k"
            >   
                <FacilityCard v-if="loading==true" v-bind:senddata="CENTERS[(n-1)*4+k-1]"/>     
            </v-col>
        </v-row>  
    </v-container>
</template>

<script>
import FacilityCard from '../components/FacilityCard'
import SelectSearch from '../components/SelectSearch'
import Sort from '../components/Sort'
import axios from 'axios';
    export default {
        name: "Facility",
        components:{FacilityCard,SelectSearch,Sort},
        data () {
            return {
                CENTERS:[],
                loading:false,
            }
        },
        created(){
            axios.get('http://openAPI.seoul.go.kr:8088/4c70455157766d663130356e6e615668/json/ListProgramByPublicSportsFacilitiesService/1/10000/')
                .then((result)=>{
                    this.CENTERS = result.data.ListProgramByPublicSportsFacilitiesService.row
                    this.loading = true
                    console.log(this.CENTRS)
                })
        }
    }
 

</script>