<template>
    <v-card>
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
    </v-card>
</template>

<script>
import FacilityCard from './FacilityCard'
import SelectSearch from './SelectSearch'
import Sort from './sort'
    export default {
        name: "Facility",
        components:{FacilityCard,SelectSearch,Sort},
    }
</script>