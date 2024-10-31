export const FETCH_TODO="FETCH_TODO";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCES";
export const FETCH_TODO_FAIL = "FETCH_TODO_FAIL";

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAIL= "ADD_TODO_FAIL";

export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAIL= "UPDATE_TODO_FAIL";

export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAIL= "ADD_TODO_FAIL";

export const fetchTodos= ()=> ({
  type: FETCH_TODOS
});
export const addTodo = (todo)=>({
  type: ADD_TODO,
  payload: todo
});
export const updateTodo = (todo)=>({
  type: UPDATE_TODO,
  payload: todo
});
export const deleteTodo = (id)=>({
  type: DELETE_TODO,
  payload: id
})