// import React,{useState,useEffect} from "react";
// import { toast } from "react-toastify";
// import { UploadVideo, saveVideoInfo } from "../utils/videoService";

// const AddVideo = () =>{

//     // const[title,setTitle] = useState("");
//     // const[description,setDesciprion] = useState("");
//     // const[videoName,setVideoName] = useState("");
//     const[video,setVideo] = useState({
//         title:"",
//         tags:"",
//         description:""
//     });
//     const[progress,setProgress] = useState(0);
//     const[videos,setVideos] = useState(null);
//     const[loading,setLoading] = useState(true);
//     const[singleProgress,setSingleProgress] = useState(0);

//     //for showing the how much percent of video get uploads 
//     const singleFileOptions = {
//         uploadProgress: (ProgressEvent) =>{
//             const{loaded,total} = ProgressEvent;
//             const percentage = Math.floor(((loaded/1000)*100)/(total/1000));
//             setSingleProgress(percentage);
//         }
//     }

//     //field change handle function
//     const fieldHandleChange = (event)=>{
//         console.log(event.target.files[0]);
//         setVideos(event.target.files[0]);
//         //setState variable helps to trigger the reconciliation algorithm whenever there is change in the state
//     }

//     //upload video function with title,tags and descriptions 
//     const createVideo = (event)=>{
//         event.preventDefault();
//         console.log(video)

//         if(video.title.trim() === ""){
//             toast.error("Video Title cann't be empty: ");
//             return;
//         }
//         if(video.description.trim() === ""){
//             toast.error("Please enter some description under 50-500 words: ")
//         }
//         //submit call start here
//         saveVideoInfo((video).then((data)=>{
//             console.log(data)
//             //when we get the video from backend then with the help of id we save the video
//             UploadVideo(videos,data,id,singleFileOptions).then((data)=>{
//                 setLoading(true);
//                 alert("Wait Video Is Uploading !!!")
//                 console.log(data);
//                 setVideos(event.target.files[0])
//             }).catch((error)=>{
//                 console.log(error);
//             });
//             toast.success("video Uploaded SuccessFully With All The Information!!!");
//         }))
//     }


//     return(
//         <div>

//         </div>
//     )
// }
// export default AddVideo;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { SaveVideoInfo, UploadVideo } from '../utils/videoService';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AddVideo = () => {
    const [video, setVideo] = useState({
        title: "",
        tags: "",
        description: "",
    });
    const [progress, setProgress] = useState(0);
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [singleProgress, setSingleProgress] = useState(0);
    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    };

    //fields change handle function .
    const fieldChangeHandle = (event) => {
        setVideo({ ...video, [event.target.name]: event.target.value });
    };

    //handling file change event .
    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
        setVideos(event.target.files[0]);
    };

    //Upload videos function with title, description, tags.
    const createVideo = (event) => {
        event.preventDefault();
        console.log(video);
        if (video.title.trim() === "") {
            toast.error("please enter title");
            return;
        }
        if (video.description.trim() === "") {
            toast.error("Enter some description below 500 character");
            return;
        }
        //submit call starts here .
        SaveVideoInfo(video).then((data) => {
            console.log(data);
            UploadVideo(videos, data.id, singleFileOptions).then((data) => {
                setLoading(true);
                alert(" wait video is Uploading");
                console.log(data);
                setVideos(event.target.files[0]);
            }).catch((error) => {
                console.log(error);
            });
            toast.success("Video Uploaded with Information!!");
            console.log(video);
            setVideo({
                title: "", description: "", tags: "",
            });
        }).catch((error) => {
            alert("upload failed");
        });
    };

    return (
        <div className='wrapper'>
            <div className="container mx-auto p-4">
                <div className="mb-2 p-4">
                    <a href="/view" className="btn btn-primary btn-lg">Click to Watch Videos</a>
                </div>
                <div className="shadow-sm border border-gray-300 mt-2 rounded-lg">
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-4">Form for Uploading Video</h3>
                        <form onSubmit={createVideo}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700">Video Title</label>
                                <input type="text" id="title" placeholder="Enter title here" className="rounded-lg border border-gray-300 p-2 w-full" name="title" onChange={fieldChangeHandle} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="tags" className="block text-gray-700">Video Tags</label>
                                <input type="text" id="tags" placeholder="mention tags" className="rounded-lg border border-gray-300 p-2 w-full" name="tags" onChange={fieldChangeHandle} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700">Video Description</label>
                                <input type="text" id="description" placeholder="Enter description" className="rounded-lg border border-gray-300 p-2 w-full" name="description" onChange={fieldChangeHandle} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="video" className="block text-gray-700">Select video to post</label>
                                <input id="videoName" type="file" className="block w-full text-gray-700 border border-gray-300 rounded-lg p-2" onChange={handleFileChange} />
                            </div>
                            <div style={{ width: 150, height: 150 }}>
                                <CircularProgressbar
                                    strokeWidth={10}
                                    value={singleProgress}
                                    text={`${singleProgress}%`}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '6px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                        height: "100px"
                                    })}
                                />
                            </div>
                            <div className='text-center p-2'>
                                <button type="submit" className="btn btn-primary rounded-lg mb-2">Upload Video</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;
