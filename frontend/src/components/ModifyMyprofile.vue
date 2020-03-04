<template>
<v-app>
  <v-card flat>
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="6" sm="6">
            <v-text-field 
			value="vmfpdla"
			label="아이디"
			disabled
            ></v-text-field>
          </v-col>
        </v-row>
		<v-row>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="password"
					:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
					:rules="[rules.required, rules.min]"
					:type="show1 ? 'text' : 'password'"
					name="input-10-1"
					label="비밀번호 수정"
					hint="At least 10 characters"
					counter
					@click:append="show1 = !show1"
				></v-text-field>
				</v-col>
				</v-row>
		<v-row>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="password"
					:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
					:rules="[rules.required, rules.min]"
					:type="show2 ? 'text' : 'password'"
					name="input-10-1"
					label="비밀번호 재입력"
					hint="At least 10 characters"
					counter
					@click:append="show2 = !show2"
				></v-text-field>
				</v-col>
				</v-row>
		<v-row>
          <v-col cols="6" sm="6">
            <v-text-field 
			value="황연주"
			label="이름"
			disabled
            ></v-text-field>
          </v-col>
        </v-row>
		<v-row>
          <v-col cols="12" sm="6"><v-select
              v-model="form.favoriteAnimal"
              :items="animals"
              :rules="rules.animal"
              color="pink"
              label="시"
              required
            ></v-select>
          </v-col><v-col cols="12" sm="6"><v-select
              v-model="form.favoriteAnimal"
              :items="animals"
              :rules="rules.animal"
              color="pink"
              label="구"
              required
            ></v-select>
          </v-col>
        </v-row>
		<v-row>
          <v-col cols="6" sm="6">
            <v-text-field 
			value="vmfpdla0@naver.com"
			label="이메일"
            ></v-text-field>
          </v-col>
        </v-row>
          <v-btn class="ma-2" right="true" outlined color="indigo">수정</v-btn>
      </v-container>
    </v-form>
  </v-card>
  </v-app>
</template>

<script>
  export default {
    data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        bio: '',
        favoriteAnimal: '',
        age: null,
        terms: false,
      })

      return {
		show1: false,
		show2: false,
		password:'원래비밀번호',
        form: Object.assign({}, defaultForm),
        rules: {
          age: [
            val => val < 10 || `I don't believe you!`,
          ],
          animal: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
        },
        animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
        conditions: false,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
        snackbar: false,
        terms: false,
        defaultForm,
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.favoriteAnimal &&
          this.form.terms
        )
      },
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.resetForm()
      },
    },
  }
</script>