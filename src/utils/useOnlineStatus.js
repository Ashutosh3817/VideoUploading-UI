import { useEffect, useState } from "react";

// in making the custom hook we have to focus on two thing first the input then output
const useOnlineStatus = () =>{
    
    const[onlineStatus,setOnlineStatus] = useState(true);

    //whenever if the component is getting re-render because of changing the online status varable then 
    //useEffect get render on every render

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
    })
    
    //we return here the boolean value
    return onlineStatus;
}

export default useOnlineStatus;
