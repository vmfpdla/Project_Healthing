<template>
	<v-flex >
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
    </v-card-actions>
	</v-flex>
</template>

<script>

  export default {
    data: () => ({
      items: [
        {
          text: '최신순',
          disabled: false,
          href: './home',
        },
        {
          text: '인기순',
          disabled: false,
          href: './facility',
        },
        
      ],
    }),
  }
</script>