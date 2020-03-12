<template>
  <v-container fluid>
    <v-card>
      <v-row class="mx-auto">
        <v-card-title>팀 만들기</v-card-title>
      </v-row>
      <v-row class="mx-auto">
        
          <input 
            type="file" 
            id="team-image"
            name="team-image"
            @change="onFileSelected" 
            accept="image/*"> 
        
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>Open Talk Link</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          <v-text-field
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
            v-model="selection"
            active-class="deep-purple--text text--accent-4"
            column
            multiple
          >
            <v-chip filter>월</v-chip>
            <v-chip filter>화</v-chip>
            <v-chip filter>수</v-chip>
            <v-chip filter>목</v-chip>
            <v-chip filter>금</v-chip>
            <v-chip filter>토</v-chip>
            <v-chip filter>일</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>활동 시간</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          
          <v-text-field
            label="활동 시간"
            value="12:30:00"
            type="time"
            suffix="PST"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>팀 이름</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          <v-text-field
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
            label="Team Description"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer/>
          <v-btn color="blue darken-1" text @click="update">Close</v-btn>
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
      }
  },
  methods:{
      onFileSelected(event){ 
        this.uploadImageFile = event.target.files[0]; //3번
      },
      async onSave(){
          const fd = new FormData(); //반드시 필요 
          fd.append('team-image', this.uploadImageFile); //4번 
          
          await axios.post('/api/make_team',fd)
          .then((res)=>{
            console.log("결과 : "+ res);
          })
          .catch((e)=>{
            console.log("에러 : "+e);
          })
          this.dialog = false;
          this.$emit("child",this.dialog)
      },
      update(){
          // 자식 컴포넌트에서 부모 컴포넌트로 보내는 것이 $emit()
          this.dialog = false;
          this.$emit("child",this.dialog)
      },
  }
}  // missing closure added
</script>