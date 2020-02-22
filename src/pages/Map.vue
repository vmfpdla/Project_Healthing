<template>
    <v-app>
        <SelectSearchMap/>
        <VueDaumMap/>
    </v-app>
</template>

<script>
import SelectSearchMap from '../components/SelectSearch_Map'
import VueDaumMap from 'vue-daum-map/demo/src/app'

    export default {
        name: "Map",
        components:{SelectSearchMap,VueDaumMap},
        data: () => ({
        }),
       
    }
</script>