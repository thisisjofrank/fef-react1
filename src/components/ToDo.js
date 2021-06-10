import React, { useState } from 'react';
import List from './List';
import Add from './Add';

const ToDo = () => {
    const [tasks, setTasks] = useState([
        { value: "a task", complete: false}
    ]);

    const add = (task) => {
        const updatedList = [...tasks, task];
        setTasks(updatedList);
    }
    return(
        <main>
            <Add add={add} />
            <List tasks={tasks} />
        </main>
    );
};

export default ToDo;