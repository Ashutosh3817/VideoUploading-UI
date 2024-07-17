import mylogo from '../assets/logo.jpg'
import React, { useContext, useEffect, useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import 'tailwindcss/tailwind.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/UserContext';


const Header = ()=>{
    
    console.log("hey")
    const navigate = useNavigate();
    const onlineStatus = useOnlineStatus();
    const [btnNameReact,setBtnNameReact] = useState("login");

    const{loggedInUser,setUserName,isLoggedIn, setIsUserLoggedIn} = useContext(UserContext);
    useEffect(()=>{
        if(isLoggedIn) setBtnNameReact("signout");
        else setBtnNameReact("sign/in")
    },[isLoggedIn])

    const handleSignOut = () =>{
        setIsUserLoggedIn(false);
        setBtnNameReact("signup/in");
        alert("You have signed out...")
        navigate("/")
    }

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
                    {/* <Link to={"/signup"}>
                    <button className='px-4 bg-green-300 rounded-lg'
                        onClick={()=>{
                            btnNameReact=="signup/in"?
                            setBtnNameReact("signout"):
                            setBtnNameReact("signup/in")
                        }}>
                            {btnNameReact}
                    </button> */}
                    {/* </Link> */}
                    {isLoggedIn?(
                        <>
                        <li className='px-4'>Welcome,{loggedInUser}</li>
                        <button className='px-4 bg-red-300 rounded-lg' onClick={handleSignOut}>{btnNameReact}</button>
                        </>
                    ) :(
                        <Link to={"/signup"}>
                            <button className='px-4 bg-green-300 rounded-lg'>{btnNameReact}</button>
                        </Link>
                    )}
                    <li className='px-4 font-bold'>{loggedInUser}</li>
                </ul>

            </div>
        </div>
    )
}
export default Header ;
