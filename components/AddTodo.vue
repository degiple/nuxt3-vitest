<script setup lang="ts">
const emit = defineEmits(['add-todo'])
const newTodo = ref<Todo>({ text: '' })
const addTodo = () => {
  if (newTodo.value.text.trim()) {
    emit('add-todo', { ...newTodo.value })
    newTodo.value.text = ''
  }
}
</script>

<template>
  <form class="add-todo-form" @submit.prevent="addTodo">
    <input v-model="newTodo.text" type="text" placeholder="新しいTodoを追加">
    <button type="submit">
      追加
    </button>
  </form>
</template>

<style scoped>
.add-todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
