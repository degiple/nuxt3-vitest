<script setup lang="ts">
const emit = defineEmits(['remove-todo'])
const props = defineProps<{ todo: Todo;}>()
const removeTodo = () => {
  emit('remove-todo')
}
</script>

<template>
  <li class="todo-item">
    {{ todo.text }}
    <button class="remove-btn" @click="removeTodo">
      削除
    </button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.remove-btn {
  cursor: pointer;
}
</style>
