// import React, { useEffect,useState } from "react";
// import { BASE_URL } from "../utils/baseUrl";
// import axios from "axios";
// import {Link,useParams} from 'react-router-dom';
// import { LoadVideo } from "../utils/videoService";

// const View = () => {
    
//     const [user,setUser] = useState({
//         id:" ",
//         title:"",
//         description:"",
//         tags:"",
//         videoName:""
//     });
//     const {id} = useParams();

//     useEffect(()=> loadVideo,[]);

//     const loadVideo = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8080/api/videos/${id}}`);
//             console.log(response.data)
//             setUser(response.data);
//         } catch (error) {
//             console.error("Error loading video:", error);
//         }
//     }

//     return (
//        <div className="min-h-screen flex items-center justify-center py-6">
//         <div className="w-full max-w-lg bg-slate-300 border rounded-lg p-6 mt-6 shadow-lg">
//             <h2 className="text-center text-2xl font-bold mb-6"> Post Detail </h2>
//             <div className="mb-6">
//                 <div className="max-w-xs mb-6">
//                 <video className="w-full h-full object-cover rounded-md" controls>
//                                  <source src={`http://localhost:8080/api/videos/play/${id}`} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                 </video> 
//                 </div>
//                 <h2 className="text-2xl font-bold mb-2">{user.title}</h2>
//                 <p className="text-gray-700 mb-4">{user.description}</p>
//                 <div className="text-sm text-gray-500 mb-2"><b>Uploaded by: </b>{user.videoName}</div>
//                 <div className="text-sm text-gray-600">{user.tags}</div>

//             </div>
//         </div>
//        </div> 
//     )
// }
// export default View;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const View = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        id: "",
        title: "",
        description: "",
        tags: "",
        videoName: ""
    });

    useEffect(() => {
        loadVideo();
    }, []);

    const loadVideo = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/videos/${id}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error loading video:", error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-6">
            <div className="w-full max-w-lg bg-slate-300 border rounded-lg p-6 mt-6 shadow-lg">
                <h2 className="text-center text-2xl font-bold mb-6"> Post Detail </h2>
                <div className="mb-6">
                    <div className="max-w-xs mb-6">
                        <video className="w-full h-full object-cover rounded-md" controls>
                            <source src={`http://localhost:8080/api/videos/play/${id}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{user.title}</h2>
                    <p className="text-gray-700 mb-4">{user.description}</p>
                    <div className="text-sm text-gray-500 mb-2"><b>Uploaded by: </b>{user.videoName}</div>
                    <div className="text-sm text-gray-600">{user.tags}</div>
                </div>
            </div>
        </div>
    );
}

export default View;
