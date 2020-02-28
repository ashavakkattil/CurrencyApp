<template>
  <div>
    <v-card class="pa-3">
      <v-row>
        <v-col>
          <v-btn color="success" dark @click="addPackage" class="ma-2">Add Packages</v-btn>
           <v-btn color="primary" dark @click="addCurrencyRate" class="ma-2">Add Currency Rate</v-btn>
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
     <packageList :packages="packages" :currency = "selectedCurrency" />
  </div>
</template>

<script>
import packageList from "../components/packageList";
import packageService from '../services/packageService'

export default {
  name: "Home",
  components: { packageList },
  data() {
    return {
      items: ["INR", "USD", "NGN"],
      selectedCurrency: "",
      packages: null,
      editedItem: null,
      
    };
  },
  methods: {
    addPackage(){
      this.$router.push('/addpackage')
    },
    addCurrencyRate(){
      this.$router.push({name: 'Add currency rate', params: {packages: this.editedItem} })
    },
    async getPackages(){
    await packageService.getPackages().then(response => {
      if(response.status == 200){
        this.packages = response.data.data;
        this.editedItem = Object.assign({}, response.data.data);
        
        
      }
    }).catch(error => {
      console.log(error.message)
    })
    
      
    },
    
  },
  mounted() {
    this.getPackages();
  
  },
};
</script>
<style scoped>
</style>>
  

