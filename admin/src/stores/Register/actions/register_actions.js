import {ADD_DATA, DELETE_DATA, POST_DATA} from '../actions/action_types'

export const addData = (payload) => {
    return {
        type: ADD_DATA,
        payload,
    }
}

export const postData = () => { 
    return {
        type: POST_DATA
    }
}

export const deleteData = () => {
    return {
        type: DELETE_DATA
    }
}