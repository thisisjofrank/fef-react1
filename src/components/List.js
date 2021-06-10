import React from "react";

const List = ({ tasks }) => {

    const items = tasks.map((task, index) => (
        <li key={index}>
            {task.value}
        </li>
    ));


    return (
        <ul id="tasks">
            {items}
        </ul>
    )
}

export default List;