<template>
  <v-container>
      <v-form ref="form" @submit.prevent="submitForm" valid lazy-validation>


    <v-text-field
      v-model="formData.title"
      
      label="Title"
      required
    ></v-text-field>
    <v-text-field
      v-model.number="formData.price"
      
      label="Price"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.description"
      
      label="Description"
      required
    ></v-text-field>
    <v-text-field
      v-model="formData.category"
      
      label="Category"
      required
    ></v-text-field>
<v-text-field
      v-model.number="formData.rating"
      
      label="Rating"
      required
    ></v-text-field>
    

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn  color="success" class="mr-4" @click="submitForm" >
      Update
    </v-btn>

   
  </v-form>
  </v-container>
</template>

<script>
import Axios from "axios";
import router from "../router"
import Vue from "vue"

export default {
  name: "FormDetail",
  data(){
      return{
        //   form handling
          formData:{
                title: '',
                description: '',
                price: '',
                category: '',
                rating: ''
          }

      }
  },

  methods:{
     async submitForm(){
          try {
              await Axios.put(` http://localhost:5000/Products/${this.$route.params.id}`, this.formData )
                 console.log("data updated");
              router.push("/")
               Vue.$vToastify.success("Successfully edited value!");
            
          } catch (error) {
              console.log(error);
          }
          
      },
 
  },
 async mounted(){
      let {data} = await Axios.get(` http://localhost:5000/Products/${this.$route.params.id}`)
      this.formData=data;
  }
};
</script>

<style></style>
