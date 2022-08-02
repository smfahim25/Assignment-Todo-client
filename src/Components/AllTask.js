import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const AllTask = () => {
    const [task, setTask] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return (
        <div>
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

export default AllTask;