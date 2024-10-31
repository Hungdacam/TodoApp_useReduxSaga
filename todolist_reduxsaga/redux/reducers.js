import {FETCH_TODO_SUCCESS,FETCH_TODO_FAIL,
ADD_TODO_SUCCESS, ADD_TODO_FAIL,
UPDATE_TODO_SUCCESS, UPDATE_TODO_FAIL,
DELETE_TODO_SUCCESS, DELETE_TODO_FAIL} from "./actions";

const initialState = {
  todos: [],
  loading: false,
  error: null,
}
export const todosReducer =(state = initialState, action)=>{
  switch (action.type){
    case FETCH_TODO_SUCCESS:
      return {...state, todos: action.payload, loading: false, error: null};
    case FETCH_TODO_FAIL:
    case ADD_TODO_FAIL:
    case UPDATE_TODO_FAIL:
    case DELETE_TODO_FAIL:
      return {...state, loading: false, error: action.payload};
    case ADD_TODO_SUCCESS:
      return {...statae, todos: [...state.todos, action.payload]};
    case UPDATE_TODO_SUCCESS: 
      return {
        ...state, 
        todos: state.todos.map((todo)=>todo.id === action.payload.id ? action.payload : todo)
      }
    case DELETE_TODO_SUCCESS: 
      return {
        ...state, 
        todos: state.todos.filter((todo)=>todo.id !==action.payload)
      }
    default: return state;
  }
};