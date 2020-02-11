<template>
  <div id="app">
    <!-- <b-table striped hover :items="items" /> -->

    <table class="table table-border table-stripped">
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Created at</th>
        <th>Updated at</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.updated_at }}</td>
          <td>
            <router-link :to="`/editMemory/${item.id}`">
              <b-button v-on:submit.prevent="updateItem" variant="success">Edit</b-button>
            </router-link>
          </td>
          <td>
            <b-button variant="danger" v-on:click="deleteMemory( item.id )">Delete</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const addZero = value => ("0" + value).slice(-2);

const formatDate = value => {
  if (value) {
    const dt = new Date(value);
    return `${addZero(dt.getDate())}/${addZero(
      dt.getMonth() + 1
    )}/${dt.getFullYear()}`;
  }
  return "";
};

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  name: "app",
  components: {},
  data: function() {
    return {
      headerFields: [
        {
          name: "id",
          label: "Id"
        },
        {
          name: "title",
          label: "Title"
        },
        {
          name: "description",
          label: "Description"
        },
        {
          name: "created",
          label: "Created",
          format: formatDate
        },
        {
          name: "updated",
          label: "Updated",
          format: formatDate
        }
      ],
      datatableCss: {
        table: "table table-bordered table-hover table-striped table-center",
        th: "header-item",
        thWrapper: "th-wrapper",

        arrowsWrapper: "arrows-wrapper",
        arrowUp: "arrow up",
        arrowDown: "arrow down",
        footer: "footer"
      }
    };
  },
  methods: { 
    deleteMemory(id) {
      this.$store.dispatch('memories/deleteMemory', { id: id })
    } 
    
    }
};
</script>
<style scoped>
</style>>

