<template>
  <form class="add-todo-form" @submit.prevent="addTodo">
    <input v-model="newTodo.text" type="text" placeholder="新しいTodoを追加" />
    <button type="submit">追加</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['add-todo']);

const newTodo = ref<Todo>({ text: '' });

const addTodo = () => {
  if (newTodo.value.text.trim()) {
    emit('add-todo', { ...newTodo.value });
    newTodo.value.text = '';
  }
};
</script>

<style scoped>
.add-todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
~/utils/todo