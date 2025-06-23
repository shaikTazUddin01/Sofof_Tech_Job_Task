import React from 'react';
import Navbar from './component/navbar/navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Navbar/>
    <div className='max-w-[1440px] mx-auto'>
    <Outlet/>
    </div>
    </div>
  );
};

export default App;