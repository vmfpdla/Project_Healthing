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
          class="my-2"
          :items="dropdown_add2"
          item-text="address2_name"
          label="지역선택2"
        ></v-overflow-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_fac"
          item-text="address_name"
          label="시설선택"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="2">
        <v-overflow-btn
          class="my-2"
          :items="dropdown_category"
          label="카테고리"
        ></v-overflow-btn>
      </v-col>

      <v-col cols="12" sm="3">
        <v-text-field
          label="이름검색"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn class="ma-2" outlined color="indigo" @click=select()>Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      add1 : "",
      dropdown_add: [
        {text:"서울시"},
        {text:"경기도"},
      ],
      dropdown_add2: [],
      dropdown_fac: [
        { id:'a',"address_name" :'abc', "textt" : 'list'},
        { id:'b',"address_name" :'abcd', "textt" : 'favorite'},
        { id:'c',"address_name" :'abce', "textt" : 'delete'},
      ],
      dropdown_category: [
        
      ],
      
    }),
    methods : {
      add_fun(add1){
        this.dropdown_add2=[];
        axios.get('/api/select_add')
          .then((response) => {
            if(add1=="서울시"){
              for(var i=0;i<response.data.length;i++)
              {
                if(response.data[i].address1_name==add1)
                {
                  this.dropdown_add2.push(response.data[i].address2_name)
                  console.log(this.dropdown_add2);
                }
              }
            }
            else{
                for(var j=0;i<response.data.length;j++)
                {
                  if(response.data[j].address1_name==add1)
                  {
                    this.dropdown_add2.push(response.data[j].address2_namee)
                    console.log(this.dropdown_add2);
                  }
                }
            }
          })
      }
    }
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