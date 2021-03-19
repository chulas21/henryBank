import {makeStyles} from '@material-ui/styles'

const drawerWidth = '25%';

const useStyles = makeStyles(theme => ({ 
    root: {
        marginTop: theme.spacing(0)
    },
    drawer:{
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main,
    },
    cnt: {
        minHeight: '90vh',
        marginLeft: '25%',
    },
    profile: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        padding: theme.spacing(2),
        // backgroundColor: '#fff'
    },
    pic: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    info: {
        color: '#fff',
        
        marginTop: theme.spacing(4),
        // backgroundColor: '#000'

    },
    board: {
        minHeight: '90vh',
        
    },
    box:{
        minHeight: '45vh',
        // border: '1px solid black'
    }


}))

export default useStyles