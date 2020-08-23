const searchReducer = (state={},action)=>{
    
    switch(action.type)
    {
        case 'SEARCH_LISTING' : 
            return {...state, search_listing : action.payload};
            
        default : 
            return state;
    }
}
export default searchReducer;
