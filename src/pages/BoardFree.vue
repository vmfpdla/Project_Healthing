<template>
    <v-app>
        <SearchBar/>
        <Sort/>
        <v-row align="stretch">
            <v-col cols="12" sm="10">
                <PostListFree/>
            </v-col>
        </v-row>
	</v-app>
</template>

<script>
import PostListFree from '../components/PostListFree'
import SearchBar from '../components/SearchBar'
import Sort from '../components/Sort'
    export default {
        name: "Community",
        components:{PostListFree,SearchBar,Sort},
        data(){
            return{
                
            }
        }
    }
</script>