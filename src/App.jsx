import React from 'react';
import Navbar from './component/navbar/navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
    {/* navbar */}
    <Navbar/>
    {/* outlet */}
    <Outlet/>
    </div>
  );
};

export default App;