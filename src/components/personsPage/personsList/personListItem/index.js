import React from 'react'
import TasksPage from "../../../tasksPage";
import './personListItem.css'

const PersonListItem = ({id, name, todolist, onDeleted}) => {
  return(
      <div className="card cardSize">
        <h3 className="card-title">{name}</h3>
            <div className="card-body">
                <TasksPage id={id} todolist={todolist}/>
            </div>
        <button className="btn btn-danger" onClick={onDeleted}>Delete</button>
      </div>
  );
};

export default PersonListItem;