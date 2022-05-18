import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CreateTask = ({ addTask }) => {
    const [value, setValue] = useState("");
    // const [value1, setValue1] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value);

        setValue("");

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input "
                value={value}
                placeholder="Name"
                onChange={e => setValue(e.target.value)}
            />

        </form>

    );
};

export default CreateTask;