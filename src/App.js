import React from 'react';
import ReactDom from 'react-dom/client'
import { Outlet, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Shimmer from './components/Shimmer';
import ViewPost from './components/GetVideos';
import AddVideo from './components/AddVideos';
import View from './components/View';

const App = ()=>{
    console.log("In app.js")
    return(
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<ViewPost/>
            },
            {
                path:"/view/:id",
                element:<View/>
            },
            {
                path:"/add",
                element:<AddVideo/>
            }
        ]
    }
])
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)