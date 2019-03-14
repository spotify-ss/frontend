import React, {Component} from 'react'
import {User} from 'react-feather'
import {NavLink} from 'react-router-dom'



import {Nav} from './StyledComps'

import Logo from '../components/minorComps/Logo'

class NavBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            isExpanded: false
        }
    }
    render(){
        return(
            <Nav>
                <NavLink to='/app'><Logo/></NavLink>
                <NavLink to='/app/profile'><User color = 'black' size = {30}/></NavLink>
            </Nav>
        )
    }
}

export default (NavBar)