<template>
  <div>
    <WaHeader/>
    <!-- 一番最初にアクセスしてくるのでここから渡す。 -->
    <!-- ここにrouter-linkの先を表示する模様。 -->
    <router-view/>
    <WaFooter/>
  </div>
</template>
<script>
// headerとfooterをぶちこむ
import WaHeader from "@/components/fixed/WaHeader.vue";
import WaFooter from "@/components/fixed/WaFooter.vue";

export default {
  name: "root-point",
  components: {
    WaHeader,
    WaFooter
  }
};
</script>
<style lang="scss">
@import "./assets/scss/app.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
</style>
