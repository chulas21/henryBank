import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import logo from '../../../../images/FontWhite.svg'
import dots from '../../../../images/dots.svg'

import {getAccounts} from '../../../../controllers/accountsControllers'

const DevCard = (props) => {
    const classes = useStyles()
    const [state, setStatus] = useState([{
        status: false,
        acc: []
    }])


    useEffect(() => {
        if(Object.keys(props.user).length !== 0){
            getAccounts(props.user.id)
            .then((data) => {
                if(props.account === 'PESOS'){
                    return setStatus({
                        status: true,
                        acc: data.data[0]
                    })
                }else{
                    return setStatus({
                        status: true,
                        acc: data.data[1]
                    })
                }
            })
        }else{
            return setStatus({
                status: false,
                acc: []
            })
        }
    },[props])

    return (
        <Grid item container className={classes.cnt}>
            <Grid item container className={classes.card}>
                <Grid item xs={12}>
                    <img src={logo} className={classes.logo} />
                </Grid>
                <Grid item xs={12} className={classes.cvu}>
                    <Typography className={classes.txt}>CVU:</Typography>
                    <Typography className={classes.txt}>{state.status ? `0000${state.acc.cvu}` : 'loading...'}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src={dots} className={classes.dots} />
                    <Typography variant='subtitle1' className={classes.name}>{props.user ? `${props.user.name} ${props.user.lastName}` : 'loading...'} </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DevCard
