export const types_log_in = 'Log in'

export const action_Log_in = (user)=>{

    return{
        type : types_log_in,
        payload : user
    }
}