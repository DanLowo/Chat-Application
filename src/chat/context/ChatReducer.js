import {
    SEND_MESSAGE, SET_SEARCH_BAR, SET_MESSENGER_SEARCH, SET_USER, 
    ADD_TO_BOOKMARK
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
                searchBar: !state.searchBar,
                messengerSearchList: []
            }
        case SET_MESSENGER_SEARCH:
            return {
                ...state,
                messengerSearchList: action.payload 
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_TO_BOOKMARK:
            return {
                ...state,
                bookmarks: action.payload
            }
        default:
            return state
    }
}