<script setup lang="ts">
import { ref } from 'vue'
import TodoList from '~/components/TodoList.vue'
import AddTodo from '~/components/AddTodo.vue'

const todos = ref<Todo[]>([])
const addTodo = (todo: Todo) => {
  todos.value.push(todo)
}

const removeTodo = (index: number) => {
  todos.value.splice(index, 1)
}
</script>

<template>
  <div class="container">
    <h1 class="title">
      Todoリスト
    </h1>
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

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
