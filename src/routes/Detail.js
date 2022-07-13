import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
    const id = useParams().id;
    const toDos = useSelector(state => state);
    const toDo = toDos.find(toDo => toDo.id === parseInt(id));

    return (
        <>
            <h1>text: {toDo?.text}</h1>
            <h2>id: {toDo?.id}</h2>
        </>
    );
}

export default Detail;