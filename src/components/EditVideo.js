import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { LoadVideo } from "../utils/videoService";
import { BASE_URL } from "../utils/baseUrl";
import { toast } from "react-toastify";
import axios from "axios";

const EditVideo = () =>{
  //  const[videos,setVideos] = useState([]);
    
    const[user,setUser] = useState({
        id:" ",
        title: "", 
        tags:"",
        description:""
    });

    let {id} = useParams();
    console.log(id)
    let navigate = useNavigate();
    //we want to access the parameter of the current-route

    
    
    //for setting the previous data in new form 
    const fetchData = async () =>{
        try{
            
        const res = await axios.get(`http://localhost:8080/api/videos/${id}`);
        //const json = await res.json();
       // console.log(json)
       // console.log(res.data)
        setUser(res.data);
        console.log(videos)
       // setLoading(true);
        
        }
        catch(error){
            alert("Error in fetching the videos: "+ error.message);
            console.log(error)
        }
    }

    //we do the destructuring of user object containing title,tags and descriptions 
    const {title,tags,description} = user;

    const onInputChange=(e)=>{
        //spread operator since we are giving only name field
        //now new update will keep on adding
        setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        //backtick character =>(template character)
        await axios.put(BASE_URL+`update/${id}`,user).then((res)=>{
            toast.success("Video updated successfully ...");
            console.log(res.date);
            toast.success("Video updated successfully with information...")
            alert("video updated");
            //when we update the user then we navigate for seeing that video is updated or not
            console.log(id)
            navigate(`/view/${id}`);

        }).catch((error)=>{
            console.log(error);
            toast.error("Cann't update the video...");
            alert("Error occured while updating the user...");
        })
    }

    useEffect(()=>{
        LoadVideo(id).then((resp)=>
        console.log("response",resp.data));
    },[])
    useEffect(()=>{
        fetchData()
    },[]);

    return(
        <div className="min-h-screen flex items-center justify-center py-12 bg-gray-100">
            <div className="w-full max-w-4xl bg-white border rounded-lg p-8 shadow-lg">
                <div className="mb-6 text-center">
                    <Link className="bg-blue-500 p-2 text-white rounded hover:bg-blue-700" to="/">Click Here to Watch Videos</Link>
                </div>
                <div className="mb-6 shadow-sm border border-gray-300 rounded p-6 bg-gray-50">
                    <h3 className="text-3xl font-bold mb-6 text-center">Edit Your Video</h3>
                    <form onSubmit={onSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-medium">Video Title</label>
                            <input type="text" id="title" name="title" placeholder="Enter title here" value={title} onChange={(e)=>onInputChange(e)
                            }  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                       
                        <div className="mb-4">
                            <label htmlFor="tags" className="block text-gray-700 font-medium">Video Tags</label>
                            <input type="text" id="tags" name="tags" placeholder="Enter tags here" value={tags} onChange={(e)=>onInputChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-medium">Video Description</label>
                            <textarea id="description" name="description" placeholder="Enter description here" value={description} onChange={(e)=>onInputChange(e)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        {/* <div className="mb-6">
                            <label htmlFor="video" className="block text-gray-700 font-medium mb-2">Select Video to Post:</label>
                            <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                        </div>
                        <div className="mb-6 w-36 h-36 mx-auto">
                            <CircularProgressbar
                                strokeWidth={10}
                                value={singleProgress}
                                text={`${singleProgress}%`}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    strokeLinecap: 'butt',
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgba(62, 152, 199, ${singleProgress / 100})`,
                                    textColor: '#3e98c7',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#f0f0f0'
                                })}
                            />
                        </div> */}
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Edit Video
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditVideo;
  
 
