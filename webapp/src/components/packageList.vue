<template>
  <v-container>
    <v-data-table :headers="headers" :items="packages" hide-default-footer>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      editedIndex: 0,
      editedItem: null,
      packages: [
        {
          name: "package 1",
          price: "1000"
        },
        {
          name: "package 2",
          price: "2000"
        },
        {
          name: "package 3",
          price: "1400"
        }
      ],
      headers: [
        { text: "Package Name", value: "name" },
        { text: "Package price", value: "price" },
        { text: "Actions", value: "action" }
      ]
    };
  },
  methods: {
    editItem(item) {
      this.editedItem = item;
      this.editedIndex = 1;
    }
  }
};
</script>