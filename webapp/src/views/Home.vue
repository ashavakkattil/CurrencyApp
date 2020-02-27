<template>
  <div>
    <v-card class="pa-3">
      <v-row>
        <v-col>
          <v-btn color="success" dark>Add Packages</v-btn>
        </v-col>
        <v-col cols="3">
          <v-select
            label="Select the currency"
            :items="items"
            outlined
            dense
            v-model="selectedCurrency"
          ></v-select>
        </v-col>
      </v-row>
    </v-card>
     <packageList/>
  </div>
</template>

<script>
import packageList from "../components/packageList";

export default {
  name: "Home",
  components: { packageList },
  data() {
    return {
      items: ["INR", "USD", "NG"],
      selectedCurrency: ""
    };
  }
};
</script>
<style scoped>
</style>>
  

