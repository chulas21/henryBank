import { combineReducers } from 'redux'
import form_reducer from './Form/reducer/form_reducers'
import register_reducer from './Register/reducer/register_reducer'
import user_reducer from './User/reducer/user_reducer'

export default combineReducers({
    form_reducer,
    register_reducer,
    user_reducer
})