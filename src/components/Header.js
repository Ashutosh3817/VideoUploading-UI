import mylogo from '../assets/logo.jpg'
import React, { useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';


const Header = ()=>{
    
    console.log("hey")
    const onlineStatus = useOnlineStatus();
    const [btnNameReact,setBtnNameReact] = useState("login");

    return (
        <div className = "flex justify-between shadow-lg m-2 ">
            <div className="logo-container">
                <Link to={"/"}><img className='w-40 object-fill m-2 rounded-lg' src={mylogo}></img></Link>
                
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>Online Status: {onlineStatus?"✅":"🔴"}</li>
                    <li className ='px-4'>
                        Home
                    </li>
                    <li className ='px-4'>
                        About Us
                    </li>
                    <li className ='px-4'>
                        Contact Us
                    </li>
                    <Link to={"/signup"}>
                    <button className='px-4 bg-green-300 rounded-lg'
                        onClick={()=>{
                            btnNameReact=="login"?
                            setBtnNameReact("logout"):
                            setBtnNameReact("login")
                        }}>
                            {btnNameReact}
                    </button>
                    </Link>
                </ul>

            </div>
        </div>
    )
}
export default Header ;
