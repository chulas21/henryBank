import React, {useState, useEffect} from 'react'
import {Paper, Grid, Typography} from '@material-ui/core'
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    Legend,
    
}from '@devexpress/dx-react-chart-material-ui';
import {withStyles} from '@material-ui/core/styles'
import {Stack, Animation, ArgumentScale} from '@devexpress/dx-react-chart';
import useStyles from './styles'

import {getStatistics} from '../../../../controllers/statisticsControllers'
import {getAccounts} from '../../../../controllers/accountsControllers'

const Statistics = (props) => {
    const classes = useStyles()
    // const [data, setData] = useState({
    //     state: false,
    //     data: []
    // })

    const data = [
        {
            "type": '1',
            "Expenses": 1587
        },
        {
            "type": '2',
            "Expenses": 231
        },
        {
            "type": '3',
            "Expenses": 687
        },
        {
            "type": '4',
            "Expenses": 841
        },
        {
            "type": '5',
            "Expenses": 489
        },
        {
            "type": '6',
            "Expenses": 354
        },
        {
            "type": '1',
            "Income": 1000
        },
        {
            "type": '2',
            "Income": 265
        },
        {
            "type": '3',
            "Income": 654
        },
        {
            "type": '4',
            "Income": 234
        },
        {
            "type": '5',
            "Income": 1246
        },
        {
            "type": '6',
            "Income": 156
        }
    ]



    // useEffect(() => {
    //     if(Object.keys(props.user).length !== 0) {
    //         getAccounts(props.user.id)
    //             .then((acc) => {
    //                 if (acc) {
    //                     if (props.account === 'PESOS') {
    //                         return getStatistics(parseInt(acc.data[0].cvu))
    //                     } else {
    //                         return getStatistics(parseInt(acc.data[1].cvu))
    //                     }
    //                 } else {
    //                     return false
    //                 }
    //             })
    //             .then((data) => {
    //                 if (data) {
    //                     return setData({
    //                         status: true,
    //                         data: data.data
    //                     })
    //                 } else {
    //                     return setData({
    //                         status: false,
    //                         data: []
    //                     })
    //                 }
    //             })
    //     }
    // },[props])



    return (

        <Grid container className={classes.cnt}>
            <Grid item className={classes.chart}>
                <Paper className={classes.paper}>
                    <Chart
                        data={data}
                        height={parseInt('250%')}
                        className={classes.data}
                    >
                        <ArgumentAxis />
                        <ValueAxis />
                        <ArgumentScale bandWith={parseInt('100%')} /> 

                        <BarSeries
                            name="Income"
                            valueField="Income"
                            argumentField="type"
                            className={classes.bar}
                            color = '#368EAF'
                        />

                        <BarSeries
                            name="Expenses"
                            valueField="Expenses"
                            argumentField="type"
                            className={classes.bar}
                            color = '#243746'
                        />

                        {/* {data.status ?
                        <BarSeries
                            name='Income'
                            valueField='Income'
                            argumentField='type'
                            className={classes.bar}
                            color = '#368EAF'
                        /> :
                        '' }

                        {data.status ?
                        <BarSeries
                            name='Expenses'
                            valueField='Expenses'
                            argumentField='type'
                            className={classes.bar}
                            color = '#243746'
                        /> :
                        '' } */}

                        <Title text='Incomes & Expenses' />
                        {/* <Legend position='right' /> */}
                        <Animation />
                        <Stack />
                    </Chart>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Statistics