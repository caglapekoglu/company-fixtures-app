import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import * as authAction from '../Store/_redux/AuthStore/authActions';
import {useNavigate } from 'react-router-dom';
export default function Auth(){
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const authFunc=(e)=>{
        e.preventDefault();
        // dispatch(loginAction(authData))
        const data = {
            username: username,
            password: password
        }
        dispatch(authAction.userLogin(data)).then((res)=>{
            console.log(res);
            if(res){
                navigate("/")
            }
            else{
                alert("Hatalı giriş bilgisi")
            }
        });
    }
    return (
        <div className='w-full h-screen flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
            <div className='w-1/3'>
                <h1 className='font-semibold text-3xl py-5'>Giriş Yap</h1>
                <div className='flex flex-col span-y-2'>
                    <label className='font-semibold py-2'>TC Kimlik</label>
                    <input name="username" onChange={(e) => setUsername(e.target.value)} className='border-[1px] rounded-md px-3 py-2 border-input-b mb-5' placeholder='TC kimlik numaranız' />
                    <label className='font-semibold py-2'>Şifre</label>
                    <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" className='border-[1px] rounded-md px-3 py-2 border-input-b mb-5' placeholder='Şifreniz' />
                </div>
                <div className='flex justify-end my-4'>
                    <button onClick={(e)=>authFunc(e)} type='submit' className='bg-primary px-6 py-3 rounded-md text-white'>Giriş Yap</button>
                </div>
            </div>
        </div>
    )
}
