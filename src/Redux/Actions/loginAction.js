export const loginAction = user =>{
    return function(dispatch){
    const url ='https://swapi.dev/api/people/1/'; 
    fetch(url)
      .then(response => response.json())  
      .then(function(data){
        if(user.username==data.name && user.password==data.birth_year)  
         {
            const data1 = {
            username : data.name,
            password : data.birth_year,login : true
            }
           dispatch({type:"LOGIN_ACTION", payload:data1})
         }
         else
         {
           dispatch({type:"LOGIN_ACTION", payload:{login : false}})  
         }
      })
      .catch(function(err){
        dispatch({type:"LOGIN_ACTION", payload:err})
      })
    } 
}
