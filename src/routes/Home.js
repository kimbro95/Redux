import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";

function Home() {
    const [text, setText] = useState("");
    const onChange = (event) => {
        setText(event.target.value);
    };
    const toDos = useSelector(state => state);

    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(text));
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    );
}

export default Home;