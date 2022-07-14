import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteToDo } from "../store";

function Detail() {
    const id = useParams().id;
    const toDos = useSelector(state => state);
    const toDo = toDos.find(toDo => toDo.id === parseInt(id));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDeleteToDo = (e) => {
        e.preventDefault();
        dispatch(deleteToDo(id));
        navigate("/");
    }

    return (
        <>
            <h1>📝 {toDo?.text}</h1>
            <h2>⏰ {toDo?.id}</h2>
            <button onClick={handleDeleteToDo}>Delete</button>
        </>
    );
}

export default Detail;