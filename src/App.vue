<template>
  <v-app>
    <!-- <v-app-bar app >
    
    
    </v-app-bar> -->
<v-tabs>
    <v-tab to="/">Home</v-tab>
    <v-tab to="/form">Forms</v-tab>
    
</v-tabs>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import ProductDetail from "./components/ProductDetail.vue"
export default {
  name: "App",
  components: {},
  data() {
    return {
      content: [],
    };
  },
};
</script>

<style scoped>

</style>
