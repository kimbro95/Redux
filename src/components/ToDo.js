import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

function ToDo({ id, text }) {
    const dispatch = useDispatch();
    const onBtnDelete = () => {
        dispatch(deleteToDo(id));
    }

    return (
        <li>{text} <button onClick={onBtnDelete}>X</button></li>
    );
}

export default ToDo;