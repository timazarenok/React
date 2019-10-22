import React, {Component} from 'react';
import ToDoList from "./to-do-list";
import AddBoard from "./addBoard";
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from "react-redux";
import {addTodos, deleteTodos, setDone, setImportant} from "../../actions";

class TasksPage extends Component {
    id = 1;

    createToDoItem (label, text, startData, finalData) {
        return {
            label,
            text,
            startData,
            finalData,
            done: false,
            important: false,
            id: this.id++
        }
    }

    isDoneHandler = (id) => {
        this.props.setDone(this.props.id, id);
    };

    isImportantHandler = (id) => {
        this.props.setImportant(this.props.id, id);
    };

    onDelete = (idTodos) => {
        this.props.deleteTodos(idTodos, this.props.id);
    };

    addItem = (label, text, startData, finalData) => {
        const newItem = this.createToDoItem(label,text,startData,finalData);
        this.props.addTodos(this.props.id, newItem);
    };

    render() {
        return (
            <div>
                <span>Enter ur tasks</span>
                <AddBoard addItem={this.addItem}/>
                <span>ToDoList</span>
                <ToDoList todolist={this.props.todolist}
                          isDoneHandler={this.isDoneHandler}
                          isImportantHandler={this.isImportantHandler}
                          onDelete={this.onDelete}/>
            </div>
        );
    }
}

export default connect(state => ({state: state.persons}),
    dispatch => ({
        setImportant: (id, idTodos) => dispatch(setImportant(id, idTodos)),
        setDone: (id, idTodos) => dispatch(setDone(id, idTodos)),
        addTodos: (id, item) => dispatch(addTodos(id, item)),
        deleteTodos: (idTodos, id) => dispatch(deleteTodos(idTodos, id))
    })
)(TasksPage);
