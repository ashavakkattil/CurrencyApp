<template>
  <div>
    <v-card>
      <v-card-title>Add Currency rates</v-card-title>
    </v-card>
    <v-container>
      <v-form ref="form">
        <v-row>
          <v-col cols="3">
            <v-menu offset-y v-model="menu" :close-on-content-click="false" min-width="290">
              <template v-slot:activator="{on}">
                <v-text-field
                  v-on="on"
                  label="Select the date"
                  v-model="formData.date"
                  outlined
                  dense
                ></v-text-field>
              </template>
              <v-date-picker v-model="formData.date" @input="menu = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="1">
            <v-text-field label="INR" outlined dense v-model="formData.INR"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="USD" outlined dense v-model="formData.USD"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="NGN" outlined dense v-model="formData.NGN"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="EUR" outlined dense v-model="formData.EUR"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="KWD" outlined dense v-model="formData.KWD"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="BHD" outlined dense v-model="formData.BHD"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="GBP" outlined dense v-model="formData.GBP"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="CHF" outlined dense v-model="formData.CHF"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1">
            <v-text-field label="CAD" outlined dense v-model="formData.CAD"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="JPY" outlined dense v-model="formData.JPY"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="AUD" outlined dense v-model="formData.AUD"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-text-field label="OMR" outlined dense v-model="formData.OMR"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="primary" class="ma-2" @click="addCurrency">Save</v-btn>
            <v-btn color="secondary" class="ma-2" @click="resetData">Reset</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import currencyService from "../services/currencyService";

export default {
  data() {
    return {
      selectedDate: null,
      menu: false,
      formData: [{ name: "" }],
      rate: ""
    };
  },
  mounted() {
    this.formData = Object.assign({}, this.$router.params);
  },
  methods: {
    resetData() {
      this.$refs.form.reset();
    },

    async addCurrency() {
      await currencyService
        .addCurrencyRate(this.formData)
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
};
</script>