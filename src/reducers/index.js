import { combineReducers } from 'redux';
import users from './users';
import todos from './todos';

const reducers = combineReducers({
    users,
    todos
})

export default reducers;
