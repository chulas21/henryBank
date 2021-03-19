import {LOGIN} from '../actions/action_types'

const intialState = {
    user: []
}

const user_reducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
    
        default:
            return state
    }
}

export default user_reducer;