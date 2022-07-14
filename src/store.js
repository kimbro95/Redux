import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = text => {
    return {
        type: ADD,
        text
    };
};

export const deleteToDo = id => {
    return {
        type: DELETE,
        id: parseInt(id)
    };
};

const localStoreageTodo = JSON.parse(localStorage.getItem("todo"));
const currentState = localStoreageTodo ? localStoreageTodo : [];

const reducer = (state = currentState, action) => {
    switch (action.type) {
        case ADD:
            const todoObj = { id: Date.now(), text: action.text }
            const addTodoData = [todoObj, ...state];
            localStorage.setItem("todo", JSON.stringify(addTodoData));
            return addTodoData;
        case DELETE:
            const deleteTodoData = state.filter((toDo) => toDo.id !== action.id);
            localStorage.setItem("todo", JSON.stringify(deleteTodoData));
            return deleteTodoData;
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;