import { ADD_TODO, TOGGLE_TODO, TOGGLE_FILTER } from './actionTypes';
let nextTodoId = 0;

/* Todos ->  */
const addTodo = (content) => {
    return {
        type: ADD_TODO,
        payload: { id: nextTodoId++, content }
    };
}
/* Todos ->  */
const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: { id }
    }
}
/* Filter ->  */
const toggleFilter = (filter) => {
    return{
        type: TOGGLE_FILTER,
        payload: { filter }
    }
}

export {
    addTodo,
    toggleTodo,
    toggleFilter
}