export const searchAction = () =>{
     return function(dispatch){
    const url ='https://swapi.dev/api/planets'; 
    fetch(url)
      .then(response => response.json())  
      .then(function(data){
           dispatch({type:"SEARCH_LISTING", payload:data})
      })
      .catch(function(err){
        dispatch({type:"SEARCH_LISTING", payload:err})
      })
    } 
}

export const searchParamAction = (searchParam) =>{
    
     return function(dispatch){
    const url ='https://swapi.dev/api/planets?search='+searchParam.searchparam; 
    fetch(url)
      .then(response => response.json())  
      .then(function(data){
           dispatch({type:"SEARCH_LISTING", payload:data})
      })
      .catch(function(err){
        dispatch({type:"SEARCH_LISTING", payload:err})
      })
    } 
}


