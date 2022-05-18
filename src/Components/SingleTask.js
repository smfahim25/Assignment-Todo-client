import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleTask = ({ t }) => {
    const [linethrough, setLinethrough] = useState(false)
    const Complete = () => {
        console.log('line');
        setLinethrough(true)
        toast.success('you complete this task')
    }
    const handleDelete = (id) => {

        const proceed = window.confirm("are you sure??")
        if (proceed) {
            const url = `https://nameless-mesa-88008.herokuapp.com/task/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.location.reload();
                })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 style={{ textDecoration: linethrough ? 'line-through' : '' }} className="card-title">{t.name}</h2>
                <p style={{ textDecoration: linethrough ? 'line-through' : '' }}>{t.description}</p>
                <div className="card-actions justify-end">
                    <button onClick={Complete} className="btn bg-lemon-500">Complete</button>
                    <button onClick={() => handleDelete(t._id)} className="btn bg-red-700">Delete</button>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default SingleTask;