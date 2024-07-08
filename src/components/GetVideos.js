import React,{useState,useEffect} from "react";
import { GET_ALL_VIDEOS } from "../utils/VideoApi";
import { BASE_URL } from "../utils/baseUrl";
import Shimmer from "./Shimmer";
import axios from "axios";

import { DeleteVideo } from "../utils/videoService";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
//with the help of useState we integrate data layer to the ui layer
//and with the help of useEffect we pass a callback function and fetch the data there

const ViewPost =()=>{

    //const[isExpanded,setIsExpanded] = useState(false);
    //we do the toggle and collapse of video description with the help of useState State Management Hooks 
    // const[getCollapseProps,getToggleProps] = useCollapse({isExpanded})
    const[videos,setVideos] = useState([]);
    //const[loading,setLoading] = useState(false);

    //making an api call with the help of axios api  
    //async await helps in making an api call and work is done only await promise get resolved
    const fetchData = async () =>{
        try{
            
        const res = await axios.get(`http://localhost:8080/api/videos/allVideos`);
        //const json = await res.json();
       // console.log(json)
        console.log(res.data)
        setVideos(res.data);
        console.log(videos)
       // setLoading(true);
        
        }
        catch(error){
            alert("Error in fetching the videos: "+ error.message);
            console.log(error)
        }
    }
    //we write empty dependency array because we want to the fetch the just once when the site is loaded not everytime when the 
    //change in state occur and reconcilliation algorithm get triggers

    useEffect(()=>{
        fetchData()
    },[]);

    //handling the delete of the video
    const handleDelete = (id) =>{
        console.log(id)
        if(window.confirm("Are u sure u want to delete this video: ")){
            DeleteVideo(id);
        }
    }

    return videos.length===0 ? (
        <Shimmer/>
    ) : (
        <div className="container mx-auto px-4">
           
           <Link to="/add">
           <button className="p-4 m-8 bg-green-300 rounded-lg">Back To Add Video</button>
           </Link>
           
           
            
            <h2 className="text-2xl font-bold mb-4">Loaded Videos:</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {videos.map(video => (
                    <div key={video.id} className="border rounded-md p-4 shadow-md">
                        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                        <div className="aspect-w-16 aspect-h-9 mb-2">
                             <video className="w-full h-full object-cover rounded-md" controls>
                                 <source src={`http://localhost:8080/api/videos/play/${video.id}`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> 
                        </div>
                        <div className="text-sm p-3">
                        <p >{video.description}</p>
                        </div>
                        <button
                            className="text-red-500 hover:underline focus:outline-none"
                            onClick={() => handleDelete(video.id)}
                        >
                            Delete
                        </button>
                        <Link to={"/view/"+video.id}>
                           <button className="p-4 m-8 bg-green-300 rounded-lg"> View </button>
                        </Link>
                        <Link to={"/edit/"+ video.id}>
                           <button className="p-4 m-8 bg-green-300 rounded-lg"> Edit </button>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}

 export default ViewPost;