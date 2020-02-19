<template>
<div>
	<div style="width: 600px">
		<vue-table-dynamic 
		:params="params" 
		ref="table"
		>
		</vue-table-dynamic>
	</div>			
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
const random = () => {
  return parseInt(Date.now() + Math.random() * 10000000).toString(16).slice(-6)
}

export default {
  name: 'Demo',
  data() {
    return {
      params: {
        data: [
          ['번호', '글 제목', '글쓴이', '날짜']
        ],
        header: 'row',
        border: true,
        stripe: true,
        pagination: true,
        pageSize: 5,
        pageSizes: [5, 10, 20, 50]
      }
    }
  },
  mounted () {
    for (let i = 0; i < 100; i++) {
      this.params.data.push([i+1, `${random()}`, `${random()}`, `${random()}`])
    }
  },
  components: { VueTableDynamic}
}
</script>