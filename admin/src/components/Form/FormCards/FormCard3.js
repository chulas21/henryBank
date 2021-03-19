import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrent, returnCurrent } from '../../../stores/Form/actions/form_actions'
import {addData} from '../../../stores/Register/actions/register_actions'
import logo from '../../../images/Negro.svg'

import './styles.css'

const FormCard3 = () => {
    const [info, setInfo] = useState({
        street: '',
        number: '',
        location: '',
        province: '',
        country: ''
    })

    const [errs, setErrs] = useState({}) 

    const validate = (info) => {
        let errors = {}
        if(!info.street){
            errors.street = 'street is empty'
        }
        if(!info.number){
            errors.number = 'number is empty'
        }
        if(!info.location){
            errors.location = 'location is empty'
        }
        if(!info.province){
            errors.province = 'province is empty'
        }
        if(!info.country){
            errors.country = 'country is empty'
        }
        return errors
    }

    const dispatch = useDispatch()

    const handlerInput = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
        setErrs(validate(info))
    }


    const handlerNext = (e) => {
        e.preventDefault()
        if(info.street.length < 2||info.number.length < 2||info.location.length < 2||info.province.length < 2||info.country.length < 2){
            alert('please fill the form') 
        }else{
            dispatch(changeCurrent())
            dispatch(addData(info))
        }
    }

    const handlerPrevious = (e) => {
        e.preventDefault()
        dispatch(returnCurrent())
    }

    return (
        <div className='cnt'>
            <header>
                <img src={logo} />
            </header>
            <div class="progress-bar">
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
                    <div class="bullet active">
                        <span>2</span>
                    </div>
                    <div class="check fas fa-check active">
                    </div>
                </div>
                <div class="step active">
                    <p className='active'>Documents</p>
                    <div class="bullet active">
                        <span>3</span>
                    </div>
                    <div class="check fas fa-check active">
                    </div>
                </div>
                <div class="step">
                    <p>Address</p>
                    <div class="bullet">
                        <span>4</span>
                    </div>
                    <div class="check fas fa-check">
                    </div>
                </div>
            </div>
            <div className='form-outer'>
                <form action='#' >
                    <div className='page'>
                        <div className='title'>
                            Address Info:</div>
                        <div className='field'>
                            <div className='label'>
                                Street</div>
                            <input type='text' name='street' onChange={handlerInput} value={info.street} />
                            <div className='rightLabel'>
                                Number</div>
                            <input type='text' name='number' onChange={handlerInput} value={info.number} />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Location</div>
                            <input type='text' name='location' onChange={handlerInput} value={info.location} />
                            <div className='rightLabel'>
                                Province</div>
                            <input type='text' name='province' onChange={handlerInput} value={info.province} />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Country</div>
                            <input type='text' name='country' onChange={handlerInput} value={info.country} />
                        </div>
                        <div className="field btns">
                            <button className="prev-3 prev" onClick={(e) => handlerPrevious(e)} >Previous</button>
                            {Object.keys(errs).length === 0 ?
                                <button type='submit' className="submit" onClick={(e) => handlerNext(e)}>Next</button>:
                                <button type='submit' className="submit" disabled>Next</button>}
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormCard3
