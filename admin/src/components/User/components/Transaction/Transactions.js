import React, { useEffect, useState } from 'react'
import { Card, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import CardTransaction from './CardTransaction'

import { getAccounts } from '../../../../controllers/accountsControllers'
import { getTransfer } from '../../../../controllers/transferControllers'

const Transactions = (props) => {
    const classes = useStyles()
    const [trans, setTrans] = useState([{
        status: false,
        data: []
    }])

    useEffect(() => {
        if (Object.keys(props.user).length !== 0) {
            getAccounts(props.user.id)
                .then((acc) => {
                    if (acc) {
                        if (props.account === 'PESOS') {
                            return getTransfer(acc.data[0].cvu)
                        } else {
                            return getTransfer(acc.data[1].cvu)
                        }
                    } else {
                        return false
                    }
                })
                .then((data) => {
                    if (data) {
                        return setTrans({
                            status: true,
                            data: data.data.reverse()
                        })
                    } else {
                        return setTrans({
                            status: false,
                            data: []
                        })
                    }
                })
        }
    }, [props])

    return (
        <Grid container className={classes.cnt}>
            {trans.status ? 
            <Grid item xs={12} className={classes.cntTitle}>
                <Typography variant='h5' className={classes.title}>Transactions</Typography>
            </Grid> : 
            '' }
            <Grid item xs={12} className={classes.cntCard}>
                {trans.status ?
                    trans.data.map((item) => (
                        <CardTransaction trans={item} />
                    )) : <Typography className={classes.txt}>Seems that you don´t have any transaction</Typography>}
            </Grid>
        </Grid>
    )
}

export default Transactions
