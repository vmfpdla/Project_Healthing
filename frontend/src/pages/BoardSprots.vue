<template>
  <v-app>
    <v-container>
        <SearchBar/>
        <Sort/>
        <PostListSports/>
        <v-row justify="end">
            <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">글쓰기</v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-form ref="form" @submit.prevent="submit">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-select
                                    v-model="form.category"
                                    :items="category"
                                    :rules="rules.category"
                                    color="pink"
                                    label="카테고리"
                                    required
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                v-model="form.title"
                                :rules="rules.title"
                                color="purple darken-2"
                                label="제목"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                v-model="form.post"
                                color="teal"
                                >
                                <template v-slot:label>
                                    <div>POST</div>
                                </template>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer/>
                <v-btn color="blue darken-1" text @click="dialog=false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="dialog=false">Save</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
import PostListSports from '../components/PostListSports'
import SearchBar from '../components/SearchBar'
import Sort from '../components/Sort'
    export default {
        name: "BoardSports",
        dialog: false,
        components:{SearchBar,Sort,PostListSports},
        data(){
            const defaultForm = Object.freeze({
                category: '',
                title: '',
                post: '',
            })
            return {
                form: Object.assign({}, defaultForm),
                rules: {
                    category: [val => (val || '').length > 0 || 'This field is required'],
                    title: [val => (val || '').length > 0 || 'This field is required'],
                    post: [val => (val || '').length > 0 || 'This field is required'],
                },
                category: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
                defaultForm,
            }
        },

        computed: {
            formIsValid () {
                return (
                this.form.title &&
                this.form.post &&
                this.form.category
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
            }
        },
    }
</script>