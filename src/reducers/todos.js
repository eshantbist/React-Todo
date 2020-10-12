import { ADD_TODO, GET_TODOS, EDIT_TODO, DELETE_TODO } from '../actions/actionTypes';
import { setTodos } from '../common/LocalStorage'

let initial_state = {
    todos:[]
}

export default function todoReducer(state=initial_state,action){
    switch (action.type) {
        case GET_TODOS:
          return {
            ...state,
            todos: [ ...state.todos, ...action.todos ]
          };
    
        case ADD_TODO:
          setTodos([
            ...state.todos,
            { ...action.todo, key: state.todos.length }
          ]);
          return {
            ...state,
            todos: [...state.todos, { ...action.todo, key: state.todos.length }]
          };
    
        case DELETE_TODO:
          setTodos(state.todos.filter(todo => todo.key !== action.todo));
          return {
            ...state,
            todos: state.todos.filter(todo => todo.key !== action.todo)
          };
    
        case EDIT_TODO:
          let temp_todos = state.todos.map(todo => {
            if (todo.key === action.key) {
              return {
                ...todo,
                action: action.values.action,
                email: action.values.dateadded
              };
            } else return todo;
          });
          setTodos(temp_todos);
          return {
            ...state,
            todos: temp_todos
          };
    
        default:
          return state;
      }
}