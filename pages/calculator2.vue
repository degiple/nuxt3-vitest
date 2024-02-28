<template>
  <div class="calculator">
    <h1>電卓アプリ</h1>
    <input type="number" v-model="number1" />
    <input type="number" v-model="number2" />
    <div>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
      <button @click="multiply">×</button>
      <button @click="divide">÷</button>
    </div>
    <div v-if="result !== null">結果: {{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const number1 = ref<number | null>(null);
const number2 = ref<number | null>(null);
const result = ref<number | null>(null);

const add = () => {
  if (number1.value !== null && number2.value !== null) {
    result.value = number1.value + number2.value;
  }
};

const subtract = () => {
  if (number1.value !== null && number2.value !== null) {
    result.value = number1.value - number2.value;
  }
};

const multiply = () => {
  if (number1.value !== null && number2.value !== null) {
    result.value = number1.value * number2.value;
  }
};

const divide = () => {
  if (number1.value !== null && number2.value !== null && number2.value !== 0) {
    result.value = number1.value / number2.value;
  } else if (number2.value === 0) {
    alert("0で割ることはできません");
  }
};
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.calculator input[type="number"] {
  width: 200px;
  padding: 8px;
}

.calculator button {
  width: 50px;
  height: 50px;
  margin: 5px;
}
</style>
