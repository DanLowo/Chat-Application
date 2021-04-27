import {
    SEND_MESSAGE
} from './types'

// eslint-disable-next-line
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