<script setup lang="ts">
const emit = defineEmits(['remove-todo'])
const props = defineProps<{
  todos: Todo[];
}>()

const removeTodo = (index: number): void => {
  emit('remove-todo', index)
}
</script>

<template>
  <ul class="todo-list">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @remove-todo="removeTodo(index)" />
  </ul>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}
</style>
