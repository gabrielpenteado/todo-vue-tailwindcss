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
        }
    },
    actions: {
        getTodos({ commit }) {
            return axios.get('todos').then(response => {
                commit('setTodos', response.data)
            })
        },
    }
})