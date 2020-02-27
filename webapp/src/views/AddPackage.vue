<template>
  <div>
    <v-card dense class="pa-2">
      <v-card-title>Add Packages</v-card-title>
    </v-card>
    <v-container>
      <v-form ref="package_details">
        <v-row>
          <v-col cols="4">
            <v-text-field
              dense
              outlined
              placeholder="Enter Package Name"
              clearable
              v-model="name"
              :rules="rules"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              placeholder="Enter Package price"
              dense
              outlined
              clearable
              v-model="price"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              :items="supplier_currencies"
              outlined
              dense
              label="Select supplier currency"
              v-model="selectedCurrency"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="primary" outlined class="ma-2" @click="savePackage">Save</v-btn>
            <v-btn color="secondary" outlined class="ma-2" @click="resetForm">Reset</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import packageService from '../services/packageService'

export default {
  data() {
    return {
      supplier_currencies: [
        "INR",
        "USD",
        "NGN",
        "EUR",
        "KWD",
        "BHD",
        "GBP",
        "CHF",
        "CAD",
        "JPY",
        "AUD",
        "CAD",
        "OMR"
      ],
      name: null,
      price: null,
      selectedCurrency: null,
      rules: [v => !!v || "Required"]
    };
  },
  methods: {
    async savePackage() {
        if(this.$refs.package_details.validate()){
            //Save the package to database
            await packageService.addPackage({
              name: this.name,
              price: this.price,
              supplier_currency: this.selectedCurrency
            }).then(response => {
              console.log(response.data.message)
            }).catch(error => {
              console.log(error.message)
            })
        }
    },
    resetForm() {
      this.$refs.package_details.reset();
    }
  }
};
</script>