<template>
  <div id="app">
    <b-table striped hover :items="items" />
    <DataTable
      :header-fields="headerFields"
      :data="data || []"
      :css="datatableCss"
      not-found-msg="Items not found"
      trackBy="firstName"
    >
      <input
        slot="actions"
        slot-scope="props"
        type="button"
        class="btn btn-info"
        value="Edit"
        @click="dtEditClick(props);"
      />
    </DataTable>

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
          <button class="btn btn-primary">Edit</button>
          </td>

          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { DataTable } from "v-datatable-light";

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

const initialData = [
  {
    id: "1",
    title: "Lucca",
    description: "Lin",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    id: "2",
    title: "Zahid",
    description: "Werner",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    id: "3",
    title: "Gabriel",
    description: "Griffiths",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    id: "4",
    title: "Talha",
    description: "Tucker",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    id: "5",
    title: "Aariz",
    description: "Piper",
    created: new Date().getTime(),
    updated: new Date().getTime()
  }
];

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  name: "app",
  components: {
    DataTable
  },
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
        },
        "__slot:actions"
      ],
      data: initialData.slice(0, 10),
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
    dtEditClick: props => alert("Click props:" + JSON.stringify(props)),
    dtDeleteClick: props => alert("Click props:" + JSON.stringify(props))
  }
};
</script>
<style scoped>
</style>>

