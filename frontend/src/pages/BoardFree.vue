<template>
  <v-app>
    <v-container>
        <SearchBar class="mx-auto"/>
        <Sort/>
        <PostListFree/>
        <v-row justify="end">
            <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">글쓰기</v-btn>
            </template>
            <WriteFree @child="parents"/>
                      
            </v-dialog>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
import PostListFree from '../components/PostListFree';
import SearchBar from '../components/SearchBar';
import Sort from '../components/Sort';
import WriteFree from '../components/WritePost/WriteFree';
    export default {
        name: "BoardFree",
        components:{PostListFree,SearchBar,Sort,WriteFree},
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