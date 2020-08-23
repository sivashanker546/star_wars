import React from 'react';
import './Search.css';
import SearchBar from './searchBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


import {searchAction} from '../../Redux/Actions/searchAction';
class Search extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        this.props.searchAction();
    }
    
    render()
    {
        const searchListing = this.props.searchListing;
        const logininfo = this.props.currentUser;
        return(
                <div>
                {logininfo.login!=true ? <div> <Redirect to='/' /></div> : null}
                <div className="login-info"> {logininfo.username ? 'Welcome '+logininfo.username : null} </div>
                <SearchBar/>
                <ul className="product">
                {searchListing ? 
                 searchListing.results.map((element,i)=>{
                 return (    
                  <li key={i}>
                    <figure>
                    <a href={`planetdetails/${element.name}`}><img src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Camera-2-icon.png" width="300px" alt=""/></a>
                    </figure>
                    <h3>{element.name}</h3>
                    <p><b>Population</b> : {element.population}</p>
                  </li> 
                  )
                  })        
                  : "no results found"}        
                </ul>
                </div>
               )
    }
}
function mapStateToProps(state){
    // which data to pass    to react component
return {currentUser :state.user.userData, searchListing:state.search.search_listing }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({searchAction:searchAction}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (Search);