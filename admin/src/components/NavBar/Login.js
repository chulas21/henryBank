import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import useStyles from  './styles'

const Login = () => {
    const classes = useStyles()

    return (
        <div>
            <Grid container>
                <Grid item>
                    <NavLink to='/login' className={classes.btn}>
                        <Button color='inherit'>Login</Button>
                    </NavLink>
                    <NavLink to='/form' className={classes.btn}>
                        <Button color='inherit'>Register</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
