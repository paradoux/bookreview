import { combineReducers } from 'redux';
import BookReducer from './reducer_books'

const rootReducer = combineReducers({
    book: BookReducer
});

export default rootReducer;