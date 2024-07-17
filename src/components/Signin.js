import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { UserContext } from '../utils/UserContext';

const SigninForm = ({setLoggedInUser}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    const{loggedInUser,setUserName,isLoggedIn, setIsUserLoggedIn} = useContext(UserContext);
//    const{isLoggedIn,setIsUserLoggedIn} = useContext(UserContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoggedIn) {
            alert('You are already logged in!');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/signin', formData);
           const {jwt,message,email} = response.data;
            console.log(jwt)
          //  console.log(username);
           const decodeToken = jwtDecode(jwt);
            // const user = {
            //     email:decodeToken.
            // }
            console.log(decodeToken)
            // setLoggedInUser("aSHUTOSH")
             // Set the user name and login status
             setUserName(`${decodeToken.firstName} ${decodeToken.lastName}`);
             setIsUserLoggedIn(true);
            console.log('Form submitted:', response.data);
          //  setIsUserLoggedIn(true);
            alert('You are logged in!');
            navigate('/');
        } 
        catch (error) {
            console.error('Error:', error);
        }
    
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      //  type="button"
                        type="submit" // Use onClick for button
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SigninForm;
