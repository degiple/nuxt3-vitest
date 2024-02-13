<template>
  <div class="container">
    <h1 class="title">Todoリスト</h1>
    <TodoAdd @add-todo="TodoAdd" />
    <TodoList :todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const todos = ref<Todo[]>([]);
const TodoAdd = (todo: Todo) => {
  todos.value.push(todo);
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};
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
~/utils/todo