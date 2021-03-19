import {POST_AUTH, GET_AUTH} from '../constants/api';
import axios from 'axios';


export const postAuth = async (info) => {
    try{
        let  auth = await axios.post(`${POST_AUTH}/login`, info)
        return auth
    }catch (err) {
        return err
    }
}

export const getAuth = async() => {
    try{
        let auth = await axios.get(`${GET_AUTH}/me`)
        return auth
    }catch(err) {
        return err
    }
}