import React from 'react'
import TasksPage from "../../../tasksPage";

const PersonListItem = ({name, data, onDeleted}) => {
  return(
      <div className="card" style={{width: 'auto'}}>
        <h3 className="card-title">{name}</h3>
            <div className="card-body">
                <TasksPage data={data}/>
            </div>
        <button className="btn btn-danger" onClick={onDeleted}>Delete</button>
      </div>
  );
};

export default PersonListItem;