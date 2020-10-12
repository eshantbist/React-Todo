import { GET_USERS, ADD_USER, EDIT_USER, DELETE_USER } from '../actions/actionTypes';
import { setUsers } from '../common/LocalStorage'

let initial_state = {
    users:[]
}

export default function userReducers(state=initial_state,action){
    switch (action.type) {
        case GET_USERS:
          return {
            ...state,
            users: [ ...state.users, ...action.users ]
          };
    
        case ADD_USER:
          setUsers([
            ...state.users,
            { ...action.user, key: state.users.length }
          ]);
          return {
            ...state,
            users: [...state.users, { ...action.user, key: state.users.length }]
          };
    
        case DELETE_USER:
          setUsers(state.users.filter(user => user.key !== action.user));
          return {
            ...state,
            users: state.users.filter(user => user.key !== action.user)
          };
    
        case EDIT_USER:
          let temp_users = state.users.map(user => {
            if (user.key === action.key) {
              return {
                ...user,
                name: action.values.name,
                email: action.values.email
              };
            } else return user;
          });
          setUsers(temp_users);
          return {
            ...state,
            users: temp_users
          };
    
        default:
          return state;
    }
}