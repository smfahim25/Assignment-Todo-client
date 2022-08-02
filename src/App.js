
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTask from './Components/AllTask';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
import Task from './Components/Task';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='task' element={<RequireAuth><Task></Task></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='task/alltask' element={<AllTask></AllTask>}></Route>
      </Routes>

    </div>
  );
}

export default App;
