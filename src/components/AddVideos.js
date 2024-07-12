// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { UploadVideo, SaveVideoInfo } from "../utils/videoService";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css"; // Import styles

// const AddVideo = () => {
//     const [video, setVideo] = useState({
//         title: "",
//         tags: "",
//         description: ""
//     });
//     const [progress, setProgress] = useState(0);
//     const [videos, setVideos] = useState(null);
//     const [singleProgress, setSingleProgress] = useState(0);

//     // For showing how much percent of the video gets uploaded
//     const singleFileOptions = {
//         uploadProgress: (ProgressEvent) => {
//             const { loaded, total } = ProgressEvent;
//             const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
//             setSingleProgress(percentage);
//         }
//     }

//     // Field change handle function for video metadata
//     const fieldHandleChange = (event) => {
//         const { name, value } = event.target;
//         setVideo(prevVideo => ({
//             ...prevVideo,
//             [name]: value
//         }));
//     }

//     // File change handle function for video file
//     const handleFileChange = (event) => {
//         if (event.target.files && event.target.files.length > 0) {
//             console.log(event.target.files[0]);
//             setVideos(event.target.files[0]);
//         } else {
//             console.log('No file selected');
//         }
//     }

//     // Upload video function with title, tags, and descriptions
//    // Upload video function with title, tags, and descriptions
// const createVideo = (event) => {
//     event.preventDefault();
//     console.log(video);

//     if (video.title.trim() === "") {
//         toast.error("Video Title can't be empty");
//         return;
//     }
//     if (video.description.trim() === "") {
//         toast.error("Please enter some description under 50-500 words");
//         return;
//     }
//     // Submit call start here
//     SaveVideoInfo(video).then((data) => {
//         console.log(data);
//         // When we get the video from backend, then with the help of id we save the video
//         UploadVideo(videos, data.id, singleFileOptions).then((data) => {
//             setSingleProgress(0);
//             setVideos(null);
//             console.log(data);
//             alert("Video uploaded successfully!");
//         }).catch((error) => {
//             console.log(error);
//             toast.error("Failed to upload video file");
//         });
//         toast.success("Video uploaded successfully with all the information!");
//         setVideo({
//             title: "", description: "", tags: "",
//         });
//     }).catch((error) => {
//         console.log(error);
//         toast.error("Failed to save video info");
//     });
// }

//     return (
//         <div className="min-h-screen flex items-center justify-center py-6 bg-gray-500">
//             <div className="w-full max-w-4xl bg-white border rounded-lg p-6 mt-6 shadow-lg">
//                 <div className="mb-6 text-center">
//                     <a className="bg-blue-500 p-2 text-white rounded hover:bg-blue-700" href="/">Click Here to watch the videos</a>
//                 </div>
//                 <div className="mb-2 shadow-sm border border-gray-300 rounded p-4 mt-2">
//                     <div className="mb-6">
//                         <h3 className="text-2xl font-bold mb-4">Form for uploading the video</h3>
//                         <form onSubmit={createVideo}>
//                             <div className="mb-4">
//                                 <label htmlFor="title" className="block text-gray-700">Video Title</label>
//                                 <input type="text" id="title" name="title" placeholder="Enter title here" value={video.title} onChange={fieldHandleChange} className="w-full px-3 py-2 border rounded-lg" />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="tags" className="block text-gray-700">Video Tags</label>
//                                 <input type="text" id="tags" name="tags" placeholder="Enter tags here" value={video.tags} onChange={fieldHandleChange} className="w-full px-3 py-2 border rounded-lg" />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="description" className="block text-gray-700">Video Description</label>
//                                 <input type="text" id="description" name="description" placeholder="Enter description here" value={video.description} onChange={fieldHandleChange} className="w-full px-3 py-2 border rounded-lg" />
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="video">Select Video to post:</label>
//                                 <input type="file" onChange={handleFileChange} />
//                             </div>
//                             <div className="mb-4 w-36 h-36">
//                                 <CircularProgressbar
//                                     strokeWidth={10}
//                                     value={singleProgress}
//                                     text={`${singleProgress}%`}
//                                     styles={buildStyles({
//                                         rotation: 0.25,
//                                         strokeLinecap: 'butt',
//                                         textSize: '16px',
//                                         pathTransitionDuration: 0.5,
//                                         pathColor: `rgba(62, 152, 199, ${singleProgress / 100})`,
//                                         textColor: '#f88',
//                                         trailColor: '#d6d6d6',
//                                         backgroundColor: '#3e98c7'
//                                     })}
//                                 />
//                             </div>
//                             <div className="text-center">
//                                 <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//                                Upload Video
 //                               </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddVideo;

