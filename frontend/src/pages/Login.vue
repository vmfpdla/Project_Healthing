<template>

  <v-app id="login" >

    <!-- <v-app-bar
      color="indigo">
      <v-toolbar-title>Healthing</v-toolbar-title>
    </v-app-bar> -->

    <v-content>
			<v-container
      mt-10>
				<v-form
					ref="form"
					v-model="valid"
					lazy-validation
				>

        <v-layout column
        justify="center">
          <v-text-field
          width = "200"
          height = "50"
					v-model="id"
					label="ID"
          prepend-icon="person"
          type = "text"
					></v-text-field>

          <v-text-field
          width = "200"
          height = "50"
					v-model="password"
					label="Password"
          prepend-icon="lock"
          type = "password"
					></v-text-field>

					<v-btn
          color="primary"
          height = "50">Login</v-btn>

          <v-flex column>
            <v-layout
            justify-center>
            <v-btn
            center
            class="mt-10"
            height="50"
            width="100"
            color="red">Google</v-btn>
            </v-layout>

            <v-layout
            justify-center>
            <v-btn
            class="mt-3"
            height="50"
            width="100"
            color="yellow">Kakao</v-btn>
            </v-layout>

            <v-layout justify-center>
            <v-btn
            class="mt-3"
            height="50"
            width="100"
            color="green">Naver</v-btn>
            </v-layout>
          </v-flex>
          <v-flex row
          class = "mt-5">
            <v-layout justify-center>
            <v-btn text
            v-on:click="signinClick"
            class="mx-5"
            height="20"
            width="200">
            Sign in
            </v-btn>

            <v-sheet>
              |
            </v-sheet>
            <v-btn text
            v-on:click="forgotClick"
            class="mx-5"
            height="20"
            width="200">Forgot ID</v-btn>

            <v-sheet>
              |
            </v-sheet>
            <v-btn text
            v-on:click="forgotClick"
            class="mx-5"
            height="20"
            width="200">Forgot Password</v-btn>

            </v-layout>
          </v-flex>
          </v-layout>
				</v-form>

			</v-container>
		</v-content>


  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    methods:{
      signinClick: function(){
        this.$router.push({path:'/signin'})
      },
      forgotClick: function(){
        this.$router.push({path:'/forgot'})
      }
    }
  }
</script>
