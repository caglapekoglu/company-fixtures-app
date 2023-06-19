import React from 'react'
import user from '../assets/user.svg'
import exit from '../assets/exit.svg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import * as authAction from '../Store/_redux/AuthStore/authActions';

import { useSelector } from "react-redux";

function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const handleLogout = () => {
    dispatch(authAction.userLogout()).then(() => {
      navigate("/")
    });;
  };
  return (
    <div className='h-12 flex justify-between items-center px-10 my-[22px]'>
      <a href='/' className='text-xl font-semibold'>Company Items</a>
      {!token && <a href='/auth' type='submit' className='bg-primary px-4 py-2 rounded-md text-white flex text-[16px] gap-x-1'><img src={user} alt="" /> <span>Yönetici girişi</span></a>}
      {token && <div className='flex items-center gap-x-6'> <a href='/add-device' type='submit' className='bg-primary px-4 py-2 rounded-md text-white flex text-[16px] gap-x-1'><img src={user} alt="" /> <span>Cihaz Ekle</span></a><button onClick={handleLogout} type='submit' className='px-4 py-2 rounded-md text-select-b border-[1px] border-select-b  flex text-[16px] gap-x-1'><img src={exit} alt="" /> <span>Çıkış Yap</span></button></div>}
    </div>
  )
}

export default Navbar