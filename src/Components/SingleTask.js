import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleTask = ({ t }) => {
    const [linethrough, setLinethrough] = useState(false);
    const Complete = (id) => {
        const proceed = window.confirm("Are you complete the task? if YES Type Ok.")
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log('line');
                    setLinethrough(true);
                    toast.success('You complete this task');
                    // console.log(data);
                    window.location.reload();
                })
        }
    }
    const handleDelete = (id) => {

        const proceed = window.confirm("Are you sure??")
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`
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
    const handleComment = e => {
        e.preventDefault()
        const comment = {
            comment: e.target.comment.value
        }
        console.log(comment);
        fetch('http://localhost:5000/addcomment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Comment added successfully.')
                e.target.reset();
            })
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 style={{ textDecoration: linethrough ? 'line-through' : '' }} className="card-title">{t.heading}</h2>
                <p style={{ textDecoration: linethrough ? 'line-through' : '' }}>{t.description}</p>
                <form onSubmit={handleComment}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Comment:</span>
                        </label>
                        <textarea name='comment' type="text" placeholder="Enter Your comment" className="textarea textarea-primary" />
                    </div>
                    <input value='add' type="submit" placeholder="Enter Your FeedBack" className="btn w-full max-w-xs my-2" />
                </form>
                <div className="card-actions justify-end">
                    {t.isCompleted === false ? <button onClick={() => Complete(t._id)} className="btn bg-lemon-500">Complete</button> : <button disabled className="btn bg-lemon-500">Task Completed</button>}
                    <button onClick={() => handleDelete(t._id)} className="btn bg-red-700">Delete</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleTask;