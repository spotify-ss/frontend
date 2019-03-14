import React, {Component}from 'react'
import {connect} from 'react-redux'

import {authenticate, signup} from '../../actions'

import {AuthButton, LoginForm} from '../StyledComps'

import LoadingScreen from '../minorComps/LoadingScreen'

import Logo from '../minorComps/Logo'

class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            login: true
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearUsernamePassword = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    handleButtonClick = e => {
        if(e.target.name === 'login'){
            console.log('tried to login')
            this.props.authenticate(this.state.username, this.state.password)
        }else{
            console.log('tried to signup')
            this.props.signup(this.state.username, this.state.password)
        }
        this.clearUsernamePassword()   
    }
    handleSwitch = e => {
        this.setState({
            login: !this.state.login
        })
    }
    render(){
        return(
            <>
            <LoginForm onSubmit = {e => e.preventDefault()}>
                <Logo/>
                <input name = 'username' type='text' value = {this.state.username} placeholder = 'username' onChange = {this.onChange}/>
                <input name = 'password' type='password' value = {this.state.password} placeholder = 'password' onChange = {this.onChange}/>
                {this.state.login ? 
                    <AuthButton name = 'login' type = 'submit' value = 'login' onClick = {this.handleButtonClick}/>:
                    <AuthButton name = 'signup' type = 'submit' value = 'signup' onClick = {this.handleButtonClick}/> 
                }
                <p onClick = {this.handleSwitch}>{this.state.login ? 'SignUp' : 'Login'}</p>
            </LoginForm>
            {this.props.authenticating && <LoadingScreen/>}
            </>
        )
    }
}

const mstp = state => {
    return {
        authenticating: state.auth.authenticating
    }
}

export default connect(mstp, {authenticate, signup})(LoginPage)