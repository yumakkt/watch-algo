<template>
  <div class="home">
    <!-- <b-container fluid> -->
    <b-container class="bv-example-row">
      <!-- Content here -->
      <b-row class="text-center">
        <b-col cols="12" class="text-left"><h1>Algorithm  List</h1></b-col>
      </b-row>
      <b-row>
        <b-col v-for="algoConcept in algoIndex" v-bind:key="algoConcept.name" md="4">
          <h1>{{algoConcept.name}}</h1>
            <b-list-group>
              <b-list-group-item v-for="implement in algoConcept.implements" v-bind:key="implement.name" >
                <a v-bind:href="implement.linkName">{{implement.name}}:{{implement.linkName}}</a>
              </b-list-group-item>
            </b-list-group>
        </b-col>
      </b-row>
    </b-container>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      // 目次データのリスト達。ここまで行くとなんか別のフォルダに持ちたい気もするよね。
      algoConcepts: [
        {
          name: "Sort",
          linkName: "sort",
          implements: [
            { name: "merge sort", linkName: "merge" },
            { name: "quick sort", linkName: "quick" },
            { name: "bubble sort", linkName: "bubble" }
          ]
        },
        {
          name: "Search",
          linkName: "search",
          implements: [
            { name: "linear serch", linkName: "lenear" },
            { name: "quick sort", linkName: "quick" }
          ]
        },
        {
          name: "Data Structure",
          linkName: "ds",
          implements: [{ name: "hash", linkName: "hash" }]
        }
      ]
    };
  },
  computed: {
    algoIndex() {
      // 目次のループに必要な要素を返す。
      return this.algoConcepts.map(algoConcept => {
        algoConcept.implements = algoConcept.implements.map(implement => {
          implement.linkName = `${algoConcept.linkName}/${implement.linkName}`;
          return implement;
        });
        return algoConcept;
      });
    }
  }
};
</script>
