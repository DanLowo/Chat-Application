import {
    SEND_MESSAGE
} from './types'

export default (state, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state
    }
}