import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        todos: []
    },

    getters: {

    },
    mutations: {
        setTodos(state, payload) {
            state.todos = payload;
        },
        setTodo(state, payload) {
            state.todos.push(payload)
        },
        setModifiedTodo(state, payload) {
            const todo = state.todos.find(todo => todo.id == payload.id);
            if (todo) {
                todo.title = payload.title
                todo.completed = payload.completed
            }
        }
    },
    actions: {
        getTodos({ commit }) {
            return axios.get('todos').then(response => {
                commit('setTodos', response.data)
            })
        },
        addTodo({ commit }, payload) {
            axios.post('todos', payload).then(response => commit('setTodo', response.data))
        },
        updateTodo({ commit }, { id, title, completed }) {
            axios.put(`todos/${id}`, {
                title, completed
            }).then(response => commit('setModifiedTodo', response.data))
        }
    }
})
