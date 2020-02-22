<template>
    <v-app>
        <SelectSearch/>
        <Sort/>
        <v-row
        class="mb-6"
        no-gutters
        >
            <v-col
                v-for="n in 4"
                :key="n"
            >
                <FacilityCard/>
            </v-col>
        </v-row>
   </v-app>
</template>

<script>
import FacilityCard from '../components/FacilityCard'
import SelectSearch from '../components/SelectSearch'
import Sort from '../components/Sort'
    export default {
        name: "Facility",
        components:{FacilityCard,SelectSearch,Sort},
    }
</script>