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
import VueTableDynamic from 'vue-table-dynamic' // 외부 컴포넌트 이용
import axios from 'axios';


export default {
  name: 'PostList',
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
    axios.get('/api/print_PostFreeList')
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          this.params.data.push([i+1, response.data[i].board_title,response.data[i].user_id,response.data[i].board_date])
        }
      })
  },
  components: { VueTableDynamic}
}
</script>