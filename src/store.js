import { configureStore, createSlice } from '@reduxjs/toolkit';

const localStoreageTodo = JSON.parse(localStorage.getItem("todo"));
const currentState = localStoreageTodo ? localStoreageTodo : [];

// createSlice
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: currentState,
    reducers: {
        add: (state, action) => {
            state.push({ id: Date.now(), text: action.payload });
            localStorage.setItem("todo", JSON.stringify(state));
        },
        remove: (state, action) => {
            state = state.filter((toDo) => toDo.id !== action.payload);
            localStorage.setItem("todo", JSON.stringify(state));
            return state;
        }
    }
});

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

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

// // createReducer
// const reducer = createReducer(currentState, {
//     [addToDo]: (state, action) => {
//         state.push({ id: Date.now(), text: action.payload });
//         localStorage.setItem("todo", JSON.stringify(state));
//     },
//     [deleteToDo]: (state, action) => {
//         state = state.filter((toDo) => toDo.id !== action.payload);
//         localStorage.setItem("todo", JSON.stringify(state));
//         return state;
//     }
// });

export const {
    add,
    remove
} = toDos.actions

export default configureStore({ reducer: toDos.reducer });