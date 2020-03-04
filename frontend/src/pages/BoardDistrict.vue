<template>
    <v-app>
        <SearchBar/>
        <Sort/>
        <v-row align="stretch">
            <v-col cols="12" sm="10">
                <PostListDistrict/>
            </v-col>
        </v-row>
	</v-app>
</template>

<script>
import PostListDistrict from '../components/PostListDistrict'
import SearchBar from '../components/SearchBar'
import Sort from '../components/Sort'
    export default {
        name: "Community",
        components:{PostListDistrict,SearchBar,Sort},
        data(){
            return{
                
            }
        }
    }
</script>