import axios from "axios";
import { notifyManager } from "@tanstack/react-query";

const API = axios.create({
    baseURL: "http://localhost:8081",
    // for testing 
    // 8080 => user
    // 8081 => mod
    
})
//===============================================================//
// COURSE QUERIES //
//===============================================================//
export const GetCourse = async({pageParam}: {pageParam:number}) => {
    const response = await API.get(`/api/mod?page=${pageParam}`)
    return response.data
}


export default API