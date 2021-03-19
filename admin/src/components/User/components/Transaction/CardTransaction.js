import { Grid, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const CardTransaction = (props) => {

    const classes = useStyles()
    

    return (
        <Grid item container xs={12} key={props.trans.id} className={classes.card}>
            <Grid item xs={2} className={classes.info}>
                <Typography>Date:</Typography>
                <Typography>{props.trans.createdAt.slice(0,10)}</Typography>
            </Grid>
            <Grid item xs={2} className={classes.info}>
                <Typography>Currency:</Typography>
                <Typography>{props.trans.currency}</Typography>
            </Grid>
            <Grid item xs={2} className={classes.info}>
                <Typography>Type:</Typography>
                <Typography>{props.trans.type}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.info}>
                <Typography>Description:</Typography>
                <Typography>{props.trans.description}</Typography>
            </Grid>
            <Grid item xs={1} className={classes.info}>
                <Typography>Value:</Typography>
                <Typography>{props.trans.value}</Typography>
            </Grid>
        </Grid>
    )
}

export default CardTransaction
