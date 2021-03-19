import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles( theme => ({
    cnt: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chart:{
        width: '90%',
        height: '90%',
    },
    paper: {
        height: '100%',
        // backgroundColor: '#000'
    },
    data:{
        height: '100%',
        width: '90%'
    },
    bar:{
        width: '5%',
    },
    legend: {
        // display: 'flex',
        // justifyContent: 'center',
        // flexDirection: 'row',
        // margin: 'auto',
        // width: '100%',
        // backgroundColor: '#000'
    }
}))


export default useStyles;