import {GET_STATISTICS} from '../constants/api';
import axios from 'axios';

export const getStatistics = async(cvu) => {
    try{
        const statistics = await axios.get(`${GET_STATISTICS}/${cvu}`)
        return statistics
    }catch(err){
        return err
    }
}

