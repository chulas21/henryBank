import { ADD_DATA, DELETE_DATA, POST_DATA } from '../actions/action_types'

const initialState = {
    data:[]
}

const register_reducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_DATA:
            
            return{ 
                ...state, 
                data: [...state.data, action.payload]
            } 
            
        case DELETE_DATA:
            return {
                ...state,
                data: []
            }    
        default:
            return state
    }
};

export default register_reducer;