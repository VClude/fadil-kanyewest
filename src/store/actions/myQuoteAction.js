import {INSERT_MYFAV} from '../types'

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