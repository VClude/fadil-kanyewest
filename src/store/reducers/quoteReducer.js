import {GET_QUOTE, INSERT_FAV, INSERT_MYFAV} from '../types'

const initialState = {
    kanyequote:[],
    fav: [],
    myfav: [],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_QUOTE:
        return {
            ...state,
            kanyequote:action.payload,
            loading:false

        }
        case INSERT_FAV:
        return {
            ...state,
            fav: state.fav.includes(action.payload) ? state.fav : [ action.payload, ...state.fav ],
            loading:false

        }
        case INSERT_MYFAV:
        return {
            ...state,
            myfav: state.myfav.includes(action.payload) ? state.myfav : [ action.payload, ...state.myfav ],
            loading:false

        }
        default: return state
    }

}