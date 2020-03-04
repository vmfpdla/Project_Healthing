<template>
    <v-app>
       <div class="ma-5 pa-5">
        <SelectSearchMap/>
        
        </div>
    </v-app>
</template>

<script>
import SelectSearchMap from '../components/SelectSearch_Map'

    export default {
        name: "Map",
        components:{SelectSearchMap},
        data: () => ({
        }),
       
    }
</script>