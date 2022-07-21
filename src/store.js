import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

const localStoreageTodo = JSON.parse(localStorage.getItem("todo"));
const currentState = localStoreageTodo ? localStoreageTodo : [];

const reducer = (state = currentState, action) => {
    switch (action.type) {
        case addToDo.type:
            const todoObj = { id: Date.now(), text: action.payload }
            const addTodoData = [todoObj, ...state];
            localStorage.setItem("todo", JSON.stringify(addTodoData));
            return addTodoData;
        case deleteToDo.type:
            const deleteTodoData = state.filter((toDo) => toDo.id !== action.payload);
            localStorage.setItem("todo", JSON.stringify(deleteTodoData));
            return deleteTodoData;
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;