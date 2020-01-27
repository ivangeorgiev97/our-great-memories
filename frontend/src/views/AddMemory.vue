<template>
  <div>
       <h3 class="bdr-danger"> Add new memory </h3>
       <form @submit.prevent="submitForm" class="form-group mw-50">
           <label for="title">Title:</label>
           <input type="text" v-model.trim="title" class="form-control" :class="{ 'border border-danger': $v.title.$error }" id="name" placeholder="Please enter title..." />
           <label for="description">Description:</label>
           <textarea class="form-control" :class="{ 'border border-danger': $v.description.$error }" v-model.trim="description" name="title" />
           <b-button class="mt-3" type="submit" :disabled="formStatus === 'WAIT'">Add</b-button>
       </form>
       <p v-show="formStatus === 'ERROR'" class="text-danger">Please check data again</p>
       <p v-show="formStatus === 'SUCCESS'" class="text-success">Successfuly added</p>
  </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            title: '',
            description: '',
            formStatus: null
        }
    },
    validations: {
        title: {
            required,
            maxLength: maxLength(120)
        },
        description: {
            required,
            maxLength: maxLength(240)
        }
    },
    methods: {
        submitForm() {
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.formStatus = 'ERROR'

                return
            } else {
                this.formStatus = 'WAIT'

                setTimeout(() => {
                    this.$store.dispatch('memories/addMemory', {
                        title: this.title,
                        description: this.description
                    })
                   this.formStatus = 'SUCCESS'
                }, 600)
            }
        }
    }
}
</script>
