<template>
  <div class="bg-gray-300 rounded-sm">
    <div
      class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0"
    >
      <div class="flex items-center justify-center mr-2">
        <button
          :class="{
            ' h-4 w-4 text-gray-400': !isCompleted,
            ' h-4 w-4 text-green-600': isCompleted,
          }"
          @click="onCheck"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
      </div>

      <div class="w-full">
        <input
          type="text"
          v-model="title"
          @keyup.enter="updateTodo"
          class="bg-gray-300 placeholder-gray-500 ml-2 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3"
        />
      </div>

      <div class="ml-auto flex items-center justify-center">
        <button class="focus:outline-none" @click="onDelete(todo.id)">
          <svg
            class="ml-3 h-4 w-4 text-gray-500 hover:text-red-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 7L18.1327 19.1425C18.0579 
20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 
19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 
3 9 3.44772 9 4V7M4 7H20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps(["todo"]);
const title = ref(props.todo.title);
const isCompleted = ref(props.todo.completed);

const updateTodo = async () => {
  try {
    const payload = {
      id: props.todo.id,
      title: title.value,
      completed: isCompleted.value,
    };
    // console.log(payload);
    await store.dispatch("updateTodo", payload);
    await store.dispatch("getTodos");
    // console.log(store.state.todos);
  } catch (error) {
    console.log(error);
  }
};

const onCheck = () => {
  isCompleted.value = !isCompleted.value;
  updateTodo();
};

const onDelete = async (id) => {
  try {
    // console.log(id);
    await store.dispatch("deleteTodo", id);
  } catch (error) {
    console.log(error);
  }
};
</script>
