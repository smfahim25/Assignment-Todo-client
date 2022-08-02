import { signOut } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import image from '../images/to-do-list-apps.png';
import './Task.css';

const Task = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const task = {
            heading: data.heading,
            description: data.description,
            isCompleted: false
        }
        console.log(task);
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
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
            <h1 className='btn'><Link to='alltask'>All Task</Link></h1>
            <div className='mb-5'>
                <h1 className='text-center text-xl underline-offset-4 font-bold'>Todo App</h1>
            </div>
            <form className='grid grid-cols-1 gap-2 justify-items-center' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Heading' className='input input-bordered  w-full max-w-xs' {...register("heading")} />
                <input placeholder='description' className='input input-bordered  w-full max-w-xs' {...register("description")} />
                <input className='input input-bordered w-full btn btn-primary  max-w-xs' type="submit" />
            </form>
        </div>
    );
};

export default Task;