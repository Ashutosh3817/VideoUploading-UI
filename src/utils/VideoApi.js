import axios from "axios";
import { BASE_URL } from "./baseUrl"; 
//Get all videos

export const GET_ALL_VIDEOS = () =>{
    
  return axios.get(BASE_URL+ `allVideos`)  
  
};

