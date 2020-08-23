import React from 'react';
import '../Search/Search.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { searchParamAction} from '../../Redux/Actions/searchAction';
class planetdetails extends React.Component
{
    componentDidMount()
    {
        const searchstring={searchparam : this.props.match.params.name};
        this.props.searchParamAction(searchstring);
    }
    render()
    {
        
       const searchListing = this.props.searchListing;
        return(                
                <div>
                <ul className="product"> 
                <li>
                {searchListing ? 
                 searchListing.results.map((element,i)=>{
                    return (
                    <div>        
                    <figure>
                    <img src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Camera-2-icon.png" width="300px" alt=""/>
                    </figure>
                    <h3>Name :{element.name}</h3>
                    <p><b>Population</b> : {element.population} </p>
                    <p><b>Rotation Period</b> : {element.rotation_period} </p>   
                    <p><b>Orbital Period</b> : {element.orbital_period} </p>  
                    <p><b>Climate</b> : {element.climate} </p>          
                    </div> 
                   )
                  })        
                  : "no results found"}      
                  </li>
                  </ul>
                </div> 
               )
    }
}
    
function mapStateToProps(state){
    // which data to pass    to react component
return {searchListing :state.search.search_listing }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({searchParamAction:searchParamAction}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (planetdetails); 