<template>
    <v-container>
        <SearchBar class="mx-auto"/>
        <Sort/>
        <PostListSports/>
        <v-row justify="end">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">글쓰기</v-btn>
                </template>
                <WriteSports  @child="parents"/>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
import PostListSports from '../components/PostListSports'
import SearchBar from '../components/SearchBar'
import Sort from '../components/Sort'
import WriteSports from '../components/WritePost/WriteSports'
    export default {
        name: "BoardSports",
        components:{SearchBar,Sort,PostListSports,WriteSports},
        data: () => ({
            dialog:false,
        }),
        methods:{
            parents(message){
                this.dialog = message;
            }
        }
    }
</script>