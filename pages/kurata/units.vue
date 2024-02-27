<template>
  <div class="container">
    <h1 class="title">単位変換</h1>
    <div>
    <label for="celsius">摂氏</label>
    <input type="number" v-model.number="celsius" @input="ctoF" placeholder="摂氏温度"><span>℃</span>
  </div>
  <div>
    <label for="fahrenheit">華氏</label>
  <input type="number" v-model.number="fahrenheit" @input="ftoC" placeholder="華氏温度"><span>℉</span>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const celsius = ref(0);
const fahrenheit = ref(32);

const ctoF = () => {
  fahrenheit.value = Math.round(((celsius.value * 9) / 5 + 32) * 100) / 100
}

const ftoC = () => {
  celsius.value = Math.round((((fahrenheit.value - 32) * 5) / 9) * 100) / 100
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>