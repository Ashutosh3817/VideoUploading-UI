import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { UserContext } from "../utils/UserContext";
import Shimmer from "./Shimmer";
import { DeleteVideo } from "../utils/videoService";

const ViewPost = () => {
    const [videos, setVideos] = useState([]);
    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    // Fetching videos from the backend
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/videos/allVideos`);
            setVideos(res.data);
        } catch (error) {
            alert("Error in fetching the videos: " + error.message);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Handling the deletion of a video
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this video?")) {
            DeleteVideo(id);
            navigate(0); // This will reload the current route
        }
    };

    return videos.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="container mx-auto px-4">
            <Link to="/add">
                <button className="p-4 m-8 bg-green-300 rounded-lg">Back To Add Video</button>
            </Link>

            <h2 className="text-2xl font-bold mb-4">Loaded Videos:</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {videos.map(video => (
                    <div key={video.id} className="border rounded-md p-4 shadow-md relative">
                        {video.isPremium && (
                            <span className="absolute top-2 right-2 bg-yellow-300 text-yellow-800 font-semibold px-2 py-1 rounded">
                                Premium
                            </span>
                        )}
                        <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                        <div className="aspect-w-16 aspect-h-9 mb-2 relative">
                            {video.isPremium && !isLoggedIn ? (
                                <div className="flex items-center justify-center object-cover w-full h-full bg-gray-100 rounded-md">
                                    <Link to="/premvid">
                                        <LockClosedIcon className="w-16 h-16 text-gray-500" />
                                    </Link>
                                    <p className="text-gray-500">This is a premium video. Please subscribe to watch.</p>
                                </div>
                            ) : (
                                <video className="w-full h-full object-cover rounded-md" controls>
                                    <source src={`http://localhost:8080/api/videos/play/${video.id}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                        <div className="text-sm p-3">
                            <p>{video.description}</p>
                        </div>
                        <button
                            className="text-red-500 hover:underline focus:outline-none"
                            onClick={() => handleDelete(video.id)}
                        >
                            Delete
                        </button>
                        <Link to={"/view/" + video.id}>
                            <button className="p-4 m-8 bg-green-300 rounded-lg">View</button>
                        </Link>
                        <Link to={"/edit/" + video.id}>
                            <button className="p-4 m-8 bg-green-300 rounded-lg">Edit</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewPost;
