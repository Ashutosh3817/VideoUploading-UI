import React from 'react';
import ReactDom from 'react-dom/client'
import { Route } from "react-router-dom";
import Header from "./components/Header";

const App = ()=>{
    console.log("In app.js")
    return(
        <div className="App">
            <Header/>
        </div>
    )
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)