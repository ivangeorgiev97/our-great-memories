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
      >
       <input
        slot="actions-delete"
        slot-scope="props"
        type="button"
        class="btn btn-danger"
        value="Danger"
        @click="dtDeleteClick(props);"
      >
    </DataTable>
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
    firstName: "Lucca",
    lastName: "Lin",
    hometown: "Melbourne",
    dob: "13/02/1975",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    firstName: "Zahid",
    lastName: "Werner",
    hometown: "Sydney",
    dob: "18/09/1979",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    firstName: "Gabriel",
    lastName: "Griffiths",
    hometown: "Chicago",
    dob: "25/11/1984",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    firstName: "Talha",
    lastName: "Tucker",
    
    dob: "27/01/1999",
    created: new Date().getTime(),
    updated: new Date().getTime()
  },
  {
    firstName: "Aariz",
    lastName: "Piper",
    hometown: "Auckland",
    dob: "11/07/1964",
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
          name: "firstName",
          label: "First Name"
        },
        {
          name: "lastName",
          label: "Last Name"
        },
        {
          name: "hometown",
          label: "Hometown"
        },
        {
          name: "dob",
          label: "Data of Birght"
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
        "__slot:actions",        
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
    dtDeleteClick: props => alert("Click props:" + JSON.stringify(props)),

  }
};
</script>
<style scoped>

</style>>

