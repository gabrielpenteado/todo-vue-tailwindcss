<template>
  <form
    @submit.prevent="submitForm"
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
  >
    <input
      placeholder="Add new todo ..."
      type="text"
      v-model="inputValue"
      class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />

    <button
      class="text-green-400 text-xs font-semibold focus:outline-none"
      type="submit"
    >
      ADICIONAR
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const inputValue = ref("");

const submitForm = async () => {
  //   console.log(inputValue.value);
  try {
    if (inputValue.value) {
      await store.dispatch("addTodo", {
        title: inputValue.value,
        completed: false,
      });
      inputValue.value = "";
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
