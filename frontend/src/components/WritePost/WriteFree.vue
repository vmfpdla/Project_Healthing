<template>
    <v-card>
        <v-card-text>
            <v-form ref="form" @submit.prevent="submit">
                <v-container fluid>
                    <v-row>
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
        <v-btn color="blue darken-1" text @click="update">Close</v-btn>
        <v-btn color="blue darken-1" text @click="update">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

    export default {
        name: "WriteFree",
        data(){
            const defaultForm = Object.freeze({
                title: '',
                post: '',
            })
            
            return {
                dialog:false,
                form: Object.assign({}, defaultForm),
                rules: {
                    title: [val => (val || '').length > 0 || 'This field is required'],
                    post: [val => (val || '').length > 0 || 'This field is required'],
                },
                
                defaultForm,
            }
        },
        computed: {
            formIsValid () {
                return (
                this.form.title &&
                this.form.post
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
            update(){
                // 자식 컴포넌트에서 부모 컴포넌트로 보내는 것이 $emit()
                this.dialog = false;
                this.$emit("child",this.dialog)
            },
        },
    }
</script>