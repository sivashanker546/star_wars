import React from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';

import {connect} from 'react-redux';

import {loginAction} from '../../Redux/Actions/loginAction';
class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const username=event.target.username.value;
        const password = event.target.password.value;
        
        if(username=='' || password=='')
        {
            alert("Please enter username or password");
            return false;
        }
        const data = {
            username, password
        }
        this.props.dispatch(loginAction(data));
    }
    render()
    {
        const logincheck = this.props.currentUser.userData.login;
        return (
                <div className="log-form">
                {logincheck==true ? <div> <Redirect to='search' /></div> : null}
                    <h2>Login to your account</h2>
                    <form onSubmit={this.handleSubmit}>
                      <input type="text" title="username" placeholder="username" id="username"/>
                      <input type="password" title="username" placeholder="password" id="password"/>
                      <button type="submit" className="btn">Login</button>
                    </form>
                </div>
                )
    }
}
function mapStateToProps(state){
    // which data to pass    to react component
return {currentUser :state.user }
}
export default connect(mapStateToProps) (Login);