<template>
<div>
  <div>
	<p> 내가 쓴 글 </p>
    <div style="width: 600px">
      <vue-table-dynamic 
      :params="params1" 
      ref="table"
      >
      </vue-table-dynamic>
    </div>			
  </div>
  <div>
	<p> 내가 쓴 후기 </p>
    <div style="width: 600px">
      <vue-table-dynamic 
      :params="params2" 
      ref="table"
      >
      </vue-table-dynamic>
    </div>			
  </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic' // 외부 컴포넌트 이용
const random = () => { // 랜덤으로 값을 생성하기위해서 해놈 => 나중에 제대로 데이터 넣어야함.
  return parseInt(Date.now() + Math.random() * 10000000).toString(16).slice(-6)
}

export default {
  name: 'PostList',
  data() {
    return {
      params1: {
        data: [
          ['번호', '글 제목','날짜']
        ],
        header: 'row',
        border: true,
        stripe: true,
        pagination: true,
        pageSize: 5,
        pageSizes: [5, 10, 20, 50]
	  },
	  params2: {
        data: [
          ['번호', '시설명','내용', '별점', '날짜']
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
      this.params1.data.push([i+1, `${random()}`, `${random()}`, `${random()}`])
	}
	for (let i = 0; i < 100; i++) {
      this.params2.data.push([i+1, `${random()}`, `${random()}`, `${random()}`])
    }
  },
  components: { VueTableDynamic }
}
</script>