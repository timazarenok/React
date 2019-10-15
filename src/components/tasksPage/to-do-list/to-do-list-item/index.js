import React, {Component} from 'react'

export default class ToDoListItem extends Component {
    state = {
        isDone: false,
        isImportant: false
    };

    render() {
        const {label, text, isDone, isImportant, isDoneHandler, isImportantHandler, onDeleted} = this.props;
        return(
          <>
              <div className="card" style={{width: 8+'rem'}}>
                  <div className="card-body">
                      <h5 className="card-title">{label}</h5>
                      <p className="card-text">{text}</p>
                <button onClick={isDoneHandler}
                        className="btn btn-success">Done</button>
                <button onClick={isImportantHandler}
                        className="btn btn-warning">Important</button>
                <button onClick={onDeleted}
                        className="btn btn-danger">Delete</button>
                  </div>
              </div>
          </>
        );
    }
};