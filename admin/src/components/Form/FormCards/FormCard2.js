import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeCurrent,  returnCurrent} from '../../../stores/Form/actions/form_actions'
import {addData} from '../../../stores/Register/actions/register_actions'
import logo from '../../../images/Negro.svg'

import './styles.css'

const FormCard2 = () => {
    const [info, setInfo] = useState({
        docType: '',
        docNumber: '',
        birthday: ''
    })

    const [errs, setErrs] = useState({}) 

    const validate = (info) => {
        let errors = {}
        if(!info.docType){
            errors.docType = 'Type is empty'
        }
        if(!info.docNumber){
            errors.docNumber = 'Document is empty'
        }
        if(!info.birthday){
            errors.birthday = 'Birthday is empty'
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
        if(info.docType.length < 2 || info.docNumber.length < 2 || info.birthday < 2){
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
                    <div class="bullet active">
                        <span>2</span>
                    </div>
                    <div class="check fas fa-check active">
                    </div>
                </div>
                <div class="step">
                    <p>Documents</p>
                    <div class="bullet">
                        <span>3</span>
                    </div>
                    <div class="check fas fa-check">
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
                            Documents:</div>
                        <div className='field'>
                            <div className='label'>
                                Document Type</div>
                            <select name='docType' onChange={handlerInput} value={info.docType} autoComplete="off">
                                <option> </option>
                                <option>DNI</option>
                                <option>PASSPORT</option>
                                <option>LE</option>
                                <option>CI</option>
                                <option>LC</option>
                            </select>
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Document Number</div>
                            <input type='text' name='docNumber' onChange={handlerInput} value={info.docNumber} autoComplete="off" />
                        </div>
                        <div className='field'>
                            <div className='label'>
                                Birthday</div>
                            <input type='date' name='birthday' onChange={handlerInput} value={info.birthday} autoComplete="off"/>
                        </div>
                        <div className="field btns">
                            <button type='submit' className="prev-1 prev" onClick={(e) => handlerPrevious(e)}>Previous</button>
                            {Object.keys(errs).length === 0 ?
                                <button type='submit' className="next-1 next" onClick={(e) => handlerNext(e)}>Next</button>:
                                <button type='submit' className="next-1 next disabled" disabled>Next</button>}
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FormCard2
