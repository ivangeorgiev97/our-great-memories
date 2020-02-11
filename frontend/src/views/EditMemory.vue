<template>
  <div>
    <h3 class="bdr-danger">Edit memory</h3>
    <form @submit.prevent="submitForm" class="form-group mw-50">
      <label for="title">Title:</label>
      <input
        type="text"
        v-model.trim="title"
        class="form-control"
        :class="{ 'border border-danger': $v.title.$error }"
        id="name"
        placeholder="Please enter title..."
      />
      <label for="description">Description:</label>
      <textarea
        class="form-control"
        :class="{ 'border border-danger': $v.description.$error }"
        v-model.trim="description"
        name="title"
      />
      <b-button class="mt-3" type="submit" :disabled="formStatus === 'WAIT'">Edit</b-button>
    </form>
    <p v-show="formStatus === 'ERROR'" class="text-danger">Please check data again</p>
    <p v-show="formStatus === 'SUCCESS'" class="text-success">Successfuly edited</p>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  data() {
    return {
      id: 0,
      title: "",
      description: "",
      formStatus: null
    };
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
  /*     beforeCreate () {
        this.$store.dispatch('memories/setCurrent', {
            id: this.$route.params.id
        })
    }, */
  created() {
    const baseApiUrl = "http://localhost:8000/api";

    axios
      .get(`${baseApiUrl}/memories/getById/${this.$route.params.id}`)
      .then(resp => {
        this.id = resp.data.id;
        this.title = resp.data.title;
        this.description = resp.data.description;
      });
  },
  mounted() {
    console.log(this.title);
  },
  methods: {
    submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.formStatus = "ERROR";

        return;
      } else {
        this.formStatus = "WAIT";

        setTimeout(() => {
          this.$store.dispatch("memories/editMemory", {
            id: this.id,
            title: this.title,
            description: this.description
          });
          this.formStatus = "SUCCESS";
        }, 600);
      }
    }
  }
};
</script>