<template>
  <main>
    <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  </main>
</template>

<script setup>
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
</script>
