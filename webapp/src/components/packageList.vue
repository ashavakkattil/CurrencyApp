<template>
  <v-container v-if="packages">
    <v-data-table :headers="headers" :items="packages" hide-default-footer>
      <template v-slot:item.price="{item}">
        <p v-if="currency == 'INR'">Rs. {{item.priceINR}}</p>
        <p v-else-if="currency == 'NGN'">₦ {{item.priceNGN}}</p>
        <p v-else>$ {{item.priceUSD}}</p>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  props: ["packages", "currency"],
  data() {
    return {
      editedIndex: 0,
      editedItem: null,
      packagePrice: null,
      rate: "",
      headers: [
        { text: "Package Name", value: "name" },
        { text: "Package Price", value: "price" },
        { text: "Actions", value: "action" }
      ]
    };
  },
  methods: {
    editItem(item) {
      this.editedItem = item;
      this.editedIndex = 1;
    }
  },
  mounted() {}
};
</script>