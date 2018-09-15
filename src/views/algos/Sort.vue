<template>
  <div>
    <b-container>
      <b-row>
        <h1>{{$route.params.implement}}</h1>
      </b-row>
    </b-container>
    <Merge v-if="$route.params.implement=='merge'"/>
    <Insert v-if="$route.params.implement=='insert'"/>  
  </div>
</template>
<script>
// given url, conception class provide implements
// we use swith and return
import Merge from "@/components/sort/Merge.vue";
import Insert from "@/components/sort/Insert.vue";

export default {
  name: "sort",
  components: { Merge, Insert }
};
</script>
