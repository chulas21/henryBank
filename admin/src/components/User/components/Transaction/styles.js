import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles( theme => ({
    cnt: {
        height: '100%'
    },
    cntCard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(1),
    },
    cntTitle: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: theme.spacing(1)
    },
    title:{
        fontWeight: '600'
    },
    txt: {
        fontSize: '200%',
        fontWeight: '500',

    },
    card: {
        background: 'linear-gradient(0deg, rgba(115,195,213,1) 0%, rgba(36,55,70,1) 100%)',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(1),
        borderRadius: theme.spacing(2),
        color: '#fff',
        padding: theme.spacing(1)
    },
    info:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export default useStyles;