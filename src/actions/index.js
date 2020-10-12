import { ADD_TODO, GET_TODOS, EDIT_TODO, DELETE_TODO, GET_USERS, ADD_USER, EDIT_USER, DELETE_USER } from './actionTypes';
import { getUsers, getTodos } from '../common/LocalStorage';

export const fetchUsersTodos = () => {
    return dispatch => {
        let users = [];
        let todos = [];
        if (getUsers()) {
            users = getUsers();
        }
        if (getTodos()) {
            todos = getTodos();
        }
        dispatch({ type: GET_TODOS, todos });
        dispatch({ type: GET_USERS, users });
    };
};

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const editTodo = (key, values) => {
    return{
        type: EDIT_TODO,
        key,
        values
    }
}

export const deleteTodo = todo => {
    return{
        type: DELETE_TODO,
        todo
    }
}
  
export const addUser = user => {
    return {
        type: ADD_USER,
        user
    }
};
  
export const editUser = (key, values) => {
    return {
        type: EDIT_USER,
        key,
        values
    }
};

export const deleteUser = user => {
    return {
        type: DELETE_USER,
        user
    }
};