import axios from "axios";
import { BASE_URL } from "./baseUrl";

//create the video information
export const SaveVideoInfo=(data)=>{
    return axios.post(BASE_URL+`save`,data).then((response)=>response.data);
}

//upload video file
export const UploadVideo = (video,id,singleFileOptions)=>{
    let formData = new FormData();
    formData.append("video",video);

    return axios.post(BASE_URL + `upload/${id}`,formData,singleFileOptions,{
        Headers :{
            "Content-Type":"multipart/form-data",
        }
    }).then((response)=>response.data);
}

//Get All The Videos
export const GetAllVideos = () =>{
    return axios.get(BASE_URL+`/allVideos`)
}

//Get the video file with the help of id :=>
export const LoadVideo = (id) =>{
    return axios.get(BASE_URL+`${id}`);
}

//Delete the video as well as their information form database
export const DeleteVideo = (id) =>{
    axios.delete(BASE_URL+`${id}`).then((res)=>res.data).catch((error)=>console.log(error));
}
