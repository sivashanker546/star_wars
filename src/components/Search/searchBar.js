import React from 'react';
import { searchParamAction} from '../../Redux/Actions/searchAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class searchBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    handleSearch = async event =>{
        event.preventDefault();
        const data={searchparam :event.target.search.value };
        this.props.dispatch(searchParamAction(data));
    }
    render()
    {
        return(
                <div>
                <form className="search-container" onSubmit={this.handleSearch}>
                <input type="text" title="search" id="search" onChange={this.doSearch} placeholder="Search Planets"/>
                <input type="image" name="submit" className="search" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
                </form>
                </div>
                )
    }
}

function mapStateToProps(state){
    // which data to pass    to react component
return {currentUser :state.user.userData, searchListing:state.search.search_listing }
}
export default connect(mapStateToProps) (searchBar);