<template>
	<v-app id="signin">

    <!-- <v-app-bar app
      color="indigo">
      <v-toolbar-title>Healthing</v-toolbar-title>
    </v-app-bar> -->

		<v-content>
			<v-container mt-12>
				<v-form
					ref="form"
					v-model="valid"
					lazy-validation
				>
				<v-layout column>
					<v-flex row>
							<v-text-field
							v-model="id"
							:counter="10"
							:rules="idRules"
							label="ID"
							required
							></v-text-field>

							<v-btn
							:disabled="!valid"
							color="success"
							>
							Check Availability
							</v-btn>
					</v-flex>

					<v-flex row>
						<v-text-field
						v-model="pw"
						:counter="10"
						:rules="pwRules"
						label="Password"
						type="password"
						required
						></v-text-field>
					</v-flex>

					<v-flex row>
						<v-text-field
						v-model="pw_check"
						:counter="10"
						:rules="pwRules"
						label="Password Check"
						type="password"
						required
						></v-text-field>
					</v-flex>

					<v-flex row>
						<v-text-field
						v-model="name"
						:counter="10"
						:rules="nameRules"
						label="Name"
						required
						></v-text-field>
					</v-flex>

					<v-flex row>
						<v-layout mr-3>
							<v-select
							v-model="select"
							:items="items"
							:rules="[v => !!v || 'Address is required']"
							label="Address 1"
							required
							></v-select>
						</v-layout>
						<v-layout ml-3>
							<v-select
							v-model="select"
							:items="items"
							:rules="[v => !!v || 'Address is required']"
							label="Address 2"
							required
							></v-select>
						</v-layout>
					</v-flex>

					<v-flex row>
						<v-text-field
						v-model="email"
						:rules="emailRules"
						label="E-mail"
						required
						></v-text-field>
					</v-flex>

					<v-flex row
					mt-3>
						<v-layout
						justify-center>
							<v-btn
							:disabled="!valid"
							color="success"
							class="mr-4"
							@click="validate"
							>
							Validate
							</v-btn>

							<v-btn
							color="warning"
							@click="resetValidation"
							>
							Reset Validation
							</v-btn>
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
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      pwRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters',
      ],
      idRules: [
        v => !!v || 'ID is required',
        v => (v && v.length <= 10) || 'ID must be less than 10 characters',
      ],
      select: null,
      items: [
        'address 1',
        'address 2',
        'address 3',
        'address 4',
      ]
    }),
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
		}
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