import React, { useState } from "react";
import { toast } from "react-toastify";
import { UploadVideo, SaveVideoInfo } from "../utils/videoService";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import styles

const AddVideo = () => {
    const [video, setVideo] = useState({
        title: "",
        tags: "",
        description: "",
        isPremium: false, // Default value
    });
    const [progress, setProgress] = useState(0);
    const [videos, setVideos] = useState(null);
    const [singleProgress, setSingleProgress] = useState(0);

    // For showing how much percent of the video gets uploaded
    const singleFileOptions = {
        onUploadProgress: (ProgressEvent) => {
            const { loaded, total } = ProgressEvent;
            const percentage = Math.floor((loaded * 100) / total);
            setSingleProgress(percentage);
        }
    }

    // Field change handle function for video metadata
    const fieldHandleChange = (event) => {
        const { name, value } = event.target;
        setVideo(prevVideo => ({
            ...prevVideo,
            [name]: value
        }));
    }

    // File change handle function for video file
    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            console.log(event.target.files[0]);
            setVideos(event.target.files[0]);
        } else {
            console.log('No file selected');
        }
    }

    // Upload video function with title, tags, and descriptions
    const createVideo = (event) => {
        event.preventDefault();
        console.log(video);

        if (video.title.trim() === "") {
            toast.error("Video Title can't be empty");
            return;
        }
        if (video.description.trim() === "") {
            toast.error("Please enter some description under 50-500 words");
            return;
        }
        // Submit call start here
        SaveVideoInfo(video).then((data) => {
            console.log(data);
            // When we get the video from backend, then with the help of id we save the video
            UploadVideo(videos, data.id, singleFileOptions).then((data) => {
                setSingleProgress(0);
                setVideos(null);
                console.log(data);
                alert("Video uploaded successfully!");
            }).catch((error) => {
                console.log(error);
                toast.error("Failed to upload video file");
            });
            toast.success("Video uploaded successfully with all the information!");
            setVideo({
                title: "", description: "", tags: "",
            });
        }).catch((error) => {
            console.log(error);
            toast.error("Failed to save video info");
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 bg-gray-100">
            <div className="w-full max-w-4xl bg-white border rounded-lg p-8 shadow-lg">
                <div className="mb-6 text-center">
                    <a className="bg-blue-500 p-2 text-white rounded hover:bg-blue-700" href="/">Click Here to Watch Videos</a>
                </div>
                <div className="mb-6 shadow-sm border border-gray-300 rounded p-6 bg-gray-50">
                    <h3 className="text-3xl font-bold mb-6 text-center">Upload Your Video</h3>
                    <form onSubmit={createVideo}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-medium">Video Title</label>
                             <input type="text" id="title" name="title" placeholder="Enter title here" value={video.title} onChange={fieldHandleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tags" className="block text-gray-700 font-medium">Video Tags</label>
                            <input type="text" id="tags" name="tags" placeholder="Enter tags here" value={video.tags} onChange={fieldHandleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-medium">Video Description</label>
                            <textarea id="description" name="description" placeholder="Enter description here" value={video.description} onChange={fieldHandleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="video" className="block text-gray-700 font-medium mb-2">Select Video to Post:</label>
                            <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                        </div>
                        <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="isPremium"
                  value="true"
                  checked={video.isPremium === "true"}
                  onChange={fieldHandleChange}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">True</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="isPremium"
                  value="false"
                  checked={video.isPremium === "false"}
                  onChange={fieldHandleChange}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">False</span>
              </label>
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
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Upload Video
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;
