import React, { useState } from 'react'
import login from '../../images/signin.svg'
import logo from '../../images/Blanco.svg'
import { NavLink, Redirect } from 'react-router-dom'
import { Button, Grid, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'

import { postAuth,  } from '../../controllers/authControllers'
import {useDispatch} from 'react-redux'
import {logIn} from '../../stores/User/actions/user_actions'

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [info, setInfo] = useState({
        username: '',
        password: ''
    })

    const [auth, setAuth] = useState({
        status: '',
        redirect: false
    })

    const handlerText = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()

        postAuth(info)
            .then((res) => {
                if(res.data === 'login failed'){
                    setAuth({
                        ...auth,
                        status: res.data
                    })
                }else{
                    dispatch(logIn(res.data)) 
                    
                    setAuth({
                        ...auth,
                        status: '',
                        redirect: true
                    })     
                }
            })
    }

    return (
        <div className={classes.root}>
            <Toolbar />
            <Grid container className={classes.cnt}>
                <Grid item container xs={7} className={classes.box}>
                    <Grid item container className={classes.login}>
                        <Grid item xs={12} className={classes.logo}>
                            <img src={logo} className={classes.img} />
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item container className={classes.form}>
                                <Typography variant='h6' className={classes.textform}>Email:</Typography>
                                <input type='email' name='username' onChange={handlerText} autoComplete='off' className={classes.input} />
                                <Typography variant='h6' className={classes.textform}>Password:</Typography>
                                <input type='password' name='password' onChange={handlerText} className={classes.input} />
                                <Button variant='contained' color='primary' className={classes.btn} onClick={(e) => submit(e)}>Login</Button>
                                {auth.redirect ? <Redirect to='/user' />: <div></div>}
                                {auth.status && (<Typography variant='caption' color='error'>{auth.status}</Typography>)}
                                <NavLink to='/form' className={classes.cntbtn}>
                                    <Button variant='contained' color='secondary' className={classes.btn2}>Register</Button>
                                </NavLink>

                                <Typography variant='caption' color='textSecondary'>¿Did you forget the password?</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container xs={5} >
                    <img src={login} className={classes.img} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
