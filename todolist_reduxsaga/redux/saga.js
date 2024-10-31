// dung redux saga xu li: bat dong bo, side effect
// redux saga api (6d)

import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";

import {FETCH_TODO,FETCH_TODO_SUCCESS,FETCH_TODO_FAIL,
ADD_TODO,ADD_TODO_SUCCESS, ADD_TODO_FAIL,
UPDATE_TODO,UPDATE_TODO_SUCCESS, UPDATE_TODO_FAIL,
DELETE_TODO,DELETE_TODO_SUCCESS, DELETE_TODO_FAIL} from "./actions";

const apiURL= 'https://6454008bc18adbbdfead590d.mockapi.io/api/v1/api_todolist';

function* fetchTodoSaga(){
  try{
    const response = yield call(axios.get, apiURL);
    yield put({ type: FETCH_TODO_SUCCESS, payload: response.data});
  } catch(error){
    yield put({type: FETCH_TODO_FAIL, payload: error.messsage});
  }
}

function* addTodoSaga(action){
  try{
    const response = yield call(axios.post, apiURL, action.payload);
    yield put({type: ADD_TODO_SUCCESS, payload: response.data});
  } catch (error){
    yield put({ type: ADD_TODO_FAIL, payload: error.message});
  }
}

function* updateTodoSaga(action){
  try{
    const response = yield call(axios.put,`${apiURL}/${action.payload.id}`, action.payload);
    yield put({type: UPDATE_TODO_SUCCESS, payload: response.data});
  } catch(error){
    yield put({ type: UPDATE_TODO_FAIL, payload: error.message})
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: DELETE_TODO_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_TODO_FAILURE, payload: error.message });
  }
}

export function* rootSaga(){
  yield takeEvery(FETCH_TODO, fetchTodoSaga);
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(UPDATE_TODO, updateTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
}