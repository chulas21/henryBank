import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import useStyle from './styles'
import fontBlack from '../../images/FontWhite.svg'
import {NavLink} from 'react-router-dom'
import 
{AppBar,
Toolbar,
Button,
Avatar,
} from '@material-ui/core'

import {Profile} from '../SvgIcons/IconsMaterial';

import ProfileLogin from './ProfileLogin'
import Login from './Login'

const NavBar = () => {
    const classes = useStyle()
    const [auth, setAuth] = useState(false)

    const user = useSelector(state => state.user_reducer.user[0])

    useEffect(() => {
       if(user){
        setAuth(true)
       }else{
        setAuth(false)
       } 
    },[user])
    
    return (
        <div className={classes.root}> 
            <AppBar position="fixed" color='primary' className={classes.appBar}>
              <Toolbar>
                <NavLink to='/' className={classes.title}>
                  <img  src={fontBlack} />
                </NavLink>
                <div className={classes.space}></div>
                {auth ? <ProfileLogin user={user} /> : <Login />}
              </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
