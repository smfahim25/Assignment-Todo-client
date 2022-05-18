import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import img from '../images/to-do-list-apps.png'
const Login = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate('/task')
    }
    const handleGoogle = () => {
        signInWithGoogle()
    }
    return (

        <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
            <img src={img} className='img m-5 mt-20' alt="" />
            <h2 className='text-2xl'>Log In</h2>
            <p className='text-xl mb-5'>Use To-Do App First you have to Login</p>

            <button onClick={handleGoogle} className="btn btn-active btn-white">Google Login</button>
        </div>

    );
};

export default Login;