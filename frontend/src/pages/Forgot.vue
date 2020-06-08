<template>
  <v-app id="forgot">

    <!-- <v-app-bar app
      color="indigo">
      <v-toolbar-title>
        Healthing
      </v-toolbar-title>
    </v-app-bar> -->

    <v-content>
      <v-container
      mt-12>
        <v-form
					ref="form"
					v-model="valid"
					lazy-validation>

          <v-layout column>
            <v-flex row>
                <v-text-field
                  v-validate="'required|max:10'"
                  v-model="name"
                  :counter="10"
                  label="Name"
                  data-vv-name="name"
                  required
                ></v-text-field>
            </v-flex>

            <v-flex row>
              <v-text-field
                  label="ID"
                  required
                ></v-text-field>
            </v-flex>

            <v-flex row>
                <v-text-field
                  v-validate="'required|email'"
                  v-model="email"
                  label="E-mail"
                  data-vv-name="email"
                  required
                ></v-text-field>
                <v-btn
                width = "200"
                class = "primary">
                  require number
                </v-btn>
            </v-flex>

            <v-flex row
            mt-10>
              <v-text-field
                v-model="authentication"
                label="Authentication Number"
              ></v-text-field>
              <v-btn
              width = "200"
              class = "primary">
                OK
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 10 characters'
          // custom messages
        },
        select: {
          required: 'Select field is required'
        }
      }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
  }
}
</script>
