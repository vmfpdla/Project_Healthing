<template>
    <v-app>
       <div class="ma-5 pa-5">
        <SelectSearchMap/>
        <DaumMap/>
        </div>
    </v-app>
</template>

<script>
import SelectSearchMap from '../components/SelectSearch_Map';
import DaumMap from '../components/DaumMap';
    export default {
        name: "Map",
        components:{SelectSearchMap,DaumMap},
        data: () => ({
        }),
       
    }
</script>