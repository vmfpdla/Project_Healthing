<template>
  <v-container fluid>
    <v-card>
      <v-row class="mx-auto">
        <v-card-title>팀 만들기</v-card-title>
      </v-row>
      <v-row class="mx-auto">
          <input 
            type="file" 
            @change="onFileSelected" 
            accept="image/*"> 
        
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>활동 지역</v-card-subtitle>
        </v-col>
        <v-col cols="12" sm="3">
          <v-overflow-btn
            v-model="add1"
            class="my-2"
            :items="dropdown_add"
            @change="add_fun(add1)"
            label="지역선택"
          ></v-overflow-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-overflow-btn
            v-model="add2"
            class="my-2"
            :items="dropdown_add2"
            item-text="address2_name"
            label="지역선택2"
            @change="add2_fun(add2)"
          ></v-overflow-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>Open Talk Link</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="teamLink"
            label="Link"
            prefix="https://"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-card-subtitle> 활동 요일 </v-card-subtitle>
        <v-card-text>
          <v-chip-group
            align='center'
            v-model="selected_days"
            active-class="deep-purple--text text--accent-4"
            column
            multiple
          >
            <v-chip v-for="day in days" :key="day" :value="day">
              {{ day }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>활동 시간</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          
          <v-text-field
            v-model="teamClock"
            label="활동 시간"
            value="12:30:00"
            type="time"
            suffix="PST"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle> 인원</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          
          <v-text-field
            v-model="teamNumber"
            label="인원 "
            type="number"
            
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>팀 이름</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="teamName"
            label="Team Name"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-card-subtitle>팀 설명</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="teamDetail"
            label="Team Description"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer/>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
          <v-btn color="blue darken-1" text @click="onSave">Save</v-btn>
        </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name:'MakeTeam',
  data(){
      return {
        dialog:false,
        uploadImageFile: "",
        teamLink:"",
        days: [
        '월', '화', '수', '목', '금', '토','일'
        ],
        selected_days:[],
        teamClock:"",
        teamNumber:"",
        teamName:"",
        teamDetail:"",
        dropdown_add: [
          {text:"서울시"},
          {text:"경기도"},
        ],
        dropdown_add2: [],
        select_data:{
          add1 : "",
          add2 : "",
        },
      }
  },
  methods:{
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
      onFileSelected(event){  // 파일 고르면
        this.uploadImageFile = event.target.files[0]; //3번
      },
      async onSave(){
          const fd = new FormData(); //반드시 필요 
          fd.append('teamImage', this.uploadImageFile); //4번 
          fd.append('teamLink', this.teamLink);
          fd.append('teamDays', this.selected_days);
          fd.append('teamClock', this.teamClock);
          fd.append('teamNumber',this.teamNumber);
          fd.append('teamName',this.teamName);
          fd.append('teamDetail',this.teamDetail);
          fd.append('teamAddress',this.select_data.add2);
          
          await axios.post('/api/make_team',fd,{
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res)=>{
            console.log("결과 : "+ res);
          })
          .catch((e)=>{
            console.log("에러 : "+e);
          })
          this.dialog = false;
          this.$emit("child",this.dialog)
      },
      close(){
          // 자식 컴포넌트에서 부모 컴포넌트로 보내는 것이 $emit()
          this.dialog = false;
          this.$emit("child",this.dialog)
      },
  }
}  // missing closure added
</script>