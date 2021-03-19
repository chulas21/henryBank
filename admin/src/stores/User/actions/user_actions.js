import {LOGIN, LOGOUT} from './action_types'

export const logIn = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const logOut = (payload) => {
    return {
        type: LOGOUT,
        payload
    }
}