import React, { useState } from "react";
import { useSelector } from 'react-redux'

function Home() {
    const toDos = useSelector((state) => state);
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    );
}

export default Home;