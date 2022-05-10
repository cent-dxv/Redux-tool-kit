import React from 'react'
 import { useDispatch } from 'react-redux'
import { action_Log_in } from '../user_reducer/user_action';
 import {login , logout} from '../reducer/user_slice'


const Login = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>{
            dispatch(
            login({
            name : 'pedro',
            age : 26
            ,email :'pedro@example.com'
        }))}}>Log in</button>

<button onClick={()=>{
            dispatch(
            logout())}}>Log out</button>
            <button onClick={()=>{
              dispatch(action_Log_in({name:'casc' , age : 30 , email : 'example@gmail.com'}))
            }}>old_login</button>

    </div>
    
  )
}

export default Login