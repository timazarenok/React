import React from 'react'
import ToDoListItem from "./to-do-list-item";

const ToDoList = ({data, isDoneHandler, isImportantHandler, onDeleted}) => {
    return(
        <ul className="list">
            {
                data.map((el) => {
                    return <li key={el.id} className="list-inline-item">
                        <ToDoListItem {...el}
                        onDeleted={() => onDeleted(el.id)}
                        isDoneHandler={() => isDoneHandler(el.id)}
                        isImportantHandler={() => isImportantHandler(el.id)}/>
                    </li>
                })
            }
        </ul>
    );
};

export default ToDoList;