<template> 
	<v-card
		:loading="loading"
		class="mx-auto my-12"
		max-width="450"
	>
		<v-img
		height="500"
		src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
		>
			<v-row >
				<v-spacer></v-spacer>
				<v-btn class="mx-2" fab dark small color="#E91E63">
					<v-icon dark>mdi-heart</v-icon></v-btn></v-row>
		</v-img>
		<v-card-title>Cafe Badilico</v-card-title>
		<v-card-text>
			<v-row>
				<v-icon>{{ location_icon }}</v-icon>
				<p> 시설 위치 </p>
			</v-row>
			<v-row>
				<v-icon>{{ phone_icon }}</v-icon>
				<p> 시설 전화번호 </p>
			</v-row>
			<v-row>
				<v-icon>{{ clock_icon }}</v-icon>
				<p> 시설 영업시간 </p>
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
import { mdiMapMarker,mdiPhone,mdiClockOutline} from '@mdi/js';
  export default {
	name: "detail-card",
	
    data: () => ({
		phone_icon: mdiPhone,
		location_icon: mdiMapMarker,
		clock_icon: mdiClockOutline,
    }),
  }
</script>