<template>
<v-app>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        

        <tr>
         
        <!-- id -->
            <th class="title" @click="changedata('id')">
            <v-icon small>import_export</v-icon>
            <span>byId</span>
            </th>
         
       
          <th class="text-left body-1 font-weight-bold">Title</th>
          
             
             <!-- price -->
            <th class="title" @click="changedata('price')">
              <v-icon>import_export</v-icon>
              <span>byPrice</span>
            </th>
           
          <th class="text-left body-1 font-weight-bold">Description</th>
          <th class="text-left body-1 font-weight-bold">Category</th>
          <!-- by rating -->
          <th class="title" @click="changedata('rating')">
              <v-icon>import_export</v-icon>
              <span>byRating</span>
            </th>

          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="details in productData" :key="details.id">
          <td>{{ details.id }}</td>
          <td>{{ details.title.slice(0, 30) }}</td>
          <td>{{ details.price }}$</td>
          <td>{{ details.description.slice(0, 50) }}</td>
          <td>{{ details.category }}</td>
          <td>{{ details.rating }}</td>
          <td>
            <!-- <router-link to="/edit/id" style="text-decoration: none"> -->
            <v-btn small class="success" @click="editRoute(details.id)"
              >Edit</v-btn
            >
            <!-- </router-link> -->
          </td>
          <td>
            <v-btn small class="red" @click="remove(details.id)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
      
    </template>
  </v-simple-table>
 <div class="d-flex">
   <div><v-combobox
          v-model="end"
          :items="items"
          outlined
          dense
          @change="pagination"
        ></v-combobox></div>
        <div v-for="index in button" :key="index">
          <v-btn @click="btnPerPage(index)">{{index}}</v-btn>
        </div>
        </div>
  </v-app>
</template>

<script>
import Axios from "axios";
import router from "@/router";

export default {
  name: "ProductDetail",
  data() {
    return {
      items:[5,10,15],
      product: [],
      change : 0,
      productData: [],
      end: 5,
      button:""
    };
  },
  methods: {
   async getProducts() {
      let  a=await Axios.get("http://localhost:5000/Products")
        this.product=a.data
        console.log(this.product)
        this.pagination()
    },
    remove(num) {
      Axios.delete(`http://localhost:5000/Products/${num}`);
      this.getProducts();
    },
    editRoute(id) {
      router.push(`/edit/${id}`);
    },

   changedata(num){
        if(this.change === 0){
              this.asc(num)
              this.change=1
          }else{
              this.desc(num)
              this.change=0
          } 
    },
 asc(prop) {
     this.productData.sort((a,b)=>{
         console.log(prop);
         return a[prop]>b[prop] ? 1:-1

     })

    },
     desc(prop) {
     this.productData.sort((a,b)=>{
         console.log(prop);
         return a[prop]>b[prop] ? -1:1

     })
  },
  pagination(){
    let a=this.product.length/this.end
    if(Number.isInteger(a)){
      this.button=a
    }else{
      this.button=Math.trunc(a)+1
    }
   this.productData = this.product.slice(0,this.end)
  console.log(this.productData)
 
  },

  btnPerPage(num){
    let b=this.end*num
    this.productData=this.product.slice(b-this.end,b)
  

  }
  
},

created() {
    this.getProducts();
  },
}
</script>

<style>
</style>
