import {GET_ACCOUNT} from '../constants/api'
import axios from 'axios'

export const getAccounts = async(id) => {
    try{
        let accounts = await axios.get(`${GET_ACCOUNT}/${id}`)
        return accounts
    }
    catch(err){
        return err 
    }
}