import axios from 'axios'
import {GET_TRANSFER} from '../constants/api'

export const getTransfer = async(cvu) => {
    try{
        const transfer = await axios.get(`${GET_TRANSFER}/${cvu}`)
        return transfer
    }catch(err){
        return err
    }
}