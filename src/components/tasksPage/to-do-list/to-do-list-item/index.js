import React, {Component} from 'react'
import './to-do-list-item.css'

export default class ToDoListItem extends Component {
    state = {
        isDone: false,
        isImportant: false
    };

    render() {
        const {label, text, startData, finalData, isDone, isImportant, onDelete, isDoneHandler, isImportantHandler} = this.props;
        let style = '';
        if(isDone){
            style += ' isDone'
        }
        if(isImportant){
            style += ' isImportant'
        }
        return(
          <>
              <div className="card">
                  <div className="card-body">
                      <h5 className={"card-title"+style}>{label}</h5>
                      <p className="card-text">{text}</p>
                      <h6>{'start:' + startData}</h6>
                      <h6>{'deadline:' + finalData}</h6>
                <button onClick={isDoneHandler}
                        className="btn btn-success">Done</button>
                <button onClick={isImportantHandler}
                        className="btn btn-warning">Important</button>
                <button onClick={onDelete}
                        className="btn btn-danger">Delete</button>
                  </div>
              </div>
          </>
        );
    }
};