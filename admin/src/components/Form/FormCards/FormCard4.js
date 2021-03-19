import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import {postForm} from '../../../controllers/formControllers'
import { useSelector,useDispatch } from 'react-redux'
import {deleteData} from '../../../stores/Register/actions/register_actions'
import { removeCurrent } from '../../../stores/Form/actions/form_actions'
import logo from '../../../images/Negro.svg'

import './styles.css'

const FormCard4 = () => {
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        status: ''
    })

    const dispatch = useDispatch()
    const state = useSelector(state => state.register_reducer)
    const data = {...state.data[0], ...state.data[1], ...state.data[2], ...state.data[3]}

    useEffect(() => {
        postForm(data)
            .then(() => {
                setUser({
                    ...user,
                    name: state.data[1].name,
                    lastName: state.data[1].lastName,
                    status: 'Check your Email'
                })
            })
    },[1])

    const login = (e) => {
        e.preventDefault()
        dispatch(deleteData())
    }

    const handlerAgain = (e) => {
        e.preventDefault()
        dispatch(deleteData())
        dispatch(removeCurrent())
    }


    return (
        <div className='cnt'>
            <header>
                <img src={logo} />
            </header>
            <div className="progress-bar">
                <div className="step active">
                    <p className='active'>Email</p>
                    <div className="bullet active">
                        <span>1</span>
                    </div>
                    <div className="check fas fa-check active">
                    </div>
                </div>
                <div class="step active">
                    <p className='active'>Basic</p>
                    <div className="bullet active">
                        <span>2</span>
                    </div>
                    <div className="check fas fa-check active">
                    </div>
                </div>
                <div class="step active">
                    <p className='active'>Documents</p>
                    <div class="bullet active">
                        <span>3</span>
                    </div>
                    <div className="check fas fa-check active">
                    </div>
                </div>
                <div class="step active">
                    <p className='active'>Address</p>
                    <div class="bullet active">
                        <span>4</span>
                    </div>
                    <div className="check fas fa-check active">
                    </div>
                </div>
            </div>
            <div className='form-finish'>
                {user.name.length > 2 ? <p className='titlep'>CONGRATULATIONS</p>: <p className='titlep'>Something was wrong</p>}
                {user.name.length > 2 ? <p className='subtitle'>{user.name} {user.lastName}, please {user.status}</p>: <p className='subtitle'>But it is not your fault</p>}
                {user.name.length > 2 ? 
                    <NavLink to='/login' className='navButton' >
                        <button type='submit' className='button'>Login</button>
                    </NavLink> :  
                    <button type='submit' className='button' onClick={(e) => handlerAgain(e)}>Try Again</button>
                }
            </div>

        </div>
    )
}

export default FormCard4
