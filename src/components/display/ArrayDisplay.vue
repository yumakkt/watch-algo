<template>
  <b-row align-h="center">
  <div>
  <svg :width="svgSize.width" :height="svgSize.height" >
   <g fill="#C20056" stroke="#C20056" >
    <rect v-for="bar in bars" :key="bar.id" :x="bar.x" :y="bar.y" :width="bar.width" :height="bar.height"/>
    <!-- -5は真心 -->
    <text v-for="bar in bars" :key="bar.id" :x="bar.x + bar.width/2 - 6" y=475>{{bar.value}}</text>
   </g>
  </svg>
  </div>
  </b-row>
</template>
<script>
export default {
  name: "arrray-display",
  props: {
    arrayToRun: Array,
    isReady: Boolean
  },
  data() {
    return {
      svgSize: {
        width: 800,
        height: 500,
        padding: 100
      }
    };
  },
  computed: {
    bars: function() {
      // もらったリストから棒グラフを作るよ
      return this.arrayToRun.map((item, index, self) => {
        const barHeight =
          (this.svgSize.height - this.svgSize.padding) *
          (item / Math.max(...self));
        // 幅サイズは間隔値
        const barWidth = this.svgSize.width / (self.length + 5);
        const barMargin = this.svgSize.width / self.length;
        return {
          // オフセット(棒の間隔/2 -棒の幅/2)) + 棒の間隔
          // 棒の間隔/2(棒の間隔の半分右にずらして棒の左辺が幅のn等分線間中央上に移動するようにする。)
          // 棒の幅/2 棒の幅の半分を左に戻すと中央に間隔の幅が移動する。
          x: barMargin / 2 - barWidth / 2 + barMargin * index,
          y: this.svgSize.height - barHeight - this.svgSize.padding / 2,
          width: barWidth,
          height: barHeight,
          value: item
        };
      });
    }
  },
  mounted() {
    // this.setBars(this.makeDataSet(this.arrayToRun));
  }
};
</script>
