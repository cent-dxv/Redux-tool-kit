import {fetch_request , fetch_success ,fetch_error } from './api_slice'
import axios from "axios";

export const getData = async (dispatch)=>{

 dispatch(fetch_request());


//  try {
//     const res = await axios.post("https://jsonplaceholder.typicode.com/users");
//     dispatch(fetch_success(res.data));
//   } catch (err) {
//     dispatch(fetch_error(err.massage));
//   }

 fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then(
     (res)=>dispatch(fetch_success(res))
 ).catch((error)=> dispatch(fetch_error(error.massage)))

}