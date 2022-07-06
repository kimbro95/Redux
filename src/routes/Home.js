import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ state }) {
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
                {JSON.stringify(state)}
            </ul>
        </>
    );
}

function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps)(Home);