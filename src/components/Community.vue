<template>
    <div>
        <SearchBar/>
        <sort/>
        <PostList/>
        <WritePost/>
	</div>
</template>

<script>
import PostList from './PostList'
import WritePost from './WritePost'
import SearchBar from './SearchBar'
import sort from './sort'
    export default {
        name: "Community",
        components:{PostList,SearchBar,sort,WritePost},
        data(){
            return{
                
            }
        }
    }
</script>