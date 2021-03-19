import React, { useState, useEffect } from 'react'
import {Drawer, Toolbar, Avatar, Typography, Grid, MenuItem} from '@material-ui/core'
import useStyles from './styles'

import {Profile} from '../SvgIcons/IconsMaterial';

import {getAccounts} from '../../controllers/accountsControllers'

const CntDrawer = (props) => {
    const classes = useStyles()
    const [accounts, setAccounts]=useState([{
        status: false,
        acc: []
    }])

    useEffect(() => {
        if(Object.keys(props.user).length !== 0){
            getAccounts(props.user.id)
            .then((data) => {
                return setAccounts({
                    ...accounts,
                    status: true,
                    acc: data.data
                })
            })
        }else{
            return setAccounts({
                ...accounts,
                status: false,
                acc: []
            })
        }
    },[props])

    
    return (
        <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <Toolbar />
                <Grid container>
                    <Grid item container xs={12} className={classes.profile}>
                        <Avatar className={classes.pic}>
                            <Profile className={classes.pic}/>
                        </Avatar>
                        <Grid item className={classes.info}>
                            <Typography variant='subtitle1'>Name: {props.user ? `${props.user.name} ${props.user.lastName}` : 'loading...'}</Typography>
                            <Typography variant='subtitle1'>Email: {props.user ? props.user.email : 'loading...'}</Typography>
                            <Typography variant='subtitle1'>Accounts: </Typography>
                            <Typography variant='body2'>{accounts.status ? `${accounts.acc[0].currency} ${accounts.acc[0].balance}` : 'loading...'}</Typography>
                            <Typography variant='body2'>{accounts.status ? `${accounts.acc[1].currency} ${accounts.acc[1].balance}` : 'loading...'}</Typography>
                            <Typography variant='subtitle1'>Country: {props.user ? props.user.country : 'loading...'}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.info}>
                        <Grid item>
                            <Typography></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Drawer>
    )
}

export default CntDrawer
