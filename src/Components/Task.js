import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';
import SingleTask from './SingleTask';
import image from '../images/to-do-list-apps.png';
import './Task.css';

const Task = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
        fetch('https://nameless-mesa-88008.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://nameless-mesa-88008.herokuapp.com/task', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.location.reload();
            })
    };
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    return (
        <div className='mt-5 bg-info'>
            <button onClick={logOut} className="btn btn-active btn-link text-black">Logout</button>
            <div className='mb-5'>
                <h1 className='text-center text-xl underline-offset-4 font-bold'>Todo App</h1>
            </div>
            <form className='grid grid-cols-1 gap-2 justify-items-center' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='input input-bordered  w-full max-w-xs' {...register("name")} />
                <input placeholder='description' className='input input-bordered  w-full max-w-xs' {...register("description")} />
                <input className='input input-bordered w-full btn btn-primary  max-w-xs' type="submit" />
            </form>
            <h2 className='text-xl   underline-offset-4 text-center font-bold mt-10'>All Task:{task.length}</h2>
            <div className='md:grid grid-cols-3 gap-y-5 my-5 justify-items-center'>
                {
                    task.map(t => <SingleTask
                        key={t._id}
                        t={t}
                    ></SingleTask>)
                }
            </div>


        </div>
    );
};

export default Task;