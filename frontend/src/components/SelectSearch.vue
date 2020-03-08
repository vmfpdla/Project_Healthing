<template>
  <v-container id="dropdown-example">
    <v-row>
      <v-col cols="12" sm="1">
        <v-overflow-btn
          v-model="add1"
          class="my-2"
          :items="dropdown_add"
          @change="add_fun(add1)"
          label="지역선택"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <v-overflow-btn
          v-model="add2"
          class="my-2"
          :items="dropdown_add2"
          item-text="address2_name"
          label="지역선택2"
          @change="add2_fun(add2)"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <v-overflow-btn
          v-model="fac"
          class="my-2"
          :items="dropdown_fac"
          item-text="address_name"
          label="시설선택"
          @change="fac_fun(fac)"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="2">
        <v-overflow-btn
          v-model="cate"
          class="my-2"
          :items="dropdown_category"
          label="카테고리"
          @change="cate_fun(cate)"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="3">
        <v-text-field
          label="이름검색"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn class="ma-2" outlined color="indigo" @click="select_search">Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      select_data:{
        add1 : "",
        add2 : "",
        fac : "",
        cate : "",
      },
      dropdown_add: [
        {text:"서울시"},
        {text:"경기도"},
      ],
      dropdown_add2: [],
      dropdown_fac: [
        "공공",
        //{ text: "사설"},
      ],
      dropdown_category: [
        "스쿼시",
        "수영",
        "필라테스",
        "인라인",
        "줄넘기",
        "유아체능단(분기별)",
        "댄스",
        "탁구",
        "헬스",
        "요가",
        "아쿠아로빅",
        "에어로빅",
        "축구",
        "무용",
        "유아체육(월단위)",
        "농구",
        "검도",
        "발레",
        "장애인체육",
        "골프",
        "태보",
        "무술",
        "배드민턴",
        "암벽등반",
        "합기도",
        "체조",
        "태권도",
        "단전",
        "풋살",
        "스피드스케이트",
        "테니스",
        "보드(S-BOARD)",
        "게이트볼",
        "궁도",
        "당구포켓볼",
        "권투",
        "학교체육",
        "야구",
        "유도",
        "배구",
        "스키",
        "조깅/워킹",
        "피겨스케이팅",
        "라켓볼",
        "하키",
        "사이클(자전거)",
        "승마"
      ],
      
    }),
    methods : {
      add_fun(add1){
        this.dropdown_add2=[];
        axios.get('/api/select_add')
          .then((response) => {
            if(add1=="서울시"){
              this.select_data.add1=add1;
              for(var i=0;i<response.data.length;i++)
              {
                if(response.data[i].address1_name==add1)
                {
                  this.dropdown_add2.push(response.data[i].address2_name)
                  
                }
              }
            }
            else{
              this.select_data.add1=add1;
              for(var j=0;i<response.data.length;j++)
              {
                if(response.data[j].address1_name==add1)
                {
                  this.dropdown_add2.push(response.data[j].address2_name)
                  
                }
              }
          }
        })
      },
      add2_fun(add2){
        this.select_data.add2= add2;
      },
      fac_fun(fac){
        console.log(fac);
        this.select_data.fac = fac;
      },
      cate_fun(cate){
        this.select_data.cate = cate;
      },
      select_search(){
        console.log("눌렀다");
        this.$emit("select-event",this.select_data);
      }
    },
    // created () { // 컴포넌트가 생성될 때, 요청을 보낸다.        
    //   axios.get('/api/select_add')
    //     .then((response) => {
    //       this.dropdown_add2 = response.data;
    //       console.log(this.dropdown_add2);
    //       console.log(this.dropdown_fac);
    //     })
    // },
  }
</script>