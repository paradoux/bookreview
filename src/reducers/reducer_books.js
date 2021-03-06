import { FETCH_REVIEW } from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_REVIEW:
            return [action.payload.data, ...state];
    }
    return state
}