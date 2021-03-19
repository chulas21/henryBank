import React from 'react'
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Typography, Grid } from '@material-ui/core';
import useStyles from './styles'
import { Profile } from '../SvgIcons/IconsMaterial';

const ProfileLogin = (props) => {
    const classes = useStyles()

    
    return (
        <div>
            <Grid container>
                <Grid item className={classes.profile}>
                    <Typography>{props.user ? `${props.user.name} ${props.user.lastName}` : 'loading...'} </Typography>
                    <NavLink to='/user' className={classes.btn}>
                        <Avatar>
                            <Profile />
                        </Avatar>
                    </NavLink>   
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileLogin
