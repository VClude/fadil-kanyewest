import {GET_QUOTE, QUOTE_ERROR, INSERT_FAV, INSERT_MYFAV} from '../types'
import axios from 'axios'


export const getQuote = () => async dispatch => {
    
    try{
        const res = await axios.get('https://api.kanye.rest')
        dispatch( {
            type: GET_QUOTE,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: QUOTE_ERROR,
            payload: console.log(e),
        })
    }

}

export const insertFav = (state) => async dispatch => {
    console.log(state)
    try{
        dispatch( {
            type: INSERT_FAV,
            payload: state
        })
    }
    catch(e){
        dispatch( {
            type: QUOTE_ERROR,
            payload: console.log(e),
        })
    }

}

export const insertMyFav = (state) => async dispatch => {
    console.log(state)
    try{
        dispatch( {
            type: INSERT_MYFAV,
            payload: state
        })
    }
    catch(e){
        dispatch( {
            type: INSERT_MYFAV,
            payload: console.log(e),
        })
    }

}