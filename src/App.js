import React, { useState } from 'react';
import ReactDom from 'react-dom/client'
import { Outlet, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Shimmer from './components/Shimmer';
import ViewPost from './components/GetVideos';
import AddVideo from './components/AddVideos';
import View from './components/View';
import EditVideo from './components/EditVideo';
import Footer from './components/Footer';
import './utils/fontAwesome';
import PremiumSubscription from './components/PremiumSubscription';
import Signup from './components/signup';
import SigninForm from './components/Signin';
import ProtectedRoute from './utils/ProtectedRoute';
import { UserContext } from './utils/UserContext';
const App = () => {
    const [userName, setUserName] = useState();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    console.log("In app.js");
    
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName, isLoggedIn: isUserLoggedIn, setIsUserLoggedIn }}>
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer />
           
        </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                   
                        <ViewPost />
                    
                )
            },
            {
                path: "/view/:id",
                element: <View />
            },
            {
                path: "/add",
                element: <AddVideo />
            },
            {
                path: "/edit/:id",
                element: <EditVideo />
            },
            {
                path: "/premvid",
                element: <PremiumSubscription />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/signin",
                element: <SigninForm />
            }
        ]
    }
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);