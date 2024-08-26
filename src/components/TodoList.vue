<template>
  <div v-if="loading">
    <TodoSpinner />
  </div>
  <div v-else>
    <div v-if="todos.length" class="space-y-2">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </div>
    <div v-else>
      <TodoEmpty />
    </div>
  </div>
</template>

<script setup>
import TodoItem from "@/components/TodoItem.vue";
import TodoEmpty from "@/components/TodoEmpty.vue";
import TodoSpinner from "./TodoSpinner.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const loading = ref(true);
const store = useStore();

store.dispatch("getTodos").finally((loading.value = false));

const todos = computed(() => store.state.todos);
</script>
