
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
        <div className="min-h-screen flex items-center justify-center py-6 bg-gray-100">
        <div className="w-full max-w-2xl bg-white border rounded-lg p-8 shadow-lg">
            <h2 className="text-center text-3xl font-bold mb-6">Video Details</h2>
            <div className="mb-6">
                <div className="mb-6">
                    <video className="w-full h-80 object-cover rounded-md" controls>
                        <source src={`http://localhost:8080/api/videos/play/${id}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h2 className="text-2xl font-bold mb-2">{user.title}</h2>
                <p className="text-gray-700 mb-4">{user.description}</p>
                <div className="text-sm text-gray-500 mb-2"><b>Uploaded by:</b> {user.videoName}</div>
                <div className="text-sm text-gray-600"><b>Tags:</b> {user.tags}</div>
            </div>
        </div>
    </div>
    );
}

export default View;
