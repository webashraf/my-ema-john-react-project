import React from 'react';
import Header from './comonents/Header/Header';
import Shop from './comonents/Shop/Shop';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='px-14 mt-8'>
      <Outlet />
      </div>
    </div>
  );
};

export default App;