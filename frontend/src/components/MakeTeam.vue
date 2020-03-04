<template>
<v-app>
  <v-container fluid>
    <v-row>
      <input type="file" accept="image/*" @change="onChange" />
        <div id="preview">
          <img v-if="item.imageUrl" :src="item.imageUrl" />
        </div>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-subheader>Open Talk Link</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="Link"
          prefix="https://"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-subheader> 활동 요일 </v-subheader>
      <v-card-text>
        <v-chip-group
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
        <v-subheader>활동 시간</v-subheader>
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
        <v-subheader>팀 이름</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="Team Name"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>팀 설명</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="Team Description"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
  <v-app>
</template>

<script>
    export default {
        name:'imageUpload',
        data(){
            return {
              item:{
    
                image : null,
                imageUrl: null
              }
            }
        },
        methods:{
            onChange(e) {
              const file = e.target.files[0]
              this.image = file
              this.item.imageUrl = URL.createObjectURL(file)
            }    
        }
    }  // missing closure added
</script>