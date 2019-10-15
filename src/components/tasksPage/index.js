import React, {Component} from 'react';
import ToDoList from "./to-do-list";
import AddBoard from "./addBoard";
import 'bootstrap/dist/css/bootstrap.css'

class TasksPage extends Component {
    id = 0;
    state = {
        data: this.props.data
    };

    toggleProperty(arr,id,propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

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
        this.setState(({data}) => {
            return this.toggleProperty(data, id, 'Done')
        })
    };

    isImportantHandler = (id) => {
        this.setState(({data}) => {
            return this.toggleProperty(data, id, 'Important')
        })
    };

    onDelete = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((el) => el.id === id);
            const newArray = [...data.slice(0, index),
                ...data.slice(index + 1)];
            return{
                data: newArray
            };
        })
    };

    addItem = (label, text, startData, finalData) => {
        const newItem = this.createToDoItem(label,text,startData,finalData);
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            return{
                data: newArray
            }
        });
        console.log(this.state.data)
    };

    render() {
        return (
            <div>
                <span>Enter ur tasks</span>
                <AddBoard addItem={this.addItem}/>
                <span>ToDoList</span>
                <ToDoList data={this.state.data}
                          isDoneHandler={this.isDoneHandler}
                          isImportantHandler={this.isImportantHandler}
                          onDeleted={this.onDelete}/>
            </div>
        );
    }
}

export default TasksPage;
