import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './profile.css'
import { getData } from "../reducer/api_call";
import {
  fetch_request,
  fetch_success,
  fetch_error,
  getPost
} from "../reducer/api_slice";

const User_profile = () => {
  const user_info = useSelector((state) => state.fetch);

  const dispatch = useDispatch();
  console.log("lodding " + user_info.loadding);
  if(user_info.user.lenght != 0  ) console.log("user data " + user_info.user.map((e)=>e.name));
  console.log("user error " + user_info.error);

  useEffect(() => {

    // console.log("fetching adta");
    // dispatch(fetch_request());
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log("data 2" + response);
    //      dispatch(fetch_success(response))
    //   })
    //   .catch((error) => {
    //     const errormsg = error.message;
    //      dispatch(fetch_error(errormsg))
    //   });

    // getData(dispatch)
    

    // new way 
dispatch(getPost());


  },[]);

  return (
    <>
      <h2> users</h2>
    </>
  );
};

export default User_profile;
