import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

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
            <h1>📝 To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    );
}

export default Home;