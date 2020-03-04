<template> 
	<v-card
		class="mx-auto my-12"
		max-width="450"
	>
		<v-img
			height="250"
			src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
		>
			<v-row>
				<v-spacer></v-spacer>
				<v-btn text icon color="pink"><v-icon>mdi-heart</v-icon></v-btn>
			</v-row>
		</v-img>
		<v-card-title>{{senddata2.CENTER_NAME}}</v-card-title>
		<v-card-text>
			<v-row align="center" class="ma-0">
				<v-chip
                  
                  color="success"
                  outlined
                >시작일
                </v-chip>
				<v-card-subtitle>{{senddata2.CLASS_S}} </v-card-subtitle>
			</v-row>
			<v-row align="center" class="ma-0">
				<v-chip
                  
                  color="success"
                  outlined
                >종료일
                </v-chip>
				<v-card-subtitle>{{senddata2.CLASS_E}} </v-card-subtitle>
			</v-row>
			<v-row align="center">
				<v-btn text icon color="primary"><v-icon >{{ tel_icon }}</v-icon></v-btn>
				<v-card-subtitle>{{senddata2.TEL}} </v-card-subtitle>
			</v-row>
			<v-row align="center">
				<v-btn text icon color="primary"><v-icon >{{ home_icon }}</v-icon></v-btn>
				<v-card-subtitle>{{senddata2.HOMEPAGE}} </v-card-subtitle>
			</v-row>
			<v-row align="center">
				<v-btn text icon color="primary"><v-icon >{{ link_icon }}</v-icon></v-btn>
				<v-card-subtitle>{{senddata2.OPLINE_LINK}} </v-card-subtitle>
			</v-row>
			<v-row align="center" class="mx-0">
				<v-card-subtitle> {{senddata2.INTRO}} </v-card-subtitle>
			</v-row>
			<v-card class="d-flex flex-column ">
				<v-card
					v-for="n in 3"
					:key="n"
					outlined
					tile
					class='mx-0'
				>
					<v-row>
						<v-rating
							:value="4.5"
							color="amber"
							dense
							half-increments
							readonly
							size="14"
							></v-rating>
					<p>댓글:blah blah</p>
					</v-row>
				</v-card>
			</v-card>
			<v-card class="d-flex flex-column ">
				<v-card
					v-for="n in 3"
					:key="n"
					outlined
					tile
					class='mx-0'
				>
					<v-row>
						<v-rating
							:value="4.5"
							color="amber"
							dense
							half-increments
							size="14"
							></v-rating>
					<v-text-field dense label="댓글"></v-text-field>
					<v-btn>입력</v-btn>
					</v-row>
				</v-card>
			</v-card>
			
		</v-card-text>
	</v-card>
</template>

<script>
import { mdiMapMarker,mdiHome,mdiPhone,mdiLink} from '@mdi/js';
  export default {
		name: "detail-card",
		props:['senddata2'],
		data: () => ({
			home_icon: mdiHome,
			location_icon: mdiMapMarker,
			tel_icon : mdiPhone,
			link_icon : mdiLink
		}),
  }
</script>