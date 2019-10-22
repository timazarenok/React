import {ADD_PERSON, ADD_TODOS, DELETE_PERSON, DELETE_TODOS, GET_PERSONS, SET_DONE, SET_IMPORTANT} from "../constants";

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PERSONS: {
            return {persons: [...action.value]};
        }
        case ADD_PERSON: {
            return {persons: [...state.persons, {...action.value}]};
        }
        case SET_IMPORTANT: {
            const {id, idTodos} = action.value;
            const {persons} = state;
            const ind = persons.findIndex((el) => el.id === id);
            const todolist = change(persons[ind].todolist, idTodos, 'isImportant');
            const temp = {...persons[ind]};
            temp.todolist = todolist;
            return {persons: [...persons.slice(0, ind),
                    temp,
                    ...persons.slice(ind + 1)]};
        }
        case SET_DONE: {
            const {id, idTodos} = action.value;
            const {persons} = state;
            const ind = persons.findIndex((el) => el.id === id);
            const todolist = change(persons[ind].todolist, idTodos, 'isDone');
            const temp = {...persons[ind]};
            temp.todolist = todolist;
            return {persons: [...persons.slice(0, ind),
                    temp,
                    ...persons.slice(ind+1)]};
        }
        case DELETE_PERSON: {
            const {id} = action.value;
            const array = state.persons.filter((el) => el.id !== id);
            return {persons: [...array]};
        }
        case ADD_TODOS: {
            const {id, item} = action.value;
            const index = state.persons.findIndex((el) => el.id === id);
            const temp = {...state.persons[index]};
            temp.todolist.push({...item});
            return {persons: [...state.persons.slice(0, index), {...temp}, ...state.persons.slice(index + 1)]};
        }
        case DELETE_TODOS: {
            const {idTodos, id} = action.value;
            const index = state.persons.findIndex(el => el.id === id);
            const temp = {...state.persons[index]};
            temp.todolist = temp.todolist.filter(el => el.id !== idTodos);
            return {persons: [...state.persons.slice(0, index), {...temp}, ...state.persons.slice(index + 1)]};
        }
        default:
            return state;
    }
};

const change = (todolist, id, propName) => {
    const index = todolist.findIndex((el) => el.id === id);
    const temp = todolist[index];
    const newItem = {...temp, [propName]: !temp[propName]};
    return [...todolist.slice(0, index),
        newItem,
        ...todolist.slice(index+1)];
};

export default reducer;