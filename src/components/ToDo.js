import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

function ToDo({ id, text }) {
    const dispatch = useDispatch();
    const onBtnDelete = () => {
        dispatch(deleteToDo(id));
    }

    return (
        <li>
            <Link to={`/${id}`}>{text} </Link>
            <button onClick={onBtnDelete}>X</button>
        </li>
    );
}

export default ToDo;