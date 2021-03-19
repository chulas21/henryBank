import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    cnt:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(0deg, rgba(115,195,213,1) 0%, rgba(36,55,70,1) 100%)',
        width: '80%',
        height: '90%',
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[8],
    },
    cvu:{
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '8%',
        color: '#fff'
    },
    txt: {
        fontSize: '180%',
        fontWeight: '500'
    },
    logo: {
        width: '30%',
        heigth:'30%',
        position: 'relative',
        top:'70%',
        left: '65%'
    },
    dots: {
        width: '30%',
        heigth: '30%',
        position: 'relative',
        left: '65%',
        top: '10%'
    },
    name: {
        color: '#fff',
        position: 'relative',
        bottom: '10%',
        left: '5%'
    }
}))


export default useStyles;