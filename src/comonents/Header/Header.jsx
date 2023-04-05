import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

          return (
                    <div className='bg-cyan-900 p-3 px-5 flex justify-between items-center'>
                            <Link to={'/'}><img src={logo} alt="" /></Link>
                            <ul className='flex gap-5 list-none'>
                              <NavLink to={'/'} className={({isActive})=> isActive? "border-b-4 border-blue-300" : ""}>Shop</NavLink>
                              <NavLink to={'/order'} className={({isActive})=> isActive? "border-b-4 border-blue-300" : ""}>Order</NavLink>
                              <NavLink to={'/morder'} className={({isActive})=> isActive? "border-b-4 border-blue-300" : ""}>Manage rivew</NavLink>
                              <NavLink to={'/inventory'} className={({isActive})=> isActive? "border-b-4 border-blue-300" : ""}>Manage inventory</NavLink>
                              <NavLink to={'/login'} className={({isActive})=> isActive? "border-b-4 border-blue-300" : ""}>Login</NavLink>
                            </ul>
                    </div>
          );
};

export default Header;