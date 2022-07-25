import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

const localStoreageTodo = JSON.parse(localStorage.getItem("todo"));
const currentState = localStoreageTodo ? localStoreageTodo : [];

// reducer
// const reducer = (state = currentState, action) => {
//     switch (action.type) {
//         case addToDo.type:
//             const todoObj = { id: Date.now(), text: action.payload }
//             const addTodoData = [todoObj, ...state];
//             localStorage.setItem("todo", JSON.stringify(addTodoData));
//             return addTodoData;
//         case deleteToDo.type:
//             const deleteTodoData = state.filter((toDo) => toDo.id !== action.payload);
//             localStorage.setItem("todo", JSON.stringify(deleteTodoData));
//             return deleteTodoData;
//         default:
//             return state;
//     }
// };

// createReducer
const reducer = createReducer(currentState, {
    [addToDo]: (state, action) => {
        state.push({ id: Date.now(), text: action.payload });
        localStorage.setItem("todo", JSON.stringify(state));
    },
    [deleteToDo]: (state, action) => {
        state = state.filter((toDo) => toDo.id !== action.payload);
        localStorage.setItem("todo", JSON.stringify(state));
        return state;
    }
});

const store = configureStore({ reducer });

export default store;