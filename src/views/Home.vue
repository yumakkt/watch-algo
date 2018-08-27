<template>
  <div class="home">
    
    <b-container fluid>
      <!-- Content here -->
    <b-row class="text-center">
        <b-col cols="12" class="bg-primary text-left"><h1>Algorithm  List</h1></b-col>
    </b-row>
    <b-row class="text-center">
        <b-col class="bg-info">1 of 3</b-col>
        <b-col >2 of 3</b-col>
        <b-col class="bg-info">3 of 3</b-col>
    </b-row>
    <b-row class="text-center">
        <b-col class="bg-info">1 of 3</b-col>
        <b-col >2 of 3</b-col>
        <b-col class="bg-info">3 of 3</b-col>
    </b-row>
    </b-container>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
