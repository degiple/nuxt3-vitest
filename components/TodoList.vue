<template>
  <ul class="todo-list">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @remove-todo="removeTodo(index)" />
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  todos: Todo[];
}>();
const emit = defineEmits(['remove-todo']);
const removeTodo = (index: number) => {
  emit('remove-todo', index);
};
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}
</style>
