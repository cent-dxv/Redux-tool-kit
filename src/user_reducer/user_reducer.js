import { types_log_in } from "./user_action"

const initialstate = {

    name : '',
    age : 0,
    email :''

}

 const reducer_user = (state =initialstate , action)=>{
    switch(action.type){
   case types_log_in : {
    return {
        name : action.payload.name,
        email : action.payload.email,
        age : action.payload.age,
    }
   } 
   default : return state;
    }
}
export default reducer_user;