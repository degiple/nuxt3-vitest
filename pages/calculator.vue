<script setup lang="ts">
import { ref } from 'vue';

const number1 = ref<number>(0);
const number2 = ref<number>(0);
const result = ref<number | null>(null);

const calculate = (operation: string) => {
  switch (operation) {
    case 'add':
      result.value = number1.value + number2.value;
      break;
    case 'subtract':
      result.value = number1.value - number2.value;
      break;
    case 'multiply':
      result.value = number1.value * number2.value;
      break;
    case 'divide':
      if (number2.value === 0) {
        alert('0で除算することはできません。');
        result.value = null;
      } else {
        result.value = number1.value / number2.value;
      }
      break;
  }
};
</script>

<template>
  <div class="calculator">
    <h1>電卓アプリ</h1>
    <input v-model.number="number1" type="number" placeholder="数値1" />
    <input v-model.number="number2" type="number" placeholder="数値2" />

    <button @click="calculate('add')">加算</button>
    <button @click="calculate('subtract')">減算</button>
    <button @click="calculate('multiply')">乗算</button>
    <button @click="calculate('divide')">除算</button>

    <div v-if="result !== null">
      <h2>結果: {{ result }}</h2>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

input[type="number"] {
  padding: 8px;
  font-size: 16px;
}

button {
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
}

h1, h2 {
  text-align: center;
}
</style>
