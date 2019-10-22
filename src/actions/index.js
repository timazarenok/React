import {ADD_PERSON, ADD_TODOS, DELETE_PERSON, DELETE_TODOS, GET_PERSONS, SET_DONE, SET_IMPORTANT} from "../constants";
import axios from 'axios'

export const addPerson = (item) => {
    return {type: ADD_PERSON, value: item}
};

export const deletePerson = (id) => {
    return {type: DELETE_PERSON, value: {id}}
};

export const addTodos = (id, item) => {
    return {type: ADD_TODOS, value: {id, item: item}};
};

export const deleteTodos = (idTodos, id) => {
    return {type: DELETE_TODOS, value: {idTodos, id}}
};

export const setImportant = (id, idTodos) => {
  return {type: SET_IMPORTANT, value: {id, idTodos}};
};

export const setDone = (id, idTodos) => {
    return {type: SET_DONE, value: {id, idTodos}};
};

export const getPersons = () => {
  return async dispatch => {
   await axios.get('https://persons-5ad14.firebaseio.com/persons.json')
          .then(response => {
              dispatch({type: GET_PERSONS, value: response.data})
          })
  }
};