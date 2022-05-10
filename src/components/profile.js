import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './profile.css'
import {change_color}from '../reducer/setting_slice'
const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.setting.value);
 

  const dispach = useDispatch()
  //old user 
  // const user = useSelector((state) => state.user);
 const [toggle, settoggle] = useState(true)
 console.log(  'color' + color.color)
 console.log(  'user' + user.name)

 return (
    <div>
    {/* {toggle && dispach(change_color('black'))} */}
  
    <label className="switch">
  <input type="checkbox" onChange={()=>{settoggle(!toggle)
  dispach(change_color( toggle ? 'black' : 'white') )
  }}/>
  <span className="slider"></span>
      </label>
      <h1>profile page </h1>
      <h2> name : {user.name}</h2>
      <p>age : {user.age}</p>
      <p>email : {user.email}</p>
    </div>
  );
};

export default Profile;
