import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {

          return (
                    <div className='bg-cyan-900 p-3 flex justify-between items-center'>
                            <><img src={logo} alt="" /></>
                            <ul className='flex gap-5 list-none'>
                              <li>Order</li>
                              <li>Manage rivew</li>
                              <li>Manage inventory</li>
                              <li>Login</li>
                              <li></li>
                            </ul>
                    </div>
          );
};

export default Header;