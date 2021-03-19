import {POST_FORM} from '../constants/api';
import axios from 'axios'

export const postForm = async (info) => {
    try {
        const res = await axios.post(`${POST_FORM}/`, info)
        return res
    } catch(err){
        console.log({msg: err})
    }
}
