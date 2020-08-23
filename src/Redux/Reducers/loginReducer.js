const INITIAL_STATE ={userData: {
    username : null,
    password : null,login : false
}}

const loginReducer = (state=INITIAL_STATE, action)=>
{
    switch(action.type)
    {
        case 'LOGIN_ACTION' : 
            return {
              ...state,
              userData : action.payload
            }
            
        default : 
            return state;
    }
}

export default loginReducer;
