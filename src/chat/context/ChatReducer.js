import {
    SEND_MESSAGE, SET_SEARCH_BAR
} from './types'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            return {
                ...state,
                messages: action.payload
            }
        case SET_SEARCH_BAR:
            return {
                ...state,
                searchBar: !state.searchBar
            }
        default:
            return state
    }
}