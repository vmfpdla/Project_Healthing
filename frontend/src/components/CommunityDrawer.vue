<template>
  <v-container>
		<v-card
			height="400"
			class="overflow-hidden"
		>
			<v-navigation-drawer
				v-model="drawer"
				:color="color"
				:src="bg"
				absolute
				dark
			>
				<v-list
				shaped
				dense
				nav
				class="py-0"
				>
						<v-list-item two-line :class='px-0'>
							<v-list-item-avatar>
								<img src="https://randomuser.me/api/portraits/men/81.jpg">
							</v-list-item-avatar>

							<v-list-item-content>
							<v-list-item-title>Application</v-list-item-title>
							<v-list-item-subtitle>Subtext</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-divider></v-divider>

						<v-list-tile
							v-for="link in links"
							:key="link"
							:to="link.to"
							:active-class="color"
							avatar
							class="v-list-item"
						>
							<v-list-tile-action>
							<v-icon>{{ link.icon }}</v-icon>
							</v-list-tile-action>

							<v-list-item-content>
							<v-list-tile-title>{{ link.text }}</v-list-tile-title>
							</v-list-item-content>
						</v-list-tile>
				</v-list>
			</v-navigation-drawer>
		</v-card>
  </v-container>
</template>

<script>
  export default {
		data () {
      return {
				drawer: true,
				links: [
					{
						to: '/home',
						icon: 'mdi-view-dashboard',
						text: '운동별 게시판',
					},
					{
						to: '/home',
						icon: 'mdi-account',
						text: '지역별 게시판'
					},
					{
						to: '/table-list',
						icon: 'mdi-clipboard-outline',
						text: '팀원 모집'
					},
					{
						to: '/typography',
						icon: 'mdi-format-font',
						text: '자유게시판'
					}
				],
				color: 'primary',
						background: true,
					}
				},
				computed: {
					bg () {
						return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
					},
					items () {
						return this.$t('Layout.View.items')
					}
				},
  }
</script>