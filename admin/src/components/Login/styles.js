import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(0)
    },
    cnt: {
       width: '100%',
       minHeight: '90vh',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
    },
    box: {
        height: '80vh',
        display: 'flex',
        justifyContent:'flex-end'
    },
    login: {
        display: 'flex',
        justifyContent: 'center',
        
        width: '50%',
        height: '100%',
        background:  'linear-gradient(0deg, rgba(115,195,213,1) 0%, rgba(36,55,70,1) 100%)',
        boxShadow: theme.shadows[8],
        borderRadius: theme.spacing(3),
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(1)
        // backgroundColor: theme.palette.primary.main
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left'
    },
    textform: {
        color: '#fff',
        margin: theme.spacing(1)
    },
    input: {
        width: '80%',
        borderRadius: theme.spacing(1)
    },
    btn: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2),
        width: '50%',
        fontSize: '100%'
    },
    cntbtn:{
        margin: theme.spacing(1),
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center'
    },
    btn2: {
        width: '40%',
        fontSize: '80%',
    },
    img: {
        width: '80%',
        heigth: '80%'
    }
}))

export default useStyles