import React, { useState } from 'react';

const Add = ({ add }) => {

    const [text, setText] = useState("");
    const buttonDisabled = text.trim() === "";

    const addItem = () => {
        add({ value: text, complete: false});
        setText("");
    }

    const checkKeyPress = (e) => {
        if (e.key === "Enter") {
            addItem(text);
        }
    }

    return(
        <label className="new" htmlFor="new">
            <input id="new"
                   className="new-input"
                   type="text"
                   placeholder="Add new item"
                   value={text}
                   onChange={e => setText(e.target.value)}
                   onKeyPress={e => checkKeyPress(e)}
            ></input>
            <button id="add"
                    className="new-button"
                    onClick={addItem}
                    disabled={buttonDisabled}
            >Add</button>
        </label>
    );
};

export default Add;