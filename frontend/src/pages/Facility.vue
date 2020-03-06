<template>
    <v-container class="ma-5 pa-5">
        <SelectSearch @select-event="parents_select"/>
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
                <FacilityCard 
                    v-if="loading==true" 
                    v-bind:senddata="CENTERS[(n-1)*4+k-1]"
                />     
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
                select_data:[],

            }
        },
        created(){
            axios.get('http://openAPI.seoul.go.kr:8088/4c70455157766d663130356e6e615668/json/ListProgramByPublicSportsFacilitiesService/1/1000/')
                .then((result)=>{
                    this.CENTERS = result.data.ListProgramByPublicSportsFacilitiesService.row
                    this.loading = true
                })
        },
        methods:{
            parents_select(message){
                this.loading= false;
                this.select_data=message;
                this.CENTERS=[];
                axios.get('http://openAPI.seoul.go.kr:8088/4c70455157766d663130356e6e615668/json/ListProgramByPublicSportsFacilitiesService/1/1000/'+message.cate)
                // 카테고리를 url 로 고른다음에
                .then((result)=>{
                    //var temp =[];
                    if(this.select_data.add1=="서울시"){ // 만약 서울시를 선택하면
                        for(var i=0;i<result.data.ListProgramByPublicSportsFacilitiesService.row.length;i++)
                        {
                            if(result.data.ListProgramByPublicSportsFacilitiesService.row[i].ADDRESS.includes(this.select_data.add2)==true){  // 종로구를 선택시 종로구만 나오게
                                this.CENTERS.push(result.data.ListProgramByPublicSportsFacilitiesService.row[i]);
                            }
                        }
                        this.loading = true;
                        //this.CENTERS = temp;
                    }
                })
            },
 
        }
    }
 

</script>