<template>
  <v-container>
      <v-form ref="form" @submit.prevent="submitForm" valid lazy-validation>
    <!-- <v-text-field
      v-model="id"
      
      label="Id"
      required
    ></v-text-field> -->

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
      Create
    </v-btn>

   
   <!-- <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>  -->
  </v-form>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  name: "CreateProduct",
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
              await Axios.post(" http://localhost:5000/Products", this.formData)
              console.log("data is sent");
          } catch (error) {
              console.log(error);
          }
          
      },
  reset() {
        // this.$refs.form.reset()
            this.id ='',
          this.title= '',
          this.description= '',
          this.price= '',
          this.category= '',
          this.rating= ''
      }
  }
};
</script>

<style></style>
