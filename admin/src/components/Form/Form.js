import React, {useEffect} from 'react';
import {Toolbar} from '@material-ui/core'
import FormCard0 from './FormCards/FormCard0'
import FormCard1 from './FormCards/FormCard1'
import FormCard2 from './FormCards/FormCard2'
import FormCard3 from './FormCards/FormCard3'
import FormCard4 from './FormCards/FormCard4'
import logo from '../../images/Blanco.svg';
import {removeCurrent} from '../../stores/Form/actions/form_actions'
import {deleteData} from '../../stores/Register/actions/register_actions'
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';

const Form = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(removeCurrent())
        dispatch(deleteData())
    },[1])

    const current = useSelector(state => state.form_reducer)

    let component = <FormCard0  />
    
    if(current === 1){
        component = <FormCard1 />
    }else if(current === 2){
        component = <FormCard2 />
    }else if(current === 3){
        component = <FormCard3 />
    }else if(current === 4){
        component = <FormCard4 />
    }

    return (
        <div className='container'>
            <Toolbar />
            <div className='card'>
                <div className='form'>
                    {component}
                </div>
            </div>
        </div>
    )
}

export default Form
