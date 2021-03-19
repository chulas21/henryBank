import React, {useEffect, useState} from 'react'
import useStyles from './styles'
import {useSelector} from 'react-redux'
import { Grid, Toolbar, Typography } from '@material-ui/core'
import CntDrawer from './CntDrawer'
import DevCard from './components/Card/Card'
import Transactions from './components/Transaction/Transactions'
import Statistics from './components/Statistics/Statistics'


const User = () => {
    const classes = useStyles()
    const [user,  setUser] = useState({})
    
    const state = useSelector(state => state.user_reducer.user[0])

    useEffect(() => {
        if(state){
            return setUser(state)
        }
    },[user])

    return (
        <div className={classes.root}>
            <Toolbar />
            <CntDrawer user={user}/>
            <main className={classes.cnt}>
                <Grid container>
                    <Grid item container xs={12} className={classes.board}>
                        <Grid item container xs={6} className={classes.box}><DevCard user={user} account={'USD'}/> </Grid>
                        <Grid item container xs={6} className={classes.box}> <Statistics user={user} account={'USD'} /></Grid>
                        <Grid item container xs={12} className={classes.box}><Transactions user={user} account={'USD'}/> </Grid>
                        
                    </Grid>
                </Grid>
            </main>
        </div>
    )
}

export default User
