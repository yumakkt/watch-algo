<template>
  <div>
    <b-container>
      <b-row>
        <h2>挿入ソートの動きを確認してほしいんやで{{isReady}}</h2>
      </b-row>
       <ArrayDisplay :arrayToRun="algoParts.arrayToRun" :isReady="isReady"></ArrayDisplay>
    <b-row>
      <b-col sm="3"><label>最大数（{{elementLimit}}まで）</label></b-col>
      <b-col sm="3"><b-form-input :type="'number'" :min="2" :max="elementLimit" v-model="algoParts.elementMaxSize"></b-form-input></b-col>
      <b-col sm="3"><label>配列の長さ（{{arrayLimit}}まで）</label></b-col>
      <b-col sm="3"><b-form-input :type="'number'" :min="2" :max="arrayLimit" v-model="algoParts.arrayLength"></b-form-input></b-col>
    </b-row>
      <b-row>
        <b-col>
            <b-button block v-on:click="setArray" :variant="'info'"> 配列を作る。</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
            作成された配列: {{algoParts.arrayToRun}}
        </b-col>
      </b-row>
      <b-row>
        <b-col>
            <b-button block v-bind:disabled="!isReady" v-on:click="playInsert" :variant="'primary'"> アルゴリズムを実施する。</b-button>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>
<script>
import ArrayDisplay from "@/components/display/ArrayDisplay.vue";
export default {
  name: "insert",
  components: { ArrayDisplay },
  data() {
    return {
      algoParts: {
        elementMaxSize: 10,
        arrayLength: 3,
        arrayToRun: [1, 2, 3, 4]
      },
      arrayLimit: 12,
      elementLimit: 20
      // アルゴリズム実行準備可能フラグ
    };
  },
  computed: {
    // アルゴリズムが実施可能な状態になったらtrueになる関数。
    isReady: function() {
      // 配列が定義されていることのチェック
      if (!this.algoParts.arrayToRun) {
        return false;
      }
      // 配列の要素数が2つ以上あることのチェック
      if (this.algoParts.arrayToRun.length <= 1) {
        return false;
      }
      // 配列の要素が全て0ではないことのチェック
      if (this.algoParts.arrayToRun.filter(item => item > 1).length === 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    playInsert: function() {
      return "aaa";
    },
    // 配列長と要素の最大、最小を受け取ってランダムな配列を作成する。
    setArray: function() {
      this.algoParts.arrayLength = Math.min(
        this.algoParts.arrayLength,
        this.arrayLimit
      );
      this.algoParts.elementMaxSize = Math.min(
        this.algoParts.elementMaxSize,
        this.elementLimit
      );

      this.algoParts.arrayToRun = new Array(
        parseInt(this.algoParts.arrayLength)
      )
        .fill(0)
        .map(() =>
          Math.floor(Math.random() * this.algoParts.elementMaxSize + 1)
        );
    }
  }
};
</script>
